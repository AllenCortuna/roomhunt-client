import axios from "axios";
import create from "zustand";
// WARN: put in env
const api = axios.create({ baseURL: "https://roomhunt-server.onrender.com/" });
// const api = axios.create({ baseURL: "http://localhost:8000" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("acc")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("acc")).token
    }`;
  }
  return req;
});
export const useRegisterState = create((set) => ({
  data: {},
  loading: false,
  err: "",
  login: "",

  registerAcc: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      console.log("data:",data);
      const result = await api.post("/accommodator/signup", {
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
      console.log(result.data)
      navigate("/register/verify-email");
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
      const result = await api.post("/accommodator/verify-email", {
        otp: data.otp,
        accommodatorId: data.accommodatorId,
      });
      navigate("/dashboard");
      set({ data: result.data.result });
      set({ login: "acc" });
      localStorage.setItem("acc", JSON.stringify(result?.data));
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

  loginAcc: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/accommodator/login", data);
      set({ data: result.data.result });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("acc", JSON.stringify(result?.data));
      set({ login: "acc" });
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },


  curUsr: (data) => {
    set({ login: data });
  },
}));
