import create from "zustand";
import {api} from './api'
export const accStore = create((set) => ({
  acc : {},
  err: null,
  loading: false,
  featured: [],

  getAcc: async (id)=>{
    set({loading: true})
    set({acc: null})
    try {
      const response = await api.get(`accommodator/${id}`)
      set({acc: response.data})
    } catch (err) {
      alert(err.response.data.message);
    }
    set({loading: false})
  },
  
  getFeaturedAccs: async () => {
    set({ loading: true });
    try {
      const response = await api.get(`accommodator/getFeatured`);
      set({ featured: response.data });
     console.log(response) 
    } catch (err) {
      console.log(err.response.data.message);
    }
    set({ loading: false });
  },
  
}))
