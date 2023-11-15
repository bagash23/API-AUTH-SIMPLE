import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StyleLogin } from './components/StyleLogin';
import { TextInputComponent } from '../../components';
import ButtonComponent from '../../components/Button';
import GapComponent from '../../components/Gap';
import { useHandleDaftar } from './function/DaftarFunction';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../utils';
import { PhotoNull } from '../../assets';

const DaftarScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {
    isSecureEntry,
    setIsSecureEntry,
    handleStateDaftar,
    handleDaftar,
    data,
    photoForDB,
    checkImage,
  } = useHandleDaftar();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={StyleLogin.container}>
      <View style={StyleLogin.containerContainer}>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={StyleLogin.contentPertama}>
            <View
              style={{
                marginHorizontal: 20,
                marginVertical: 20,
              }}>
              <TouchableOpacity onPress={checkImage}>
                <Image
                  source={
                    photoForDB.uri === '' ? PhotoNull : { uri: photoForDB.uri }
                  }
                  style={StyleLogin.avatar}
                />
              </TouchableOpacity>
              <GapComponent height={12} />
              <TextInputComponent
                placeholder="Masukan nama kamu"
                label="Nama"
                value={data.name}
                onChangeText={(e) => handleStateDaftar('name', e)}
              />
              <GapComponent height={12} />
              <TextInputComponent
                placeholder="Masukan profesi kamu"
                label="Profesi"
                value={data.profesi}
                onChangeText={(e) => handleStateDaftar('profesi', e)}
              />
              <GapComponent height={12} />
              <TextInputComponent
                placeholder="Masukan email kamu"
                label="Email"
                value={data.email}
                onChangeText={(e) => handleStateDaftar('email', e)}
              />
              <GapComponent height={12} />
              <TextInputComponent
                placeholder="Masukan password kamu"
                label="Password"
                secureTextEntry={isSecureEntry}
                value={data.password}
                onChangeText={(e) => handleStateDaftar('password', e)}
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
              <TextInputComponent
                placeholder="Masukan password konfirmasi kamu"
                label="Password Konfirmasi"
                secureTextEntry={isSecureEntry}
                value={data.passwordConfirm}
                onChangeText={(e) => handleStateDaftar('passwordConfirm', e)}
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
                title={'Daftar'}
                onPress={() =>
                  handleDaftar(
                    data.name,
                    data.profesi,
                    data.email,
                    photoForDB.uri,
                    data.passwordConfirm,
                    data.password,
                  )
                }
              />
              <GapComponent height={12} />
              <ButtonComponent
                title={'Masuk'}
                type="outline"
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DaftarScreen;
