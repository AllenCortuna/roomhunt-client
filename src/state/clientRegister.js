
import axios from "axios";
import create from "zustand";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("client")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("client")).token
    }`;
  }
  return req;
});
export const useRegisterState = create((set) => ({
  data: {},
  loading: false,
  err: "",
  login: "",

  registerClient: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/signup", {
        email: data.email,
        password: data.password,
        businessName: data.businessName,
        contact: data.contact,
        image: data.image,
        category: data.category,
        owner: data.owner,
        location: `${data.street} ${data.brgy} ${data.city}, ${data.province}`,
      });
      localStorage.setItem("register", JSON.stringify(result?.data));
      navigate("/client/verify-email");
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  verifyEmail: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/verify-email", {
        otp: data.otp,
        accommodatorId: data.accommodatorId,
      });
      navigate("/client");
      set({ data: result.data.result });
      set({ login: "client" });
      localStorage.setItem("client", JSON.stringify(result?.data));
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  logOut: (navigate) => {
    localStorage.clear();
    set({ login: "" });
    navigate("/");
  },

  loginClient: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/login", data);
      set({ data: result.data.result });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("client", JSON.stringify(result?.data));
      set({ login: "client" });
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },


}));
