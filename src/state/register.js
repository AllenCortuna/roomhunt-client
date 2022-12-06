import axios from "axios";
import create from "zustand";
const api = axios.create({ baseURL: process.env.REACT_APP_API });
// const api = axios.create({ baseURL: "https://roomhunt-server.onrender.com" });

export const useRegisterState = create((set) => ({
  loading: false,
  err: null,
  login: "",

  patchAcc: async (data, id) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.patch(`/accommodator/patch/${id}`, data,{timeout:45000});
      localStorage.setItem("acc", JSON.stringify(result?.data));
      set({ login: "acc" });
      alert("Info Updated")
    } catch (err) {
      console.log(err);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  registerAcc: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/accommodator/signup", {
        email: data.email,
        password: data.password,
        businessName: data.businessName,
        contact: data.contact,
        image: data.image,
        category: data.category,
        owner: data.owner,
        location: `${data.street} ${data.brgy} ${data.city}, ${data.province}`,
      },{timeout:45000});
      localStorage.setItem("register", JSON.stringify(result?.data));
      navigate("/register/acc/verify-email");
    } catch (err) {
      set({ err: err.response.data.message });
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
      },{timeout:45000});
      navigate("/acc/dashboard");
      set({ data: result.data.result });
      set({ login: "acc" });
      localStorage.setItem("acc", JSON.stringify(result?.data));
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  loginAcc: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/accommodator/login", data,{timeout:45000});
      set({ data: result.data.result });
      navigate("/acc/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("acc", JSON.stringify(result?.data));
      set({ login: "acc" });
    } catch (err) {
      console.log(err.response.data.message);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  //PIN: CLIENT
  registerClient: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        birthday: data.birthday,
      },{timeout:45000});
      localStorage.setItem("register", JSON.stringify(result?.data));
      navigate("/register/client/verify-email");
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  verifyEmailClient: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/verify-email", {
        otp: data.otp,
        clientId: data.clientId,
      },{timeout:45000});
      navigate("/client/dashboard");
      set({ data: result.data.result });
      set({ login: "client" });
      localStorage.setItem("client", JSON.stringify(result?.data));
    } catch (err) {
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  loginClient: async (data, navigate) => {
    set({ loading: true });
    set({ err: null });
    try {
      const result = await api.post("/client/login", data,{timeout:45000});
      set({ data: result.data.result });
      navigate("/client/dashboard");
      set({ data: result.data.result });
      localStorage.setItem("client", JSON.stringify(result?.data));
      set({ login: "client" });
    } catch (err) {
      console.log(err);
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  // PIN :UTILITY

  curUsr: (data) => {
    set({ err: null });
    set({ login: data });
  },
  setErr: (err) => {
    set({ err: err });
  },

  logOut: (navigate) => {
    set({ err: null });
    localStorage.clear();
    set({ login: "" });
    navigate("/");
  },
}));
