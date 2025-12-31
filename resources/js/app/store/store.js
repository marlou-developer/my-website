import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/app-slice";
import posProductSlice  from "../redux/pos/pos-product-slice";
const store = configureStore({
    reducer: {
        app: appSlice,
        pos_products:posProductSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
