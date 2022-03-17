import { createSlice } from "@reduxjs/toolkit";
import { addPurchaseOrder } from "./purchaseOrderSlices";
import { updatePurchaseOrdersAction } from "./purchaseOrderSlices";
import { checkPendingPurchaseAction, removePendingPurchaseAction  } from "./pendingPurchaseSlices";
import {updateInventoryOnPurchaseAction,updateInventoryOnPurchaseUpdateAction} from "./inventorySlices";
import { createInstallmentAction, updateInstallmentAction } from "./installmentSlices";
import { createInstallmentPendingAction,updateInstallmentPendingAction } from "./installmentPendingSlices";
import { updateInstallmentCreditAction } from "./installmentPaymentSlices";
export const purchaseSlice = createSlice({
    name:"purchases",
    initialState:{
        purchases:[
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
        },
        updatePurchaseStatus:(state,action)=>{
            const newArray = [...state.purchases]
            let index = newArray.findIndex(purchases=>purchases.code==action.payload)
            newArray[index].status="paid"
            state.purchases=newArray
        },
        updatePurchasePaid:(state,action)=>{
            const newArray = [...state.purchases]
            let index = newArray.findIndex(purchases=>purchases.code==action.payload.purchaseRef)
            newArray[index].paid=action.payload.total
            state.purchases=newArray
        },
        updatePurchaseInstallment:(state,action)=>{
            const newArray = [...state.purchases]
            let index = newArray.findIndex(purchases=>purchases.code==action.payload)
            newArray[index].installment="created"
            state.purchases=newArray
        }
    }
})

export const {
    createPurchase,
    editPurchase,
    updatePurchaseStatus,
    updatePurchasePaid,
    updatePurchaseInstallment,
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
            dispatch(updateInventoryOnPurchaseAction(data.products))
            if(data.pending){
                // dispatch(checkPendingPurchaseAction(data.saleRef))
                dispatch(removePendingPurchaseAction(data.saleRef))
            }
            dispatch(createInstallmentPendingAction(data))
            // dispatch(createInstallmentAction(data))
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
                saleRef: data.saleRef,
                date: data.date,
                supplier: data.supplier,
                notes: data.notes,
                total: data.total,
                status: data.status,
                days: data.days,
                installment: data.installment
            }
            const newPurchaseOrders = {
                products: data.products,
                code: data.code
            }
            const newInstallment = {
                code: data.code,
                total: data.total
            }
            dispatch(editPurchase(newPurchaseData))
            dispatch(updatePurchaseOrdersAction(newPurchaseOrders))
            dispatch(updateInventoryOnPurchaseUpdateAction(data.changes))
            if(data.installment=="pending"){
                dispatch(updateInstallmentPendingAction(newInstallment))
            }else if(data.installment=="created"){
                dispatch(updateInstallmentAction(newInstallment))
                dispatch(updateInstallmentCreditAction(newInstallment))
            }
        }
        catch(err){

        }
    }
}

export const updatePurchaseStatusAction=(code)=>{
    return async dispatch=>{
        try{
            dispatch(updatePurchaseStatus(code))
        }catch(err){

        }
    }
}

export const updatePurchasePaidAction=(data)=>{
    return async dispatch=>{
        try{
            dispatch(updatePurchasePaid(data))
        }catch(err){

        }
    }
}

export const updatePurchaseInstallmentAction=(code)=>{
    return async dispatch=>{
        try{
            dispatch(updatePurchaseInstallment(code))
        }catch(err){

        }
    }
}