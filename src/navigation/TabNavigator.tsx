import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import homeIcon from '../assets/nav/home.svg';
import searchIcon from 'src/assets/nav/search.svg';
import orderIcon from 'src/assets/nav/orders.svg';
import accountIcon from 'src/assets/nav/account.svg';

import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Orders from '../tabs/Orders';
import Account from '../tabs/Account';

import useCurrentUser from '../hooks/useCurrentUser';
import useOffline from '../hooks/useOffline';
import NetInfo from '@react-native-community/netinfo';

import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '~/tabs/ProductDetails';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component={Home} />
    <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
  </HomeStack.Navigator>
);

const TabNavigator = () => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();
  const { isOffline, goOnline } = useOffline();

  useEffect(() => {
    if (isOffline) {
      NetInfo.fetch().then((state) => {
        if (state.isConnected) {
          fetchCurrentUser();
          goOnline();
        }
      });
    }
  }, [isOffline, goOnline, fetchCurrentUser]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: '#fff',
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: {
          fontFamily: 'Poppins'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
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
      >
        {() => <Orders currentUser={currentUser} />}
      </Tab.Screen>
      <Tab.Screen
        name="Account"
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
      >
        {() => <Account currentUser={currentUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
