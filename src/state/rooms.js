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

  getExpenses: async () => {
    try {
      const response = await api.get("/rooms");
      set({ rooms: response.data });
      console.log("get ok");
    } catch (err) {
      console.log(err.message);
    }
  },

  createExpense: async ({ data, state }) => {
    try {
      await api.post("/rooms", data);
      set((state) => ({ rooms: [...state.rooms, data] }));
    } catch (err) {
      console.log(err.message);
    }
  },

  deleteExpense: async ({ id, state }) => {
    try {
      await api.delete(`/rooms/${id}`);
      set((state) => ({
        rooms: state.rooms.filter((a) => a._id !== id),
      }));
    } catch (err) {
      console.log(err.message);
    }
  },
}));
