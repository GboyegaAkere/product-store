import { View, Text , StatusBar, FlatList, Image, Pressable} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ProductsScreen = () => {
    const navigation = useNavigation()
    // const products = useSelector(state.products.products)
    const products = useSelector((state) => state.products.products)
  return (
    <View>
        <FlatList
        data={products}
        renderItem={({ item }) => (

        <Pressable style={{ width: "50%", padding: 3 }} onPress={()=> navigation.navigate("Details")}>
            <Image source={{ uri: item.image }} className="aspect-square w-full"/>
        </Pressable>
        )}
        numColumns={2}
    />
   </View>
   );
  
}

export default ProductsScreen