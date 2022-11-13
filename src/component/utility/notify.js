// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const roomUploadNotify = () =>
    toast.success("Room upload succesfully", {
      position: "top-right",
      autoClose: 5000,
      transition: "slide",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

export const roomUpdateNotify = () =>
    toast.success("Room Updated succesfully", {
      position: "top-right",
      autoClose: 5000,
      transition: "slide",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });


export const errNotify = (err) =>
    toast.error(`${err}`, {
      position: "top-right",
      autoClose: 5000,
      transition: "slide",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

export const warnNotify = (text) =>
    toast.warning(`${text}`, {
      position: "top-right",
      autoClose: 5000,
      transition: "slide",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
