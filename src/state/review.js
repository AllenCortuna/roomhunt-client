import create from "zustand";
import {api} from './api'


api.interceptors.request.use((req) => {
  if (localStorage.getItem("client")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("client")).token
    }`;
  }
  return req;
});

export const reviewStore = create((set) => ({
  reviews: [],
  err: null,
  loading: false,

  getReviews: async (id)=>{
    set({loading: true})
    set({err: null})
    try {
      const response = await api.get(`room/review/${id}`)
      set({reviews: response.data})
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({loading: false})
  },
  
}))
