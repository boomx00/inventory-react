import { createSlice } from "@reduxjs/toolkit";
import { addOrdersAction, updateOrdersAction } from "./orderSlices";

export const salesSlice = createSlice({
    name:"sales",
    initialState:{
        sales:[
            // {id:1,code:"X1",date:"24/6/2020",customer:"adam",cashier:"teng",total:"50000",status:"paid"},
            // {id:2,code:"X2",date:"22/6/2020",customer:"man",cashier:"popo",total:"200000",status:"unpaid"}
        ]
    },
    reducers:{
        createSales: (state,action)=>{
            let id = state.sales.length + 1
            const newSales = {...action.payload,id:id}
                state.sales = [newSales,...state.sales]
        },
        updateSales:(state,action)=>{
            const index = state.sales.findIndex(sales=>sales.code==action.payload.code)
      const newArray = [...state.sales];
      newArray[index] = {...action.payload,id:newArray[index].id};
      state.sales = newArray;
        }
    }
})

export const {
    createSales,
    updateSales
} = salesSlice.actions;

export default salesSlice.reducer;


export const createSalesAction =(data)=>{
    return async(dispatch)=>{
        try{
            const salesData = {
                code: data.code,
                date: data.date,
                customer: data.customer,
                cashier:data.cashier,
                total:data.total,
                status:"paid"
            }
            const ordersData = {
                products: data.products,
                code: data.code,
            }
            dispatch(createSales(salesData))
            dispatch(addOrdersAction(ordersData))
        }catch(err){

        }
    }
}

export const updateSalesAction=(data)=>{
    return async(dispatch)=>{
        try{
            const newSalesData = {
                code:data.code,
                date: data.date,
                customer: data.customer,
                cashier: data.cashier,
                total: data.total,
                status:"paid"
            }
            const newOrders = {
                products: data.products,
                code: data.code
            }
            console.log(data.total)
            dispatch(updateSales(newSalesData))
            dispatch(updateOrdersAction(newOrders))
        }catch(err){

        }
    }
}
