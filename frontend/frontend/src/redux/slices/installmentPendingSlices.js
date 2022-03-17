import { createSlice } from "@reduxjs/toolkit";

export const installmentPendingSlice = createSlice({
    name: 'installmentPending',
    initialState:{
        installmentPending:[]
    },
    reducers:{
        createInstallmentPending:(state,action)=>{
            let id = state.installmentPending.length + 1
            const newInstallment = {...action.payload,id:id}
            state.installmentPending = [newInstallment,...state.installmentPending]
        },
        removeInstallmentPending:(state,action)=>{
            const copyArray = [...state.installmentPending]
            const index = copyArray.findIndex(installment=>installment.purchaseRef==action.payload)
            copyArray.splice(index,1)
            state.installmentPending=copyArray
        },
        updateInstallmentPending:(state,action)=>{
            const copyArray=[...state.installmentPending]
            const index = copyArray.findIndex(installment=>installment.purchaseRef==action.payload.code)
            copyArray[index].amount = action.payload.total
            state.installmentPending=copyArray
        }
    }
})

export const {
    createInstallmentPending,
    removeInstallmentPending,
    updateInstallmentPending
} = installmentPendingSlice.actions

export default installmentPendingSlice.reducer

export const createInstallmentPendingAction=(data)=>{
    return async dispatch=>{
        try{
            const installmentData = {
                purchaseRef: data.code,
                supplier: data.supplier,
                amount: data.total,
                status: data.status,
                days: data.days,
                paid: data.paid,
                confirmed: false
            }
            dispatch(createInstallmentPending(installmentData))
        }catch(err){

        }
    }
}
export const removeInstallmentPendingAction=(ref)=>{
    return async dispatch=>{
        try{
            dispatch(removeInstallmentPending(ref))
        }catch(err){

        }
    }
}

export const updateInstallmentPendingAction=(data)=>{
    return async dispatch=>{
        try{
            dispatch(updateInstallmentPending(data))
        }catch(err){

        }
    }
}