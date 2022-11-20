import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("acc")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("acc")).token
    }`;
  }
  return req;
});

export const messageStore = create((set) => ({
  messages: [],
  err: null,
  loading: false,

  getRecieve: async (id) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.get(`message/getRecieve/${id}`);
      set({ message: result });
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  getSend: async (id) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.get(`message/getSend/${id}`);
      set({ message: result });
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },
  
  

  sendMessage: async (data) => {
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
