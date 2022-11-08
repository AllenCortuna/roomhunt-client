import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });
// const api = axios.create({ baseURL: "https://roomhunt-server.onrender.com" });

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
  suggestedRoom: [],
  err: null,

  getRoomByLocation: async (query) => {
    set({ loading: true });
    set({ err: null });
    console.log(query)
    try {
      const response = await api.get( `/room/location?category=${query.category}&location=${query.location}`);
      set({ suggestedRoom: response.data });
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getRoomBySearch: async (query) => {
    set({ loading: true });
    set({ rooms: [] });
    set({ err: null });
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
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getRoom: async (id) => {
    set({ loading: true });
    set({ err: null });
    try {
      const response = await api.get(`room/${id}`);
      set({ room: response.data });
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  getOwnRooms: async (id) => {
    set({ loading: true });
    set({ err: null });
    try {
      const response = await api.get(`room/own/${id}`);
      set({ rooms: response.data });
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  uploadRoom: async (data) => {
    set({ loading: true });
    set({ err: null });
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
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  updateRoom: async (data, id) => {
    set({ loading: true });
    set({ err: null });
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
      set({ err: err.message });
    }
    set({ loading: false });
  },

  deleteRoom: async (id) => {
    set({ loading: true });
    set({ err: null });
    try {
      await api.delete(`/room/${id}`);
      set((state) => ({
        rooms: state.rooms.filter((a) => a._id !== id),
      }));
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  reviewRoom: async (review) => {
    set({ loading: true });
    set({ err: null });
    if (!review.senderId) {
      alert("WARN:Client(only) must be Login or Register to submit Review");
    } else {
      try {
        const result = await api.post("/room/review/", review);
        console.log(result.data);
        set({ room: result.data });
      } catch (err) {
        set({ err: err.response.data.message });
      }
    }
    set({ loading: false });
  },
}));
