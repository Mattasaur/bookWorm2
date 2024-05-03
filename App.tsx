/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Below is library adding screens of app

// Providers
import {BookProvider} from './src/providers/bookProvider';
import HomeScreen from './src/screens/HomeScreen';
import AddBook from './src/screens/addBook';
import History from './src/screens/history';
import Genre from './src/screens/genre';

const Stack = createNativeStackNavigator();
// Stack Navigator allowing navigation between screens
function App(): React.JSX.Element {
  return (
    <BookProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BookWorm">
          <Stack.Screen name="BookWorm" component={HomeScreen} />
          <Stack.Screen name="Add Book" component={AddBook} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Genre" component={Genre} />
        </Stack.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
}

// Styles to be shared
export const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    flex: 1,
    padding: 24,
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: '#FFF7E1',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionText: {
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#FFF7E1',
  },
  buttonHeader: {
    fontWeight: '700',
  },
});

export default App;
