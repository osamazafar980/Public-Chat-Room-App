import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import ConfigScreen from './screens/ConfigScreen'

const stackNavigator = createStackNavigator(
  {
    Home:HomeScreen,
    Config:ConfigScreen
  },{
    initialRouteName: "Config",

    defaultNavigationOptions: {
      headerTitleStyle: { alignSelf: 'center' },
      title: "Screams"
    }
  }
);



export default createAppContainer(stackNavigator);