import {create} from 'zustand';
import {CategoryState} from './entites/CategiryState';
import EncryptedStorage from 'react-native-encrypted-storage';
import axios from 'axios';
import {
  APP_PUBLIC_BASE_URL,
  APP_PUBLIC_CATEGORY,
  APP_PUBLIC_ALL_CATEGORY,
  APP_PUBLIC_DELETED_CATEGORY,
  APP_PUBLIC_EDIT_CATEGORY,
} from '@env';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export const useCategory = create<CategoryState>((set, get) => ({
  listResponseCategory: [],
  createCategory: async category => {
    try {
      set({loading: true});
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(
        `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_CATEGORY}`,
        {
          category,
        },
        config,
      );
      await get().allCategory();
      set({loading: false});
    } catch (error) {
      set({loading: false});
      throw error;
    }
  },
  allCategory: async () => {
    try {
      set({loading: true});
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const url = `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_ALL_CATEGORY}`;
      const res = await axios.get(url, config);
      set(() => ({
        loading: false,
        listResponseCategory: res.data,
      }));
    } catch (error) {
      set({loading: false});
      throw error;
    }
  },

  removeCategory: async id => {
    try {
      set({loading: true});
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const url = `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_DELETED_CATEGORY}/${id}`;
      await axios.delete(url, config);
      await get().allCategory();
      set(() => ({
        loading: false,
      }));
    } catch (error) {
      set({loading: false});
    }
  },
  editCategory: async (id, category) => {
    try {
      set({loading: true});
      const token = await EncryptedStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const url = `${APP_PUBLIC_BASE_URL}${APP_PUBLIC_EDIT_CATEGORY}/${id}`;
      const data = {
        category,
      };
      await axios.put(url, data, config);
      await get().allCategory();
      set(() => ({
        loading: false,
      }));
    } catch (error) {
      set({loading: false});
    }
  },
}));
