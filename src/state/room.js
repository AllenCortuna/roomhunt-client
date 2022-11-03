import create from "zustand";
import axios from "axios";
// const api = axios.create({ baseURL: process.env.REACT_APP_API });
const api = axios.create({ baseURL: "https://roomhunt-server.onrender.com" });

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
  room: {},
  loading: false,
  error: false,

  getRoomBySearch: async (query) => {
    set({ loading: true });
    set({ rooms: [] });
    try {
      const response = await api.get(
        `/room/search?category=${query.category}&location=${
          query.location
        }&minPrice=${parseInt(query.minPrice)}&maxPrice=${parseInt(
          query.maxPrice
        )}&bed=${parseInt(query.bed)}&checkInDate=${
          query.checkInDate
        }&checkOutDate=${query.checkOutDate}`
      );
      set({ rooms: response.data });
      console.log(response.data);
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  getRoom: async (id) => {
    set({ loading: true });
    console.log(id);
    try {
      const response = await api.get(`room/${id}`);
      console.log(response.data);
      set({ room: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  getOwnRooms: async (id) => {
    set({ loading: true });
    try {
      const response = await api.get(`room/own/${id}`);
      set({ rooms: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  uploadRoom: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/room", {
        name: data.name,
        price: parseInt(data.price),
        image: data.image,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        bed: parseInt(data.bed),
      });
      set((state) => ({ rooms: [...state.rooms, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  updateRoom: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/room/${id}`, {
        name: data.name,
        price: parseInt(data.price),
        image: data.image,
        checkInDate: data.checkInDate,
        checkOutDate: data.checkOutDate,
        bed: parseInt(data.bed),
      });
      set((state) => ({
        rooms: [
          ...state.rooms.map((room) => (room._id === id ? result.data : room)),
        ],
      }));
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  deleteRoom: async (id) => {
    set({ loading: true });
    try {
      await api.delete(`/room/${id}`);
      set((state) => ({
        rooms: state.rooms.filter((a) => a._id !== id),
      }));
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  reviewRoom: async (review) => {
    set({ loading: true });
    if (!review.senderId) {
      alert("WARN:Client(only) must be Login or Register to submit Review");
    } else {
      try {
        const result = await api.post("/room/review/", review);
        set({ room: result.data });
        console.log(result);
      } catch (err) {
        alert(err.response.data.message);
      }
    }
    set({ loading: false });
  },
}));
