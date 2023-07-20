import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { productApi } from "./reducers/product/productApi";

const rootReducer = combineReducers(reducers);

export const store = configureStore({
    reducer: rootReducer,
    middleware: gDM => gDM().concat(productApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;