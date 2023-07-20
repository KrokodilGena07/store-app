import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";

interface CartState {
    cart: IProduct[];
}

const initialState: CartState = {
    cart: JSON.parse(localStorage.getItem('Cart') || '[]')
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<IProduct>) {
            if (!(state.cart.find(p => p.id === action.payload.id))) {
                state.cart.push(action.payload);
                localStorage.setItem('Cart', JSON.stringify(state.cart));
            }
        },
        removeProduct(state, action: PayloadAction<number>) {
            state.cart = state.cart.filter(product => product.id !== action.payload);
            localStorage.setItem('Cart', JSON.stringify(state.cart));
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;