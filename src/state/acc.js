import create from "zustand";
import axios from "axios";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

export const accStore = create((set) => ({
  acc : {},
  err: null,
  loading: false,

  getAcc: async (id)=>{
    set({loading: true})
    try {
      const response = await api.get(`acc/${id}`)
      set({acc: response.data})
    } catch (err) {
      
    }
    set({loading: false})
  },
  
}))
