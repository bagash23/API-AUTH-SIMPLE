import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Fonts, colors} from '../../utils';
import {useMotivasi} from '../../domain/motivasi/useMotivasi';
import HeaderComponent from '../../components/Header';
import ModalLoading from '../../components/Modal/ModalLoading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useCategory} from '../../domain/category/useCategory';
import {ModalFilterKategori} from '../../components';
import {useKategoriState} from '../../entites/KategoriGlobalState';

interface MotivasiItem {
  id: number;
  category: string;
  created_at: string;
  motivator: string;
  quotes: string;
  updated_at: string;
}

const Home = () => {
  const {allMotivasi, listResponseAllMotivasi, loading} = useMotivasi();
  const {allCategory, listResponseCategory} = useCategory();
  const {dataKategri} = useKategoriState();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    allMotivasi();
    allCategory();
  }, []);

  const getRandomColor = () => {
    const red = Math.floor(Math.random() * 200);
    const green = Math.floor(Math.random() * 200);
    const blue = Math.floor(Math.random() * 200);
    const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(
      16,
    )}`;

    return color;
  };

  const renderItem = (item: MotivasiItem) => {
    const backgroundColor = getRandomColor();
    return (
      <View
        style={{
          margin: 20,
          backgroundColor,
          padding: 20,
          borderRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: colors.white,
            fontFamily: Fonts.primary[600],
          }}>
          {item.category} - {item.motivator}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: Fonts.primary[400],
            color: colors.white,
          }}>
          {item.quotes}
        </Text>
      </View>
    );
  };

  const filteredData =
    dataKategri.length > 0
      ? listResponseAllMotivasi?.data?.filter(item =>
          dataKategri.includes(item.category),
        )
      : listResponseAllMotivasi?.data;

  return (
    <View style={styles.container}>
      <HeaderComponent title="Vigenesia App" />
      <FlatList
        data={filteredData}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: Fonts.primary[700],
                }}>{`Tidak ada data dari kategori ${dataKategri}`}</Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.btnKategori}
        onPress={() => setOpenModal(true)}>
        <AntDesign name="filter" size={12} color={colors.white} />
      </TouchableOpacity>
      {loading && <ModalLoading />}
      <ModalFilterKategori
        open={openModal}
        close={() => setOpenModal(false)}
        data={listResponseCategory.data}
        title="Filter Kategori"
      />
    </View>
  );
};

export default Home;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnKategori: {
    backgroundColor: colors.grey,
    padding: 12,
    position: 'absolute',
    borderRadius: 200,
    bottom: 20,
    right: 20,
  },
});
