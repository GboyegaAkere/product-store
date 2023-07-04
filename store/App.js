import { StatusBar } from 'expo-status-bar';
// import { Text, View  } from 'react-native';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
      <Provider store={store}>
       <AppNavigator/>
      </Provider>
  
  );
}

