import axios from "axios";
import create from "zustand";
// const api = axios.create({ baseURL: "https://room-hunt.herokuapp.com/" });
const api = axios.create({ baseURL: "http://localhost:8000" });
export const useRegisterState = create((set) => ({
  data: {},
  loading: false,
  error: false,

  registerAcc: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/accommodator/signup", data);
      set({ data: result.data.result });
      alert(result.data.result);
    } catch (err) {
      set({ error: err });
      alert(err.message)
    }
    set({ loading: false });
  },

  verifyEmail: async (data,navigate) => {
    set({ loading: true });
    try {
      const result = await api.post("/accommodator/verify-email", {
        otp: data.otp,
        accommodatorId: data.accommodatorId,
      });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("profile", result.data);
      console.log("result verify email",result.data);
    } catch (err) {
      set({ error: err });
      alert(err)
    }
    set({ loading: false });
  },

  logOut: () => {
    localStorage.clear();
    console.log("logout and clear storage")
  },
}));
