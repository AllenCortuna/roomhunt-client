import create from "zustand";
import axios from "axios";
// WARN:https://room-hunt.herokuapp.com/
// dapat na env

const api = axios.create({ baseURL: "https://room-hunt.herokuapp.com/" });
// api.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

export const expenseStore = create((set) => ({
  rooms: [],
  loading: false,
  error: false,

  getRoomBySearch: async () => {
    try {
      const response = await api.get("/room");
      set({ rooms: response.data });
    } catch (err) {
      alert(err.message);
    }
  },

  getRoomsById: async ({id}) => {
    try {
      const response = await api.get(`room/${id}`);
      set({ rooms: response.data });
    } catch (err) {
      alert(err.message);
    }
  },

  createRoom: async ({ data, state }) => {
    try {
      await api.post("/room", data);
      set((state) => ({ rooms: [...state.rooms, data] }));
    } catch (err) {
      alert(err.message);
    }
  },

  deleteRooms: async ({ id, state }) => {
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
