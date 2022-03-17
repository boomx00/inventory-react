import { createSlice } from "@reduxjs/toolkit";
export const pendingPurchaseOrderSlice = createSlice({
    name:"pendingPurchaseOrder",
    initialState:{
        pendingPurchaseOrders:[
            {id:1,code: "a", supplier: "d", date: "a", notes: "s", total: 0,unpaid:0}
        ]
    },
    reducers:{
        createPendingPurchaseOrder:(state,action)=>{
            state.pendingPurchaseOrders = [action.payload,...state.pendingPurchaseOrders]
        },
       removePendingPurchaseOrder:(state,action)=>{
           const copyPurchaseOrder = [state.pendingPurchaseOrders]
           const index= copyPurchaseOrder.findIndex(order=>order.saleRef==action.payload)
           copyPurchaseOrder.splice(index,1)
           state.pendingPurchaseOrders = copyPurchaseOrder
       }
    }
})

export const {
    createPendingPurchaseOrder,
    removePendingPurchaseOrder
} = pendingPurchaseOrderSlice.actions;

export default pendingPurchaseOrderSlice.reducer

export const createPendingPurchaseOrderAction=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch(createPendingPurchaseOrder(data))
            // const newPendingPurchase=data
            // dispatch(createPendingPurchaseOrder(data))
            // dispatch(createPurchase(data))
            // dispatch(addPurchaseOrder(newPurchaseOrder))
        }
        catch(err){

        }
    }
}

export const removePendingPurchaseOrderAction=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch(removePendingPurchaseOrder(data))
        }
        catch(err){

        }
    }
}
