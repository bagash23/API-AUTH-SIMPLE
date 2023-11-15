import {create} from 'zustand';
import {AccountState, ResponseApi} from './entities/AccountState';
import {ApiLogin, ApiRegister} from '../../utils/api';
import axios from 'axios';
import {APP_PUBLIC_BASE_URL, APP_PUBLIC_LOGIN, APP_PUBLIC_REGISTER} from '@env';
import { StoreDataValue } from '../../utils';

const initState: AccountState = {
  token: '',
  loading: false,
  disabled: false,
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
  async loginAccount(email, password): ResponseApi{
    set(() => ({loading: true, disabled: true}));

    try {
      const res = await axios.post(`${APP_PUBLIC_BASE_URL}${APP_PUBLIC_LOGIN}`, {
        email,
        password,
      });
      console.log('res login:', res.data.access_token);
      set(() => ({
        loading: false,
      }));
      // @ts-ignore
      StoreDataValue("token", res.data.access_token)

      return {
        success: true,
        message: 'Berhasil Login',
        status: res.data.status,
      };
    } catch (error) {
      set(() => ({loading: false}));

      return {
        success: false,
        message: 'failed login',
        status: error?.status,
      };
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
      const res = await axios.post(`${APP_PUBLIC_BASE_URL}${APP_PUBLIC_REGISTER}`, {
        name,
        profesi,
        email,
        photo,
        passwordConfirm,
        password,
      })

      console.log('res register:', res.data);
      set(() => ({
        loading: false,
        userProfile: res.data,
      }))
      return {
        success: true,
        message: 'Berhasil',
        status: res.data.status,
      };
    } catch (error) {
      set(() => ({loading: false}));
    }
  },

  setDisabled: (disabled: boolean) => {
    set(() => ({disabled}));
  },
}));
