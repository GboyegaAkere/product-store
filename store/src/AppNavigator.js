import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsScreen from './screens/ProductsScreen'
import DetailsScreen from './screens/DetailsScreen'
import ShoppingCartsScreen from './screens/ShoppingCartsScreen'
import { Pressable, Text } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import { selectedNumberOfItems } from './store/cartSlice'


const Stack = createNativeStackNavigator()


const AppNavigator = () => {
  const selectedItems = useSelector(selectedNumberOfItems)
  return (
  
   <NavigationContainer>
      <Stack.Navigator>
       
       <Stack.Screen name='Products' component={ProductsScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Cart')}
              style={{ flexDirection: 'row' }}
              className="space-x-1 items-center"
            >
              <Ionicons name="cart-outline" size={25} color="gray" />
              <Text className="text-lg">{selectedItems}</Text>
            </Pressable>
          ),
        })}

       />
       <Stack.Screen name='Details'
        component={DetailsScreen} 
        options={{presentation:'modal'}}
        />
      <Stack.Screen name='Cart' component={ShoppingCartsScreen} />
       
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator          

 