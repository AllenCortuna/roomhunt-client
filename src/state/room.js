import create from "zustand";
import { alertErr, api } from "./api";

export const roomStore = create((set) => ({
  totalPage: 0, //total page of room by search
  page: 1, // current page in the pagination
  rooms: [],
  room: {},
  loading: false,
  suggestedRoom: [],
  featuredRoom: [],
  err: null,

  getRoomByLocation: async (query, controller) => {
    set({ loading: true });
    try {
      const response = await api.get(
        `/room/location?category=${query.category}&location=${query.location}`,
        { signal: controller.signal }
      );
      set({ suggestedRoom: response.data });
    } catch (err) {
      if (err.message === "canceled") {
        return null;
      } else {
        console.log(err);
      }
    }
    set({ loading: false });
  },

  getRoomBySearch: async (query, navigate, controller) => {
    set({ loading: true });
    set({ rooms: [] });
    try {
      const response = await api.get(
        `/room/search?category=${query.category}&location=${query.location}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}&bed=${query.bed}&checkInDate=${query.checkInDate}`,
        { signal: controller.signal }
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
      console.log(err);
    }
    set({ loading: false });
  },

  updateView: async (id) => {
    try {
      await api.patch(`room/view/${id}`);
    } catch (err) {
      console.log(err);
    }
  },

  uploadRoom: async (data,okNotify,errNotify) => {
    set({ loading: true });
    try {
      const result = await api.post("/room", data);
      set((state) => ({ rooms: [...state.rooms, result.data] }));
      okNotify("Room Uploaded!")
    } catch (err) {
      // alert(err.response.data.message);
      errNotify(err.response.data.message)
    }
    set({ loading: false });
  },

  updateRoom: async (data, id,okNotify,errNotify) => {
    set({ loading: true });
    try {
      const result = await api.patch(`/room/${id}`, data);
      set((state) => ({
        rooms: [
          ...state.rooms.map((room) => (room._id === id ? result.data : room)),
        ],
      }));
      okNotify("Room Updated!")
    } catch (err) {
      errNotify(err.response.data.message)
    }
    set({ loading: false });
  },

  deleteRoom: async (id,okNotify,errNotify) => {
    set({ loading: true });
    try {
      await api.delete(`/room/${id}`);
      set((state) => ({
        rooms: state.rooms.filter((a) => a._id !== id),
      }));
      okNotify("Room Deleted!")
    } catch (err) {
      errNotify(err.response.data.message)
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
