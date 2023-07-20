import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../../models/IProduct";

export const productApi = createApi({
    reducerPath: 'product/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fakestoreapi.com'
    }),
    endpoints: build => ({
        fetchProducts: build.query<IProduct[], number>({
            query: (limit: number) => ({
                url: 'products',
                limit
            })
        }),
        fetchCategories: build.query<string[], string>({
            query: (data: string) => ({
                url: `${data}/categories`
            })
        }),
        fetchProductById: build.query<IProduct, number>({
            query: (id: number) => ({
                url: `products/${id}`
            })
        })
    })
});

export const {useFetchProductsQuery, useFetchCategoriesQuery, useFetchProductByIdQuery} = productApi;