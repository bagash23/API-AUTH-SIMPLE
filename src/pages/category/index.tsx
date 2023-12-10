import React, {useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCategory} from '../../domain/category/useCategory';
import MainLayout from '../../components/Layout';
import {Fonts, colors} from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ModalAddData, ModalLoading} from '../../components';
import ButtonComponent from '../../components/Button';
import Modal from 'react-native-modal';

interface KategoriItem {
  id: number;
  category: string;
}

const Category = () => {
  const {
    listResponseCategory,
    allCategory,
    removeCategory,
    editCategory,
    loading,
  } = useCategory();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openCreateData, setOpenCreateData] = useState<boolean>(false);
  const [idData, setIdData] = useState<number>(0);
  const [updateText, setUpdateText] = useState({
    category: '',
  });
  const {height, width} = Dimensions.get('screen');
  useEffect(() => {
    allCategory();
  }, []);

  const handleRemoveCategory = (id: number) => {
    removeCategory(id);
  };

  const handleEditCategory = () => {
    editCategory(idData, updateText.category);
    setOpenModal(false);
  };

  const renderItem = (item: KategoriItem) => {
    return (
      <View
        style={{
          margin: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 12,
            color: colors.black1,
            fontFamily: Fonts.primary[600],
          }}>
          {item.category}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
          <AntDesign
            name="edit"
            color={colors.primary}
            size={15}
            onPress={() => {
              setOpenModal(true),
                setIdData(item.id),
                setUpdateText(item.category);
            }}
          />
          <AntDesign
            name="delete"
            color={colors.red}
            size={15}
            onPress={() => handleRemoveCategory(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MainLayout headShow={false} title="Category">
        <View style={styles.contentJumlah}>
          <Text style={styles.txtJumlah}>Jumlah Kategori</Text>
          <Text style={styles.txtAngkaJumlah}>
            {listResponseCategory?.data?.length}
          </Text>
        </View>
        <FlatList
          data={listResponseCategory?.data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity
          style={styles.btnKategori}
          onPress={() => setOpenCreateData(true)}>
          <Ionicons name="add" size={12} color={colors.white} />
        </TouchableOpacity>
      </MainLayout>
      {loading && <ModalLoading />}
      <ModalAddData
        open={openCreateData}
        close={() => setOpenCreateData(false)}
      />
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
                Edit Data
              </Text>
              <AntDesign
                name="close"
                color={colors.black1}
                size={15}
                onPress={() => setOpenModal(false)}
              />
            </View>
            <TextInput
              value={updateText}
              onChangeText={e => setUpdateText({...updateText, category: e})}
              style={{
                borderWidth: 1,
                paddingHorizontal: 12,
                marginVertical: 12,
                borderRadius: 5,
              }}
            />
            <ButtonComponent
              title={'Simpan Edit'}
              onPress={() => handleEditCategory()}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Category;
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
});
