import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "orders",
    initialState:{
        orders:[
        //     {code:'X1',
        //     products:
        //         [{
        //         code:'A1',
        //         stock:5,
        //         name:"chair",
        //         quantity:1,
        //         price:10000,
        //         total: 10000},
        //         {
        //         code:'B1',
        //         stock: 2,
        //         name:"table",
        //         quantity:2,
        //         price:20000,
        //         total: 20000}
        //     ]
        //     ,
        // }
        ]
    },
    reducers:{
        addOrders:(state,action)=>{
            // console.log("asdasd")
            // const newOrder = {...action.payload,id:5}
            state.orders = [action.payload,...state.orders]
            
        },
        updateOrders:(state,action)=>{
            const index = state.orders.findIndex(orders=>orders.code==action.payload.saleRef)
            const orderCopy = [...state.orders]
            orderCopy.splice(index, 1);
            state.orders = orderCopy
            state.orders = [action.payload,...state.orders]

        }
    }
});

export const {
    addOrders,
    updateOrders
} = orderSlice.actions;

export default orderSlice.reducer;

export const addOrdersAction = (data)=>{
    return async (dispatch) =>{
        try{
            const orderData = {...data}
            dispatch(addOrders(orderData))
        }catch(err){
            console.log(err)
        }
    }
}
export const updateOrdersAction = (data)=>{
    return async (dispatch)=>{
        try{
            // console.log(data.saleRef)
            dispatch(updateOrders(data))
        }catch(err){

        }
    }
}