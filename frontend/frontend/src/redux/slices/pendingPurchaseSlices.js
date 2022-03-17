import { createSlice } from "@reduxjs/toolkit";
import { addPurchaseOrder } from "./purchaseOrderSlices";
import { updatePurchaseOrdersAction } from "./purchaseOrderSlices";
import { createPendingPurchaseOrderAction, removePendingPurchaseOrder } from "./pendingPurchaseOrderSlices";
export const pendingPurchaseSlice = createSlice({
    name:"pendingPurchase",
    initialState:{
        pendingPurchase:[
        ]
    },
    reducers:{
        createPendingPurchase:(state,action)=>{
            let id = state.pendingPurchase.length + 1
            const newPurchase = {...action.payload,id:id}
                state.pendingPurchase = [newPurchase,...state.pendingPurchase]
        },
        removePendingPurchase:(state,action,getState)=>{
            console.log(getState)
            const copy = [...state.pendingPurchase]
            let index = state.pendingPurchase.findIndex(purchase=>purchase.saleRef == action.payload)
            copy.splice(index,1)
            state.pendingPurchase = copy
        },
        checkPendingPurchase:(state,action)=>{
            return "popo"
        }
       
      
    }
})

export const {
     createPendingPurchase,
     setInventoryStock,
     removePendingPurchase,
     checkPendingPurchase
    // editPurchase
} = pendingPurchaseSlice.actions;

export default pendingPurchaseSlice.reducer

Array.prototype.multiIndexOf = function (el) { 
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i].saleRef === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};


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

export const checkPendingPurchaseAction=(data)=>{
    return async(dispatch)=>{
        try{
            // console.log("checked")
            const status =dispatch(checkPendingPurchase)
            console.log(status)
        }
        catch(err){

        }
    }
}

export const removePendingPurchaseAction=(data)=>{
    return async(dispatch,getState)=>{
        try{
            const {pendingPurchaseOrder} = getState();
            var idxs = [];
            for (var i = pendingPurchaseOrder.pendingPurchaseOrders.length - 1; i >= 0; i--) {
                if (pendingPurchaseOrder.pendingPurchaseOrders[i].saleRef == data) {
                    console.log(pendingPurchaseOrder.pendingPurchaseOrders[i])
                }
            }
            console.log(idxs)
            dispatch(removePendingPurchase(data))
            dispatch(removePendingPurchaseOrder(data))
        }catch(err){
            console.log(err)

        }
    }
}