import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { updatePurchaseStatusAction,updatePurchasePaidAction } from './purchaseSlices';
import { createInstallmentPaymentAction,removeInstallmentPaymentByRefAction } from './installmentPaymentSlices';
export const installmentSlice = createSlice({
    name: 'installment',
    initialState: {
        installment: [
        //    {id:1, purchaseRef: "aa", supplier: "jakarta", amount: "amount"}
        ],
    },
    reducers: {
        createInstallment:(state,action)=>{
            let id = state.installment.length + 1
            const newInstallment = {...action.payload,id:id}
                state.installment = [newInstallment,...state.installment]
        },
        updateInstallment:(state,action)=>{
            const copyArray = [...state.installment]
            const index = copyArray.findIndex(payment=>payment.purchaseRef == action.payload.code)
            copyArray[index].amount = action.payload.total
            state.installment = copyArray
        },
        updateInstallmentPaid:(state,action)=>{
            const copyArray= [...state.installment]
            const index = copyArray.findIndex(installment=>installment.purchaseRef == action.payload.purchaseRef)
            copyArray[index].paid =  action.payload.total
            state.installment = copyArray
        },
        confirmInstalllment:(state,action)=>{
            const copyArray=[...state.installment]
            const index = copyArray.findIndex(installment=>installment.purchaseRef==action.payload)
            copyArray[index].confirmed = true
            state.installment=copyArray
        },
        updateInstallmentStatus:(state,action)=>{
            const copyArray= [...state.installment]
            const index=copyArray.findIndex(installment=>installment.purchaseRef==action.payload)
            copyArray[index].status = "paid"
            state.installment=copyArray

        },
        removeInstallment:(state,action)=>{
            const copyArray = [...state.installment]
            const index=copyArray.findIndex(installment=>installment.purchaseRef == action.payload)
            copyArray.splice(index,1)
            state.installment=copyArray
        }
    }
})

export const {  createInstallment,
                updateInstallment,
                updateInstallmentPaid,
                confirmInstalllment,
                updateInstallmentStatus,
                removeInstallment} = installmentSlice.actions

export default installmentSlice.reducer

export const createInstallmentAction = (data)=>{
    return async dispatch =>{
        try{
            let amount=0;
            let purchaseRef=""
            if(data.pending){
                amount=data.amount
                purchaseRef=data.purchaseRef
            }else{
                amount=data.total
                purchaseRef=data.code

            }
            const installmentData = {
                purchaseRef: purchaseRef,
                supplier: data.supplier,
                amount: amount,
                status: data.status,
                days: data.days,
                paid: data.paid,
                confirmed: false,
                date:data.date
            }
            const installmentCredit = {
                purchaseRef: purchaseRef,
                amount: amount,
                type: "credit",
                date: data.date
            }
            dispatch(createInstallment(installmentData))
            dispatch(createInstallmentPaymentAction(installmentCredit))
        }catch(err){

        }
    }
}


export const updateInstallmentAction=(data)=>{
    return async dispatch=>{
        try{
            dispatch(updateInstallment(data))
        }catch(err){

        }
    }
}
export const updateInstallmentPaidAction=(ref,total)=>{
    return async dispatch=>{
        try{
            const data = {
                purchaseRef: ref,
                total:total
            }
            dispatch(updateInstallmentPaid(data))
            dispatch(updatePurchasePaidAction(data))
        }catch(err){

        }
    }
}

export const updateInstallmentStatusAction=(ref)=>{
    return async dispatch=>{
        try{
            dispatch(updateInstallmentStatus(ref))
            dispatch(updatePurchaseStatusAction(ref))
        }catch(err){

        }
    }
}

export const confirmInstallmentAction=(ref)=>{
    return async dispatch=>{
        try{
            dispatch(confirmInstalllment(ref))
        }catch(err){

        }
    }
}

export const RemoveInstallmentAction=(ref)=>{
    return async dispatch=>{
        try{
            dispatch(removeInstallment(ref))
            dispatch(removeInstallmentPaymentByRefAction(ref))
        }catch(err){

        }
    }
}
