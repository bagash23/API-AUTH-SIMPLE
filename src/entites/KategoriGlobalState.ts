import {create} from 'zustand';

interface KategoriState {
  dataKategri: any;
  setDataKategri: (dataKategri: any) => void;
}

export const useKategoriState = create<KategoriState>(set => ({
  dataKategri: [],
  setDataKategri: (dataKategri: any) => {
    set(() => ({
      dataKategri: dataKategri,
    }));
  },
}));
