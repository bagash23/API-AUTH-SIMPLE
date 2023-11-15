import axios from 'axios';
// @ts-ignore
import {APP_PUBLIC_BASE_URL, APP_PUBLIC_LOGIN, APP_PUBLIC_REGISTER} from '@env';

export const ApiLogin = axios.create({
  baseURL: APP_PUBLIC_BASE_URL + APP_PUBLIC_LOGIN,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiRegister = axios.create({  
  baseURL: APP_PUBLIC_BASE_URL + APP_PUBLIC_REGISTER,
  headers: {
    'Content-Type': 'application/json',
  },
});
