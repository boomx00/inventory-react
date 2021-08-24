import { createStore, configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './slices/authSlices';
import InventorySlice from './slices/inventorySlices';
import salesSlice  from './slices/salesSlices';
import  supplierSlice  from './slices/supplierSlices';
import orderSlice from './slices/orderSlices';
import purchaseSlice from './slices/purchaseSlices';
import purchaseOrder from './slices/purchaseOrderSlices'
const reducer = combineReducers({
    auth: authSlice,
    inventory:InventorySlice,
    supplier: supplierSlice,
    sales: salesSlice,
    orders: orderSlice,
    purchases: purchaseSlice,
    purchaseOrder: purchaseOrder
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = {};
    }

    return reducer(state, action);
};

const store = configureStore({
    reducer: rootReducer
});



export default store;