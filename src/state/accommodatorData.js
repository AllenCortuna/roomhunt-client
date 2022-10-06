import create from "zustand";
export const useAccommodatorsData = create((set) => ({
  // data: {
  //   owner: "",
  //   name: "",
  //   location: "",
  //   email: "",
  //   contact: "",
  //   image: "",
  //   validID: "",
  //   businessPermit: "",
  //   category: "",
  //   password: "",
  //   confirmPassword: "",
  // },
  data: {},

  setData: ({ newData}) => {
    set((state) => ({
      data: {owner: newData.owner,}
    }));
  },

  // WARN: unstable func di pa ata gagana
  removeData: ({oldData}) =>{
    set((state)=> ({
      // data: {state.data.filter((a)=>a)}
      ...state.data.fromEntries(Object.entries(...state.data).filter(([key]) => !key.includes(oldData)))
    }))
  },

}));
