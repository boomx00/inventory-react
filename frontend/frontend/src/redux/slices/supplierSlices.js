import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    supplier: [
        { id: 1, code: "A1",name:"Semarang",address:"Semarang Tengah",telephone:"08133131322",  email:"semarang@gmail.com" },
        { id: 2, code: "B1",name:"Jakarta",address:"Jakarta Selatan",telephone:"1233332211", email:"jakarta@gmail.com" },
    ],
  },
  reducers: {
    // getInventory: (state, action) => {
    //   state.inventory = {};
    // },
    addSupplier:(state,action)=>{
        const length = state.supplier.length + 1
        const data = {...action.payload,id:length}
        state.supplier = [data,...state.supplier]
    },
    updateSupplier:(state,action)=>{
      const index = state.supplier.findIndex(supplier=>supplier.id==action.payload.id)
      const newArray = [...state.supplier];
      newArray[index].name = action.payload.name
      // console.log(state.inventory[index].name)
      state.supplier = newArray;
    }
  },
});

export const { 
              addSupplier,
              updateSupplier } = supplierSlice.actions;

export default supplierSlice.reducer;

export const addSupplierAction = (data) => {
  return async (dispatch) => {
    try {
        // console.log(data)
        dispatch(addSupplier(data))
      // const res = await axios.post()
    } catch (err) {}
  };
};

export const updateSupplierAction =(data)=>{
  return async (dispatch)=>{
    try{
      dispatch(updateSupplier(data))
    }catch(err){

    }
  }
}
