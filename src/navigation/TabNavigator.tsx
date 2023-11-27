import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Image } from 'react-native-elements';

import homeIcon from '../assets/nav/home.svg';
import searchIcon from 'src/assets/nav/search.svg';
import orderIcon from 'src/assets/nav/orders.svg';
import accountIcon from 'src/assets/nav/account.svg';

import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Orders from '../tabs/Orders';
import Account from '../tabs/Account';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: '#fff',
        tabBarStyle: { height: 60 }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/nav/home.png')}
              resizeMode="contain"
              style={{
                paddingVertical: 10,
                width: 25,
                height: 25,
                tintColor: focused ? '#F65156' : '#6C7072'
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/nav/search.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F65156' : '#6C7072'
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/nav/list.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F65156' : '#6C7072'
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/nav/account.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#F65156' : '#6C7072'
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
