import {create} from 'zustand';
import {MotivasiState} from './entities/MotivasiState';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  APP_PUBLIC_BASE_URL,
  APP_PUBLIC_ALL_MOTIVASI,
  APP_PUBLIC_MOTIVASI,
} from '@env';
import axios from 'axios';

export const useMotivasi = create<MotivasiState>((set, get) => ({
  listResponseAllMotivasi: [],
  createMotivasi: async (motivator, category, quotes) => {
    try {
      set({loading: true});
      const token = await EncryptedStorage.getItem('token');
      
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        motivator,
        category,
        quotes,
      };
      const url = `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_MOTIVASI}`; // Gabungkan URL dan path tambahan menjadi satu string
      await axios.post(url, data, config);
      await get().allMotivasi();
      set(() => ({
        loading: false,
      }));
    } catch (error) {
      set({loading: false});
      throw error;
    }
  },
  allMotivasi: async () => {
    try {
      set({loading: true});
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const url = `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_ALL_MOTIVASI}`; // Gabungkan URL dan path tambahan menjadi satu string
      const res = await axios.get(url, config);
      set(() => ({
        loading: false,
        listResponseAllMotivasi: res.data,
      }));
    } catch (error) {
      set({loading: false});
    }
  },
}));
