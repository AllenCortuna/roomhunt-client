import create from "zustand";
export const useRegisterState = create((set) => ({
  data:{},
  setData: ({ newData}) => {
    set((state) => ({
      data: {...state.data, ...newData}
    }));
  },

  // WARN: unstable func di pa ata gagana
  removeData: ({oldData}) =>{
    set((state)=> ({
      // data: {state.data.filter((a)=>a)}
      ...state.data.fromEntries(Object.entries(...state.data).filter(([key]) => !key.includes(oldData)))
    }))
  },

  logData: ({data})=> {
    console.log(data)
  }

}));
