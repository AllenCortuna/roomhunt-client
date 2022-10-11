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
      console.log(result.data.result)
    } catch (err) {
      set({ error: err });
    }
    set({ loading: false });
  },

  verifyEmail: async (data) => {
    console.log("data",data);
    set({ loading: true });
    try {
      const result = await api.post("/accommodator/verify-email", {otp : data.otp, accommodatorId : data.accommodatorId});
      const nav = data.navigate
      nav("/dashboard")
      set({ data: result });

      console.log(result)
    } catch (err) {
      set({ error: err });
    }
    set({ loading: false });
  },
}));
