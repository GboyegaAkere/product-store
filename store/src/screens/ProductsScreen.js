import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
// import products from '../data/products'
import { useNavigation } from '@react-navigation/native'
import { useSelector,  useDispatch } from 'react-redux'
import { productsSlice } from '../store/productsSlice'

const ProductsScreen = () => {
 const navigation = useNavigation()
 const dispatch = useDispatch()

 const products = useSelector((state) => state.products.prod)
 

  return (
    <View>
     <FlatList
      data={products}
      renderItem={({ item }) => (

        <Pressable 
         style={{ width: "50%", padding: 3 }} 
         onPress={()=>{
          dispatch(productsSlice.actions.setSelectedproduct(item.id))
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