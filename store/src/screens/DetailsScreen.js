import { View, Text, FlatList, Image, ScrollView, Pressable} from 'react-native'
import React from 'react'
import products from '../data/products'
import { useWindowDimensions } from 'react-native'
import {useSelector } from 'react-redux'

const DetailsScreen = () => {
  const {width} = useWindowDimensions()
  const productt =  useSelector((state) => state.products.selectedProduct)
  return (
    <>
    <ScrollView>
     

      <FlatList
        horizontal
        data={productt.images}
        renderItem={({item})=>(
          <View>
            <Image source={{ uri: item}} style={{ width, aspectRatio: 1 }}/>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        
        />

        <View className="px-4">
          <Text className="text-lg font-bold">{productt.name}</Text>
          <Text className="mt-2 text-sm">${productt.price}</Text>
          <Text className="space-x-3 mt-2">{productt.sizes}</Text>
          <Text className="mt-3">{productt.description}</Text>
        </View>
       
    </ScrollView>
     <Pressable className="bg-black w-11/12 absolute bottom-3 self-center rounded-2xl">
      <Text className="text-white self-center py-4">$700</Text>
     </Pressable>
   </>
  )
}

export default DetailsScreen