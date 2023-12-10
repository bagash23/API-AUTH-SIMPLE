import React from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {StyleLogin} from './components/StyleLogin';
import {TextInputComponent} from '../../components/TextInput';
import {useHandleLogin} from './function/LoginFunction';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../utils';
import GapComponent from '../../components/Gap';
import ButtonComponent from '../../components/Button';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {isSecureEntry, setIsSecureEntry, data, handleStateLogin, handleLogin} =
    useHandleLogin();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={StyleLogin.container}>
      <View style={StyleLogin.contanerContainer}>
        <View style={StyleLogin.contentPertama}>
          <Text style={StyleLogin.textTitle}>Vigenesia</Text>
          <View style={{marginHorizontal: 20,marginVertical: 20}}>
            <TextInputComponent
              placeholder="Masukan email kamu"
              label="Email"
              value={data.email}
              onChangeText={e => handleStateLogin('email', e)}
            />
            <GapComponent height={12} />
            <TextInputComponent
              placeholder="Masukan password kamu"
              label="Password"
              secureTextEntry={isSecureEntry}
              value={data.password}
              onChangeText={e => handleStateLogin('password', e)}
              iconRight={
                isSecureEntry ? (
                  <Entypo
                    name="eye"
                    size={23}
                    color={colors.grey}
                    onPress={() => setIsSecureEntry(false)}
                  />
                ) : (
                  <Entypo
                    name="eye-with-line"
                    size={23}
                    color={colors.grey}
                    onPress={() => setIsSecureEntry(true)}
                  />
                )
              }
            />
            <GapComponent height={12} />
            <ButtonComponent
              title={'Masuk'}
              onPress={() => handleLogin(data.email, data.password)}
            />
            <GapComponent height={12} />
            <ButtonComponent
              title={'Daftar'}
              type="outline"
              onPress={() => navigation.navigate('DaftarScreen')}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
