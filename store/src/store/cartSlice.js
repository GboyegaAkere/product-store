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
        const cartItem = state.items.find((item) => item.product.id == newProduct.id)
        if(cartItem){
          cartItem.quantity +=1
        }else{
          state.items.push({product:newProduct, quantity:1})
        }
        
      },
      
      changeQuality:(state, action) =>{

      }
    }
})