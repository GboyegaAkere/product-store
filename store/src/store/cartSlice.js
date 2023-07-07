import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    deliveryPrice: 200,
    freeDeliveryFrom:20
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartItems:(state, action) =>{
           const newProduct = action.payload.product 
           state.items.push({product:newProduct, quantity:1})
        }
    }
})