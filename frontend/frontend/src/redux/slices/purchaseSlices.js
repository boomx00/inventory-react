import { createSlice } from "@reduxjs/toolkit";
import { addPurchaseOrder } from "./purchaseOrderSlices";
import { updatePurchaseOrdersAction } from "./purchaseOrderSlices";
export const purchaseSlice = createSlice({
    name:"purchases",
    initialState:{
        purchases:[
            {id:1,code: "a", supplier: "d", date: "a", notes: "s", total: 0,unpaid:0}
        ]
    },
    reducers:{
        createPurchase:(state,action)=>{
            let id = state.purchases.length + 1
            const newPurchase = {...action.payload,id:id}
                state.purchases = [newPurchase,...state.purchases]
                console.log(state.purchases)
        },
        editPurchase:(state,action)=>{
            let index = state.purchases.findIndex(purchases=>purchases.code==action.payload.code)
            console.log(index)
            const newArray=[...state.purchases]
            newArray[index] = {...action.payload,id:newArray[index].id}
            console.log(newArray)
            state.purchases = newArray
        }
    }
})

export const {
    createPurchase,
    editPurchase
} = purchaseSlice.actions;

export default purchaseSlice.reducer

export const createPurchaseAction=(data)=>{
    return async(dispatch)=>{
        try{
            const newPurchase=data
            const newPurchaseOrder = {
                products:data.products,
                code:data.code
            }
            // console.log(data)
            dispatch(createPurchase(data))
            dispatch(addPurchaseOrder(newPurchaseOrder))
        }
        catch(err){

        }
    }
}

export const editPurchaseAction=(data)=>{
    return async(dispatch)=>{
        try{
            
            const newPurchaseData = {
                code:data.code,
                date: data.date,
                supplier: data.supplier,
                notes: data.notes,
                total: data.total,
                status:"paid"
            }
            const newPurchaseOrders = {
                products: data.products,
                code: data.code
            }
            console.log(newPurchaseOrders)
            dispatch(editPurchase(newPurchaseData))
            dispatch(updatePurchaseOrdersAction(newPurchaseOrders))
        }
        catch(err){

        }
    }
}