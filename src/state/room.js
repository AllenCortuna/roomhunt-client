import create from "zustand";
import axios from "axios";
// WARN:https://room-hunt.herokuapp.com/
// dapat na env

// const api = axios.create({ baseURL: "https://room-hunt.herokuapp.com/" });
const api = axios.create({ baseURL: "http://localhost:8000" });

api.interceptors.request.use((req) => {
  if (localStorage.getItem("acc")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("acc")).token
    }`;
  }
  return req;
});

export const roomStore = create((set) => ({
  rooms: [],
  loading: false,
  error: false,

  getRoomBySearch: async () => {
    try {
      const response = await api.get("/room");
      set({ rooms: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
  },

  getRoomsById: async ({ id }) => {
    try {
      const response = await api.get(`room/${id}`);
      set({ rooms: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
  },

  uploadRoom: async ({ data }) => {
    set({ loading: true });
    try {
      await api.post("/room", data);
      alert(data.creator)
      set((state) => ({ rooms: [...state.rooms, data] }));
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
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
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  deleteRooms: async ({ id }) => {
    try {
      await api.delete(`/rooms/${id}`);
      set((state) => ({
        rooms: state.rooms.filter((a) => a._id !== id),
      }));
    } catch (err) {
      alert(err.message);
    }
  },
}));
