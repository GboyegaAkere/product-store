import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";

const initialState = {
    prod :products,
    selectedProduct:null
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setSelectedproduct:(state, action) =>{
            const productId =action.payload
            state.selectedProduct = state.prod.find(p=>(p.id == productId))
        }
    },
}) 

