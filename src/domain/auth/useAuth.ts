import {create} from 'zustand';
import {AccountState, ResponseApi} from './entities/AccountState';
import axios from 'axios';
import {APP_PUBLIC_BASE_URL, APP_PUBLIC_LOGIN, APP_PUBLIC_REGISTER} from '@env';
import {StoreDataValue} from '../../utils';
import EncryptedStorage from 'react-native-encrypted-storage';

const initState = {
  token: '',
  loading: false,
  userProfile: {
    name: '',
    email: '',
    profesi: '',
    photo: '',
  },
};

export const useAccount = create<AccountState>(set => ({
  ...initState,

  // @ts-ignore
  async loginAccount(email, password): ResponseApi {
    set(() => ({loading: true}));

    try {
      const res = await axios.post(
        `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_LOGIN}`,
        {
          email,
          password,
        },
      );      
      set(() => ({
        loading: false,
      }));
      // @ts-ignore
      EncryptedStorage.setItem('token', res.data.access_token);
      return {
        success: true,
        message: 'Berhasil Login',
        status: res.data.status,
      };
    } catch (error) {
      set(() => ({loading: false}));
    }
  },

  // @ts-ignore
  async registerAccount(
    name,
    profesi,
    email,
    photo,
    passwordConfirm,
    password,
  ) {
    set(() => ({loading: true, disabled: true}));

    try {
      const res = await axios.post(
        `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_REGISTER}`,
        {
          name,
          profesi,
          email,
          photo,
          passwordConfirm,
          password,
        },
      );
      set(() => ({
        loading: false,
        userProfile: res.data,
      }));
      return {
        success: true,
        message: 'Berhasil',
        status: res.data.status,
      };
    } catch (error) {
      set(() => ({loading: false}));
    }
  },
}));
