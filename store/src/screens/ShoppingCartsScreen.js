import { View, Text, FlatList ,Pressable} from 'react-native'
import React from 'react'
import cart from '../data/cart'
import CartListItem from '../components/CartListItem'

const ShoppingCartsScreen = () => {
  return (
    <>
    <FlatList
    data={cart}
    renderItem={({item})=>(
        <>
        <CartListItem cartItem={item}/>
        </>
    )}
    ListFooterComponent={() => (
        <View className="px-4">
          <View className="flex-row justify-between items-center ">
            <Text className="text-lg text-gray-500">Subtotal</Text>
            <Text className="text-gray-500" >410,00 US$</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg text-gray-500">Delivery</Text>
            <Text className="text-gray-500">16,50 US$</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="font-bold text-lg">Total</Text>
            <Text>426,50 US$</Text>
          </View>

        </View>
        
      )}
    />
     <Pressable className="bg-black w-11/12 absolute bottom-3 self-center rounded-2xl">
      <Text className="text-white self-center py-4">Checkout</Text>
     </Pressable>
    </>
  )
}

export default ShoppingCartsScreen