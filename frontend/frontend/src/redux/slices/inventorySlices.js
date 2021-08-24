import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventory: [
        { id: 1, code: "A1",name:"chair",stock:5,price:10000, age: 12 },
        { id: 2, code: "B1",name:"table",stock:2,price:20000, age: 12 },
    ],
  },
  reducers: {
    // getInventory: (state, action) => {
    //   state.inventory = {};
    // },
    addInventory:(state,action)=>{
        const length = state.inventory.length + 1
        const data = {...action.payload,id:length}
        state.inventory = [data,...state.inventory]
    },
    updateInventory:(state,action)=>{
      const index = state.inventory.findIndex(inventory=>inventory.id==action.payload.id)
      const newArray = [...state.inventory];
      newArray[index].name = action.payload.name
      console.log(state.inventory[index].name)
      state.inventory = newArray;
    }
  },
});

export const { getInventory,
              addInventory,
              updateInventory } = inventorySlice.actions;

export default inventorySlice.reducer;

export const addInventoryAction = (data) => {
  return async (dispatch) => {
    try {
      
        dispatch(addInventory(data))
      // const res = await axios.post()
    } catch (err) {}
  };
};

export const updateInventoryAction =(data)=>{
  return async (dispatch)=>{
    try{
      dispatch(updateInventory(data))
    }catch(err){

    }
  }
}
