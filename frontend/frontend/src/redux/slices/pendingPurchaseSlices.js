import { createSlice } from "@reduxjs/toolkit";
import { addPurchaseOrder } from "./purchaseOrderSlices";
import { updatePurchaseOrdersAction } from "./purchaseOrderSlices";
import { createPendingPurchaseOrderAction } from "./pendingPurchaseOrderSlices";
export const pendingPurchaseSlice = createSlice({
    name:"pendingPurchase",
    initialState:{
        pendingPurchase:[
            {id:1,code: "a", supplier: "d", date: "a", notes: "s", total: 0,unpaid:0}
        ]
    },
    reducers:{
        createPendingPurchase:(state,action)=>{
            let id = state.pendingPurchase.length + 1
            const newPurchase = {...action.payload,id:id}
                state.pendingPurchase = [newPurchase,...state.pendingPurchase]
        },
       
      
    }
})

export const {
     createPendingPurchase,
     setInventoryStock
    // editPurchase
} = pendingPurchaseSlice.actions;

export default pendingPurchaseSlice.reducer

export const createPendingPurchaseAction=(data)=>{
    return async(dispatch)=>{
        try{
            const pendingPurchaseOrder = {
                products: data.products,
                saleRef: data.saleRef
            }
            dispatch(createPendingPurchase(data))
            dispatch(createPendingPurchaseOrderAction(pendingPurchaseOrder))
        }
        catch(err){

        }
    }
}

export const editPurchaseAction=(data)=>{
    return async(dispatch)=>{
        try{
            
            // const newPurchaseData = {
            //     code:data.code,
            //     date: data.date,
            //     supplier: data.supplier,
            //     notes: data.notes,
            //     total: data.total,
            //     status:"paid"
            // }
            // const newPurchaseOrders = {
            //     products: data.products,
            //     code: data.code
            // }
            // console.log(newPurchaseOrders)
            // dispatch(editPurchase(newPurchaseData))
            // dispatch(updatePurchaseOrdersAction(newPurchaseOrders))
        }
        catch(err){

        }
    }
}