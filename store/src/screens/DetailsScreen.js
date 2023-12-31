import { View, Text, FlatList, Image, ScrollView, Pressable} from 'react-native'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import {useSelector, useDispatch } from 'react-redux'
import { cartSlice } from '../store/cartSlice'



const DetailsScreen = () => {
  const {width} = useWindowDimensions()
  const product = useSelector(state =>state.products.selectedProduct)
  const dispatch = useDispatch()
  

  const addToCart = ()=> {
    dispatch(cartSlice.actions.addCartItems({product:product}))
  }

  
  return (
    <>
    <ScrollView>
     

      <FlatList
        horizontal
        data={product.images}
        renderItem={({item})=>(
          <View>
            <Image source={{ uri: item}} style={{ width, aspectRatio: 1 }}/>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        
        />

        <View className="px-4">
          <Text className="text-lg font-bold">{product.name}</Text>
          <Text className="mt-2 text-sm">${product.price}</Text>
          <Text className="space-x-3 mt-2">{product.sizes}</Text>
          <Text className="mt-3">{product.description}</Text>
        </View>
       
    </ScrollView>
     <Pressable 
      className="bg-black w-11/12 absolute bottom-3 self-center rounded-2xl"
      onPress={addToCart}
     >
      <Text className="text-white self-center py-4">Add to cart</Text>
     </Pressable>
   </>
  )
}

export default DetailsScreen