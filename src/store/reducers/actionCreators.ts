import { authAsyncActions } from "./auth/asyncActions";
import { authActions } from "./auth/authSlice";
import { cartActions } from "./cart/cartSlice";

export const actionCreators = {
    ...authActions,
    ...authAsyncActions,
    ...cartActions
};