import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Community from '../screens/Community.js';
import PlantATree from '../screens/PlantATree';

import MyForestScreen from '../screens/MyForestScreen';
import Foundation from '../screens/Foundation.js';


export const AppTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Community: { screen: Community },
    PlantATree: { screen: PlantATree },
    Foundation: { screen: Foundation },
    MyForest: { screen: MyForestScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../assets/home-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (routeName === 'Community') {
          return (
            <Image
              source={require('../assets/chat-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (routeName === 'PlantATree') {
          return (
            <Image
              source={require('../assets/plant-icon.png')}
              style={{ width: 19, height: 19 }}
            />
          );
        } else if (routeName === 'MyForest') {
          return (
            <Image
              source={require('../assets/forest.png')}
              style={{ width: 20, height: 20 }}
            />
          );
          }else if (routeName === 'Foundation') {
            return (
              <Image
                source={require('../assets/Foundation.png')}
                style={{ width: 20, height: 20 }}
              />
            );
        }
      },
    }),
  }
);
