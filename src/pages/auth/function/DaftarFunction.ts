import { useState } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAccount } from '../../../domain/auth/useAuth';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';

interface IReturnDaftar {
  isSecureEntry: boolean;
  setIsSecureEntry: (secure: boolean) => void;
  data: {
    name: string;
    profesi: string;
    email: string;
    passwordConfirm: string;
    password: string;
  };
  handleStateDaftar: (field: string, value: string) => void;
  handleDaftar: (
    name: string,
    profesi: string,
    email: string,
    image: string,
    passwordConfirm: string,
    password: string,
  ) => void;
  getImage: () => void;
  photo: string;
  setPhoto: (photo: string) => void;
  photoForDB: {
    uri: string;
    name: string;
    type: string;
  };
  setPhotoForDB: (photo: { uri: string; name: string; type: string }) => void;
  checkImage: () => void;
}

export const useHandleDaftar = (): IReturnDaftar => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const { registerAccount } = useAccount();
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
  const [data, setData] = useState({
    name: '',
    profesi: '',
    email: '',
    passwordConfirm: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');
  const [photoForDB, setPhotoForDB] = useState({
    uri: '',
    name: '',
    type: '',
  });

  const handleStateDaftar = (field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getImage = () => {
    launchImageLibrary(
      { quality: 0.5, maxWidth: 200, maxHeight: 200 },
      (response: ImagePickerResponse) => {
        if (response.didCancel || response.error) {
          console.log('User cancelled image picker');
        } else {
          const source = response.assets[0].uri;
          const dataImage = {
            uri: response.assets[0].uri,
            name: response.assets[0].fileName || '',
            type: response.assets[0].type || '',
          };
          setPhotoForDB({ ...dataImage });
          setPhoto(source);
        }
      },
    );
  };

  const checkImage = () => {
    if (photoForDB.uri === '') {
      getImage();
    } else {
      setPhotoForDB({
        uri: '',
        type: '',
        name: '',
      });
    }
  };

  const handleDaftar = async (
    name: string,
    profesi: string,
    email: string,
    image: string,
    passwordConfirm: string,
    password: string,
  ) => {
    try {
      // @ts-ignore
      const res = await registerAccount(
        name,
        profesi,
        email,
        image,
        passwordConfirm,
        password,
      );
      if (res.status === 'success') {
        navigation.replace('LoginScreen')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isSecureEntry,
    setIsSecureEntry,
    data,
    handleStateDaftar,
    handleDaftar,
    photo,
    setPhoto,
    photoForDB,
    setPhotoForDB,
    checkImage,
  };
};
