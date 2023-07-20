import { IProduct } from "../models/IProduct";

export const sort = (products: IProduct[], value: (a: IProduct, b: IProduct) => number) => ([...products].sort(value));