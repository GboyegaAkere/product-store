import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {useSelector , useDispatch} from "react-redux"
import { productSlice } from '../store/productsSlice'


const ProductsScreen = () => {
 const navigation = useNavigation()
 const products = useSelector( state => state.products.products)
 const dispatch = useDispatch()



  return (
    <View>
     <FlatList
      data={products}
      renderItem={({ item }) => (

        <Pressable 
         style={{ width: "50%", padding: 3 }} 
         onPress={()=>{
          //  UPDATE SELECTEDPRODUCT WITH THE DISPATCH ACTION
          dispatch(productSlice.actions.setSelectedProduct(item.id))
          navigation.navigate("Details")
        }}
        >
          <Image source={{ uri: item.image }} className="aspect-square w-full"/>
        </Pressable>
      )}
      numColumns={2}
    />
    </View>
  )
}

export default ProductsScreen