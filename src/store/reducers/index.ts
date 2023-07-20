import { authReducer } from "./auth/authSlice";
import { cartReducer } from "./cart/cartSlice";
import { productApi } from "./product/productApi";

export const reducers = {
    authReducer,
    cartReducer,
    [productApi.reducerPath]: productApi.reducer
};