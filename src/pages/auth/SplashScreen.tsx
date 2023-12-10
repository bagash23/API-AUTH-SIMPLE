import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {StyleSplash} from './components/StyleSplash';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 5000);
  }, []);

  return (
    <View style={StyleSplash.container}>
      <Text style={StyleSplash.textSplash}>#Vigenesia</Text>
    </View>
  );
};

export default SplashScreen;
