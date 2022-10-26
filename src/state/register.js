import axios from "axios";
import create from "zustand";
const api = axios.create({ baseURL: process.env.REACT_APP_API });

export const useRegisterState = create((set) => ({
  loading: false,
  err: "",
  login: "",

  registerAcc: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      console.log("data:", data);
      const result = await api.post("/accommodator/signup", {
        email: data.email,
        password: data.password,
        businessName: data.businessName,
        contact: data.contact,
        image: data.image,
        category: data.category,
        owner: data.owner,
        location: `${data.street} ${data.brgy} ${data.city}, ${data.province}`,
      });
      localStorage.setItem("register", JSON.stringify(result?.data));
      console.log(result.data);
      navigate("/register/verify-email");
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  verifyEmail: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/accommodator/verify-email", {
        otp: data.otp,
        accommodatorId: data.accommodatorId,
      });
      navigate("/dashboard");
      set({ data: result.data.result });
      set({ login: "acc" });
      localStorage.setItem("acc", JSON.stringify(result?.data));
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  loginAcc: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/accommodator/login", data);
      set({ data: result.data.result });
      navigate("/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("acc", JSON.stringify(result?.data));
      set({ login: "acc" });
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  
  //PIN: CLIENT
  registerClient: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/signup", {
        email: data.email,
        password: data.password,
        contact: data.contact,
        birthday: data.birthday,
      });
      localStorage.setItem("register", JSON.stringify(result?.data));
      navigate("/client/verify-email");
    } catch (err) {
      set({ err: err.response.data.message });
      alert(err.response.data.message);
    }
    set({ loading: false });
  },

  
  
  // PIN :UTILITY

  curUsr: (data) => {
    set({ login: data });
  },

  logOut: (navigate) => {
    localStorage.clear();
    set({ login: "" });
    navigate("/");
  },
  
}));
