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
           const cartItems = state.items.find((item) =>item.product.id === newProduct.id)
           if(cartItems){
                cartItems.quantity += 1
           }else{
            state.items.push({product:newProduct, quantity:1})
           }
        },
        
        changeQuantity:(state, action) => {
            const {productId, amount} = action.payload
            const cartItem = state.items.find(item=> item.product.id === productId)
            if(cartItem){
                cartItem.quantity += amount
            }
            if (cartItem.quantity < 0){
                state.items = state.items.filter((item) => item !== cartItem)
            }
            
        }
    }
})

export const  selectedNumberOfItems = (state) =>state.cart.items.length