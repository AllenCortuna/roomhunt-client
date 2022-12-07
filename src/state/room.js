import create from "zustand";
import {api} from './api'


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

export const roomStore = create((set) => ({
  rooms: [],
  room: {},
  loading: false,
  suggestedRoom: [],
  err: null,

  getRoomByLocation: async (query) => {
    set({ loading: true });
    try {
      const response = await api.get(
        `/room/location?category=${query.category}&location=${query.location}`,{timeout:45000}
      );
      set({ suggestedRoom: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  getRoomBySearch: async (query) => {
    set({ loading: true });
    set({ rooms: [] });
    try {
      const response = await api.get(
        `/room/search?category=${query.category}&location=${
          query.location
        }&minPrice=${parseInt(query.minPrice)}&maxPrice=${parseInt(
          query.maxPrice
        )}&bed=${query.bed}&checkInDate=${query.checkInDate}`,{timeout:45000}
      );
      set({ rooms: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  getRoom: async (id) => {
    set({ loading: true });
    try {
      const response = await api.get(`room/${id}`,{timeout:45000});
      set({ room: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  getOwnRooms: async (id) => {
    set({ loading: true });
    try {
      const response = await api.get(`room/own/${id}`,{timeout:45000});
      set({ rooms: response.data });
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  updateView: async (id) => {
    try {
      await api.patch(`room/view/${id}`,{timeout:45000});
      alert("room view updated");
    } catch (err) {
      console.log(err.response.data.message);
    }
  },

  uploadRoom: async (data) => {
    set({ loading: true });
    try {
      const result = await api.post("/room", data,{timeout:45000});
      set((state) => ({ rooms: [...state.rooms, result.data] }));
    } catch (err) {
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  updateRoom: async (data, id) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/room/${id}`, data,{timeout:45000});
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
      await api.delete(`/room/${id}`,{timeout:45000});
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
        const result = await api.post("/room/review/", review,{timeout:45000});
        set({ room: result.data });
      } catch (err) {
        alert(err.response.data.message);
      }
    }
    set({ loading: false });
  },
}));
