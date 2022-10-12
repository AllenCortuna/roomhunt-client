import axios from "axios";
import create from "zustand";
// WARN: put in env
const api = axios.create({ baseURL: "https://room-hunt.herokuapp.com/" });
// const api = axios.create({ baseURL: "http://localhost:8000" });
export const useRegisterState = create((set) => ({
  data: {},
  loading: false,
  error: false,

  registerAcc: async (data, setPage) => {
    set({ loading: true });
    try {
      const result = await api.post("/accommodator/signup", data);
      set({ data: result.data.result });
      setPage(3);
    } catch (err) {
      set({ error: err });
      alert(err.message);
    }
    set({ loading: false });
  },

  verifyEmail: async (data, navigate) => {
    set({ loading: true });
    try {
      const result = await api.post("/accommodator/verify-email", {
        otp: data.otp,
        accommodatorId: data.accommodatorId,
      });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("profile", JSON.stringify(result?.data));
      console.log("result verify email", result.data);
    } catch (err) {
      set({ error: err });
      alert(err);
    }
    set({ loading: false });
  },

  logOut: () => {
    localStorage.clear();
    console.log("logout and clear storage");
  },
}));
