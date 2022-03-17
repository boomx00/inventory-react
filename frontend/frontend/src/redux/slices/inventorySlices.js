import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createPendingPurchaseAction } from "./pendingPurchaseSlices";
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
    },
    updateInventoryOnSales:(state,action)=>{
      let createPurchase = false;
      let purchaseData = []
      const newArray = [...state.inventory];
      action.payload.forEach(function(product){
        const index = newArray.findIndex(inventory=>inventory.code == product.code)
        let quantity = newArray[index].stock
        let finalQuantity = quantity - product.quantity
        if(finalQuantity>=0){
          newArray[index].stock = finalQuantity
        }
    
      })
      
      state.inventory = newArray
    },
    setInventoryStock:(state,action)=>{

      const inventoryCopy = [...state.inventory]
      action.payload.products.forEach(function(product){
          const productCode = product.code
          const inventoryIndex = state.inventory.findIndex(product=>product.code == productCode)
          const newQuantity = product.stock-product.quantity
          if(newQuantity>=0){
            inventoryCopy[inventoryIndex].stock = newQuantity

          }else{
            inventoryCopy[inventoryIndex].stock = newQuantity

          }
      })
      state.inventory = inventoryCopy
  },
  updateInventoryOnSalesUpdate:(state,action)=>{
    const inventoryCopy = [...state.inventory]
    action.payload.forEach(function(product){
      const productCode = product.code
      const inventoryIndex = state.inventory.findIndex(product=>product.code == productCode)
      const newQuantity = inventoryCopy[inventoryIndex].stock + product.difference
      if(newQuantity >= 0 ){
        inventoryCopy[inventoryIndex].stock = newQuantity

      }else{
        inventoryCopy[inventoryIndex].stock = newQuantity

      }
     
  })
  },
  updateInventoryOnPurchase:(state,action)=>{
    const inventoryCopy = [...state.inventory]
    action.payload.forEach(function(product){
      const index = state.inventory.findIndex(inven=>inven.code == product.code)
      inventoryCopy[index].stock = parseInt(inventoryCopy[index].stock) + parseInt(product.quantity)
    })
    state.inventory = inventoryCopy
  },
  updateInventoryOnPurchaseUpdate:(state,action)=>{
    const inventoryCopy = [...state.inventory]
    action.payload.forEach(function(product){
      const productCode = product.code
      const inventoryIndex = state.inventory.findIndex(product=>product.code == productCode)
      const newQuantity = inventoryCopy[inventoryIndex].stock - product.difference
      if(newQuantity >= 0 ){
        inventoryCopy[inventoryIndex].stock = newQuantity

      }else{
        inventoryCopy[inventoryIndex].stock = newQuantity

      }
     
  })
  }
  },
});

export const { getInventory,
              addInventory,
              updateInventory,
              updateInventoryOnSales,
            setInventoryStock,
            updateInventoryOnSalesUpdate,
            updateInventoryOnPurchase,
            updateInventoryOnPurchaseUpdate } = inventorySlice.actions;

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


export const updateInventoryOnSalesAction = (data)=>{
  return async (dispatch)=>{
    try{
        let updateData = []
        let updatePurchase = []
        data.products.forEach(function(product){
          const finalQuantity = product.stock - product.quantity
          if (finalQuantity >=0 ){
            const data = {
              quantity: product.quantity,
              stock: product.stock,
              code: product.code
            }
            updateData = [data,...updateData]
          }else{
            const data = {
              name:product.name,
              price:product.price,
              quantity: product.quantity,
              stock: product.stock,
              code:product.code,
              toBuy: product.quantity-product.stock
            }
            updatePurchase = [data,...updatePurchase]

          }
          
        })
        console.log(updateData)
        if(updatePurchase.length>0){
          const pendingPurchase = {
            products:updatePurchase
            ,saleRef:data.saleRef,
            total: data.total,
            customer: data.customer
            }
            dispatch(setInventoryStock(pendingPurchase))
            dispatch(createPendingPurchaseAction(pendingPurchase))
    }

    if( updateData.length>0){
      const updateInventory = {
            products:updateData
            ,saleRef:data.saleRef,
            total: data.total,
            customer: data.customer
      }
      dispatch(setInventoryStock(updateInventory))
    }


    }catch(err){

    }
  }
}


export const updateInventoryOnSalesUpdateAction=(data)=>{
  return async (dispatch)=>{
    try{
      let updateData = {}
      dispatch(updateInventoryOnSalesUpdate(data))
     
    }catch(err){

    }
  }
}

export const updateInventoryOnPurchaseAction=(data)=>{
  return async(dispatch)=>{
    try{
      dispatch(updateInventoryOnPurchase(data))
    }catch(err){

    }
  }
}
export const updateInventoryOnPurchaseUpdateAction=(data)=>{
  return async(dispatch)=>{
    try{
      dispatch(updateInventoryOnPurchaseUpdate(data))
    }catch(err){

    }
  }
}