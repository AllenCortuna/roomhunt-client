import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

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
      console.log(id)
      const response = await api.get(`room/review/${id}`)
      set({reviews: response.data})
    } catch (err) {
      set({ err: err.response.data.message });
      console.log(err)
    }
    set({loading: false})
  },
  
}))
