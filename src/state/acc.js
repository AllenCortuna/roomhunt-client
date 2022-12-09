import create from "zustand";
import {api} from './api'
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
      alert(err.response.data.message);
    }
    set({loading: false})
  },
  
}))
