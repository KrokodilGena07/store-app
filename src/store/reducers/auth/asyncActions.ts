import axios from "axios";
import { AppDispatch } from "../..";
import { authActions } from "./authSlice";
import { IUser } from "../../../models/IUser";
import { RouteNames } from "../../../router";

export const authAsyncActions = {
    login: (
            username: string,
            password: string,
            navigate: (path: string) => void
        ) => async (dispatch: AppDispatch) => {
        try {
            dispatch(authActions.setIsLoading(true));
            const response = await axios.get<IUser[]>('https://fakestoreapi.com/users');
            const mockUser = response.data.find(user => user.username === username && user.password === password);
            if (mockUser) {
                dispatch(authActions.setIsAuth(true));
                localStorage.setItem('isAuth', 'true');
                navigate(RouteNames.HOME);      
            } else {
                dispatch(authActions.setError('Wrong username or password!'));
            }
        } catch (e) {
            dispatch(authActions.setError('Server error, try again'));
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        dispatch(authActions.setIsAuth(false));
        localStorage.removeItem('isAuth');
        localStorage.removeItem('Cart');
    }
};