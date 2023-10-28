import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Router from './router/Router';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    );
  }
}

