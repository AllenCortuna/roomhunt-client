import create from "zustand";
import {alertErr, api} from './api'

export const resetStore = create((set) => ({
  err: null,
  loading: false,

  resetAccPW: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.post("reset/acc", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem(
        "resetPW",
        JSON.stringify({ password: data.password, id: result.data.result._id })
      );
      navigate("/reset/acc-otp");
    } catch (err) {
      alertErr(err)
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  resetAccOTP: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const id = JSON.parse(localStorage.getItem("resetPW")).id;
      await api.patch(`reset/acc/${id}`,data);
      navigate("/login/acc");
    } catch (err) {
      alertErr(err)
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  resetClientPW: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const result = await api.post("reset/client", data);
      localStorage.setItem(
        "resetPW",
        JSON.stringify({ password: data.password, id: result.data.result._id })
      );
      navigate("/reset/client-otp");
    } catch (err) {
      alertErr(err)
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  resetClientOTP: async (data, navigate) => {
    set({ loading: true });
    set({ acc: null });
    try {
      const id = JSON.parse(localStorage.getItem("resetPW")).id;
      await api.patch(`reset/client/${id}`, data);
      navigate("/login/client");
    } catch (err) {
      alertErr(err)
      set({ err: err.response.data.message });
    }
    set({ loading: false });
  },

  setErr: (err) => {
    set({ err: err });
  },
}));
