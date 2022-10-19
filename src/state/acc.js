import axios from "axios";
import create from "zustand";
// WARN: put in env
const api = axios.create({ baseURL: "https://room-hunt.herokuapp.com/" });
// const api = axios.create({ baseURL: "http://localhost:8000" });

// api.interceptors.request.use((req) => {
//   if (localStorage.getItem("acc")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("acc")).token
//     }`;
//   }
//   return req;
// });
export const useRegisterState = create((set) => ({
  data: {},
  loading: false,
  error: false,

  registerAcc: async (data, setPage) => {
    set({ loading: true });
    set({ error: false });
    try {
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
      set({ data: result.data.result });
      setPage(3);
    } catch (err) {
      set({ error: true });
    }
    set({ loading: false });
  },

  loginAcc: async (data, navigate) => {
    set({ loading: true });
    set({ error: false });
    try {
      const result = await api.post("/accommodator/login", data);
      set({ data: result.data.result });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("acc", JSON.stringify(result?.data));
    } catch (err) {
      set({ error: true });
      console.log(err.message)
    }
    set({ loading: false });
  },

  verifyEmail: async (data, navigate) => {
    set({ loading: true });
    set({ error: false });
    try {
      const result = await api.post("/accommodator/verify-email", {
        otp: data.otp,
        accommodatorId: data.accommodatorId,
      });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("acc", JSON.stringify(result?.data));
    } catch (err) {
      set({ error: true });
    }
    set({ loading: false });
  },

  logOut: (navigate) => {
    localStorage.clear();
    alert("logout and clear storage");
    navigate("/");
  },
}));
