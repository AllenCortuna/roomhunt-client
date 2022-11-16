import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

export const messageStore = create((set) => ({
  messages: [],
  err: null,
  loading: false,

  getMessage: async (data) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.post("message/get", { data });
      set({ message: result });
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  

  postMessage: async (data) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.post("message/post", { data });
      set((state) => ({ messages: [...state.messages, result.data] }));
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  setErr: (err) => {
    set({ err: err });
  },
}));
