import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createMaterialTopTabNavigator, createStackNavigator} from "react-navigation"
import HomeScreen from "./screens/HomeScreen"
import MovieDetailsScreen from "./screens/MovieDetailsScreen"


const AppNavigator  = createAppContainer(createStackNavigator({
    "HomeScreen":HomeScreen,
     "MovieDetailsScreen": MovieDetailsScreen 
},{
  initialRouteName:"HomeScreen"
}))


export default class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
