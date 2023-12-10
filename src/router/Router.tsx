import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DaftarScreen, LoginScreen, SplashScreen} from '../pages/auth';
import {Category, Home, Motivasi} from '../pages';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
      activeColor={colors.primary}
      barStyle={{
        backgroundColor: '#FFFFFF',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={Category}
        options={{
          tabBarLabel: 'Kategori',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="bookmark-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MotivasiScreen"
        component={Motivasi}
        options={{
          tabBarLabel: 'Motivasi',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="book-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="DaftarScreen" component={DaftarScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};
export default Router;
