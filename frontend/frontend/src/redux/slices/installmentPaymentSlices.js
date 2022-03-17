import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { updateInstallmentPaidAction } from './installmentSlices';

const countOccurrences = (arr, val) => arr.filter(x => x.purchaseRef == val).length
export const installmentPaymentSlice = createSlice({
    name: 'installmentPayment',
    initialState: {
        installmentPayment: [
        //    {id:1, purchaseRef: "aa", supplier: "jakarta", amount: "amount"}
        ],
    },
    reducers: {
        createInstallmentPayment:(state,action)=>{
            const copyArray = [...state.installmentPayment]
            const index = countOccurrences(copyArray,action.payload.purchaseRef)
            let id = action.payload.purchaseRef+"." + (index)
            const newInstallment = {...action.payload,id:id}
            state.installmentPayment = [newInstallment,...state.installmentPayment]
        },
        updateInstallmentPayment:(state,action)=>{
            const copyArray = [...state.installmentPayment]
            const idx = copyArray.findIndex(payment=> payment.id == action.payload.id)
            if(idx!=-1){
                copyArray[idx].date = action.payload.date
                copyArray[idx].bankName = action.payload.bankName
                copyArray[idx].amount = action.payload.amount
                copyArray[idx].image = action.payload.images
            }
            state.installmentPayment=copyArray
            // let ref = action.payload.
        },
        removeInstallmentPayment:(state,action)=>{
            const copyArray = [...state.installmentPayment]
            const index = copyArray.findIndex(payment=>payment.id == action.payload)
            copyArray.splice(index,1)
            state.installmentPayment = copyArray
        },
        removeInstallmentPaymentByRef:(state,action)=>{
            const copyArray = [...state.installmentPayment]
            const index = copyArray.findIndex(payment=>payment.purchaseRef == action.payload)
            copyArray.splice(index,1)
            state.installmentPayment = copyArray
        },
        updateInstallmentCredit:(state,action)=>{
            const copyArray=[...state.installmentPayment]
            const index = copyArray.findIndex(payment=>(payment.purchaseRef==action.payload.code)&&(payment.type=="credit") )
            copyArray[index].amount = action.payload.total
            state.installmentPayment=copyArray
        }
    }
})
export const { createInstallmentPayment,
                updateInstallmentPayment,
                removeInstallmentPayment,
                removeInstallmentPaymentByRef,
                updateInstallmentCredit
            
            } = installmentPaymentSlice.actions

export default installmentPaymentSlice.reducer

export const createInstallmentPaymentAction = (data)=>{
    return async (dispatch,getState) =>{
        try{
            dispatch(createInstallmentPayment(data))
            if(data.type=="debit"){
                let total = 0
                const {installmentPayment} = getState()
                const index = installmentPayment.installmentPayment.findIndex(payment=>payment.purchaseRef == data.purchaseRef)
                for (let i = index; i < installmentPayment.installmentPayment.length; i++) {
                    if(installmentPayment.installmentPayment[i].purchaseRef == data.purchaseRef && installmentPayment.installmentPayment[i].type == "debit"){
                        console.log(installmentPayment.installmentPayment[i])
                        total += parseInt(installmentPayment.installmentPayment[i].amount)
                    }
                dispatch(updateInstallmentPaidAction(data.purchaseRef,total))
                }
            }
        }catch(err){

        }
    }
}

export const updateInstallmentPaymentAction = (data) =>{
    return async dispatch=>{
        try{
            // console.log(data)
            dispatch(updateInstallmentPayment(data))
        }catch(err){

        }
    }
}

export const updateInstallmentCreditAction = (data)=>{
    return async dispatch=>{
        try{
            dispatch(updateInstallmentCredit(data))
        }catch(err){

        }
    }
}

export const removeInstallmentPaymentAction=(id)=>{
    return async dispatch=>{
        try{
            dispatch(removeInstallmentPayment(id))
        }catch(err){

        }
    }
}
export const removeInstallmentPaymentByRefAction=(ref)=>{
    return async dispatch=>{
        try{
            dispatch(removeInstallmentPaymentByRef(ref))
        }catch(err){

        }
    }
}
