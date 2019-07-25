import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation"
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

