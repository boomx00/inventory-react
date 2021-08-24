import { createSlice } from "@reduxjs/toolkit";

export const purchaseOrderSlice= new createSlice({
    name:"purchaseOrder",
    initialState:{
        purchaseOrder:[

        ]
    },
    reducers:{
        addPurchaseOrder:(state,action)=>{
            state.purchaseOrder = [action.payload,...state.purchaseOrder]
            console.log(state.purchaseOrder)
        },
        updatePurchaseOrder:(state,action)=>{
            const index = state.purchaseOrder.findIndex(orders=>orders.code==action.payload.code)
            // console.log(index)
            const newArray = [...state.purchaseOrder]
            newArray.splice(index, 1);
            state.purchaseOrder = newArray
            state.purchaseOrder = [action.payload,...state.purchaseOrder]
        }
    }
})

export const {addPurchaseOrder,
updatePurchaseOrder} = purchaseOrderSlice.actions

export default purchaseOrderSlice.reducer

export const addPurchaseOrderAction=(data)=>{
    return async(dispatch)=>{
        try{
            dispatch(addPurchaseOrder(data))
        }catch(err){

        }
    }
}

export const updatePurchaseOrdersAction = (data)=>{
    return async (dispatch)=>{
        try{
            dispatch(updatePurchaseOrder(data))
        }catch(err){

        }
    }
}