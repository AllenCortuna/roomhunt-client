import create from "zustand";
import { alertErr, api } from "./api";

export const roomStore = create((set) => ({
  rooms: [],
  room: {},
  loading: false,
  suggestedRoom: [],
  featuredRoom: [],
  err: null,

  getRoomByLocation: async (query) => {
    set({ loading: true });
    try {
      const response = await api.get(
        `/room/location?category=${query.category}&location=${query.location}`
      );
      set({ suggestedRoom: response.data });
    } catch (err) {
      console.log(err.response.data.message);
    }
    set({ loading: false });
  },

  getRoomBySearch: async (query, navigate) => {
    set({ loading: true });
    set({ rooms: [] });
    try {
      const response = await api.get(
        `/room/search?category=${query.category}&location=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}&bed=${query.bed}&checkInDate=${query.checkInDate}`
      );
      set({ rooms: response.data });
    } catch (err) {
      alertErr(err);
      navigate("/search");
    }
    set({ loading: false });
  },

  getRoom: async (id) => {
    set({ loading: true });
    try {
      const response = await api.get(`room/${id}`);
      set({ room: response.data });
    } catch (err) {
      console.log(err.response.data.message);
    }
    set({ loading: false });
  },

  getOwnRooms: async (id) => {
    set({ loading: true });
    try {
      const response = await api.get(`room/own/${id}`);
      set({ rooms: response.data });
    } catch (err) {
      console.log(err.response.data.message);
    }
    set({ loading: false });
  },

  updateView: async (id) => {
    try {
      await api.patch(`room/view/${id}`);
    } catch (err) {
      console.log(err.response.data.message);
    }
  },

  uploadRoom: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/room", data);
      set((state) => ({ rooms: [...state.rooms, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  updateRoom: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/room/${id}`, data);
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
    set({ err: null });
    set({ loading: true });
    if (!review.senderId) {
      alert("WARN:Client(only) must be Login or Register to submit Review");
    } else {
      try {
        const result = await api.post("/room/review/", review);
        set({ room: result.data });
        alert("review sent!");
      } catch (err) {
        alert(err.response.data.message);
      }
    }
    set({ loading: false });
  },
}));
