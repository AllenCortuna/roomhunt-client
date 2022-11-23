import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("acc")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("acc")).token
    }`;
  }
  if (localStorage.getItem("client")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("client")).token
    }`;
  }
  return req;
});

export const messageStore = create((set) => ({
  message: [],
  err: null,
  loading: false,

  getRecieve: async (id) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.get(`message/getRecieve/${id}`);
      set({ message: result.data.result });
    } catch (err) {
      set({ err: err.response.data.message });
      console.log(err);
    }
    set({ loading: false });
  },

  getSend: async (id) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.get(`message/getSend/${id}`);
      set({ message: result.data.result });
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  sendMessage: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.post("message/send", data);
      set((state) => ({ message: [...state.message, result.data] }));
      navigate(-1);
      alert("Message Sent!");
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  setErr: (err) => {
    set({ err: err });
  },

  deleteMessage: async (id) => {
    set({ loading: true });
    set({ err: null });
    try {
      await api.delete(`/message/delete/${id}`);
      set((state) => ({
        message: state.message.filter((a) => a._id !== id),
      }));
    } catch (err) {
      // set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },
}));
