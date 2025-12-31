import { createSlice } from "@reduxjs/toolkit";

export const posProductSlice = createSlice({
    name: "app",
    initialState: {
        cart: [],
        cartDetail: {
            tax: 0.06,
            grandTotal: 0,
            changeDue: 0,
            subtotal: 0,
        },
        amountPaid: 0,
        heldSales: [],
    },
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },

        setAmountPaid: (state, action) => {
            state.amountPaid = action.payload;
        },
        setCartDetail:(state,action)=>{
            state.cartDetail = action.payload;
        },
        setHeldSales: (state, action) => {
            state.heldSales = action.payload;
        },
    },
});

export const { setCart, setAmountPaid, setHeldSales,setCartDetail } = posProductSlice.actions;
export default posProductSlice.reducer;
