import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    deliveryFee:30,
    freeDeliveryFrom:200
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
      addCartItems:(state, action)=>{
        const newProduct = action.payload.product
        state.items.push({product:newProduct, quatity:1})
      },
      
      changeQuality:(state, action) =>{

      }
    }
})