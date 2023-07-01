import { createSlice } from "@reduxjs/toolkit";
import products from '../data/products';

const initialState = {
    products: products
}

export const ProductSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

    }
})