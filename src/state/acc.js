import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

export const accStore = create((set) => ({
  acc : {},
  err: null,
  loading: false,

  getAcc: async (id)=>{
    set({loading: true})
    set({acc: null})
    try {
      const response = await api.get(`accommodator/${id}`)
      set({acc: response.data})
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({loading: false})
  },
  
}))
