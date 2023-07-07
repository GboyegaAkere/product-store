import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";





const CartListItem = ({ cartItem }) => {


   return (
    <View className="flex-row space-x-3">
      <Image source={{ uri: cartItem.product.image }} style={{width:"40%", aspectRatio:1}} />
      <View className="mt-7">
        <Text className="text-lg font-bold">{cartItem.product.name}</Text>
        <Text className="text-sm font-black">Size {cartItem.size}</Text>

        <View className="flex-row space-x-3 mt-1">
          <Feather
            // onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text className="self-center">{cartItem.quantity}</Text>
          <Feather
            // onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          
        </View>
        <Text className="mt-1">$320.0</Text>
      </View>
    </View>
  );
};


export default CartListItem;
