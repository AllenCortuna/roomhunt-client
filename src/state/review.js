import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

export const reviewStore = create((set) => ({
  reviews: [],
  err: null,
  loading: false,

  getReviews: async (id)=>{
    set({loading: true})
    set({acc: null})
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
