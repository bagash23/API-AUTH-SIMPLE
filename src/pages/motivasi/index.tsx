import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts, colors} from '../../utils';
import MainLayout from '../../components/Layout';
import {useMotivasi} from '../../domain/motivasi/useMotivasi';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '../../components/Button';
import {ModalFilterKategori} from '../../components';
import {useCategory} from '../../domain/category/useCategory';
import {useKategoriState} from '../../entites/KategoriGlobalState';
import GapComponent from '../../components/Gap';

interface MotivasiItem {
  id: number;
  category: string;
  created_at: string;
  motivator: string;
  quotes: string;
  updated_at: string;
}

interface KategoriItem {
  id: number;
  category: string;
}

const Motivasi = () => {
  const {listResponseAllMotivasi, allMotivasi, createMotivasi} = useMotivasi();
  const {listResponseCategory} = useCategory();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalCategory, setOpenModalCategory] = useState<boolean>(false);
  const {height, width} = Dimensions.get('screen');
  const [selectedKategori, setSelectedKategori] = useState<string>('');
  const [formData, setFormData] = useState({
    motivator: '',    
    quotes: '',
  });
  useEffect(() => {
    allMotivasi();
  }, []);
  const handleStateMotivasi = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreated = () => {
    createMotivasi(formData.motivator, selectedKategori, formData.quotes);    
    setOpenModal(false);
  };

  const renderItem = (item: MotivasiItem) => {
    return (
      <View
        style={{
          margin: 20,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: colors.black1,
            fontFamily: Fonts.primary[600],
          }}>
          {item.category} - {item.motivator}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontFamily: Fonts.primary[400],
            color: colors.black1,
          }}>
          {item.quotes}
        </Text>
      </View>
    );
  };

  const renderItemKategori = (item: KategoriItem) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 5,
          backgroundColor:
            selectedKategori === item.category ? colors.primary : 'transparent',
          paddingHorizontal: selectedKategori === item.category ? 5 : 0,
        }}
        onPress={() => {
          setSelectedKategori(item.category), setOpenModalCategory(false);
        }}>
        <Text
          style={{
            color:
              selectedKategori === item.category ? colors.white : colors.black1,
          }}>
          {item.category}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <MainLayout headShow={false} title="Motivasi">
        <View style={styles.contentJumlah}>
          <Text style={styles.txtJumlah}>Jumlah Motivasi</Text>
          <Text style={styles.txtAngkaJumlah}>
            {listResponseAllMotivasi?.data?.length}
          </Text>
        </View>
        <FlatList
          data={listResponseAllMotivasi?.data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity
          style={styles.btnKategori}
          onPress={() => setOpenModal(true)}>
          <Ionicons name="add" size={12} color={colors.white} />
        </TouchableOpacity>
      </MainLayout>
      {openModal && (
        <Modal
          accessible={true}
          animationIn="slideInUp"
          isVisible={openModal}
          onBackdropPress={() => setOpenModal(false)}
          deviceWidth={width}
          deviceHeight={height}
          style={styles.ContainerCards}>
          <View style={styles.ContentCards}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.black1,
                  fontFamily: Fonts.primary[700],
                }}>
                Buat Data Baru
              </Text>
              <AntDesign
                name="close"
                color={colors.black1}
                size={15}
                onPress={() => setOpenModal(false)}
              />
            </View>
            <TextInput
              placeholder="Motivator"
              value={formData}
              onChangeText={e => handleStateMotivasi('motivator', e)}
              style={{
                borderWidth: 1,
                paddingHorizontal: 12,
                marginVertical: 12,
                borderRadius: 5,
              }}
            />
            <TouchableOpacity
              style={{
                borderWidth: 1,
                paddingHorizontal: 12,
                marginVertical: 12,
                borderRadius: 5,
                paddingVertical: 15,
              }}
              onPress={() => setOpenModalCategory(true)}>
              <Text>
                {selectedKategori.length > 0
                  ? selectedKategori
                  : 'Pilih Kategori'}
              </Text>
            </TouchableOpacity>
            <TextInput
              placeholder="Quotes"
              value={formData}
              multiline
              numberOfLines={4}
              onChangeText={e => handleStateMotivasi('quotes', e)}
              style={{
                borderWidth: 1,
                paddingHorizontal: 12,
                paddingTop: 10,
                marginVertical: 12,
                borderRadius: 5,
                height: 120,
                textAlignVertical: 'top',
              }}
            />

            <ButtonComponent
              title={'Tambah Data'}
              onPress={() => handleCreated()}
            />
          </View>
        </Modal>
      )}
      {openModalCategory && (
        <Modal
          accessible={true}
          animationIn="slideInUp"
          isVisible={openModalCategory}
          onBackdropPress={() => setOpenModalCategory(false)}
          deviceWidth={width}
          deviceHeight={height}
          style={styles.ContainerCardsKategori}>
          <View style={styles.ContentCardsKategori}>
            <View style={styles.RowHeaders}>
              <Text
                style={{
                  fontSize: 15,
                  color: colors.black1,
                  fontFamily: Fonts.primary[800],
                }}>
                Pilih Kategori
              </Text>
              <AntDesign
                name="close"
                size={15}
                onPress={() => setOpenModalCategory(false)}
                color={colors.black1}
              />
            </View>
            <GapComponent height={20} />
            <FlatList
              data={listResponseCategory.data}
              renderItem={({item}) => renderItemKategori(item)}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Motivasi;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentJumlah: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    gap: 10,
    padding: 12,
  },
  txtJumlah: {
    fontSize: 12,
    color: colors.grey,
    fontFamily: Fonts.primary[400],
  },
  txtAngkaJumlah: {
    fontSize: 12,
    color: colors.black1,
    fontFamily: Fonts.primary[600],
  },
  btnKategori: {
    backgroundColor: colors.grey,
    padding: 12,
    position: 'absolute',
    borderRadius: 200,
    bottom: 20,
    right: 20,
  },
  ContainerCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContentCards: {
    margin: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    width: '100%',
  },
  ContainerCardsKategori: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  ContentCardsKategori: {
    padding: 15,
  },
  RowHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
