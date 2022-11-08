import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

export const resetStore = create((set) => ({
  err: null,
  loading: false,

  resetAccPW: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      await api.post("reset/acc",data);
      navigate("/reset/otp-acc");
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  resetClientPW: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      await api.post("reset/client",data);
      navigate("/reset/otp-client");
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
}));
