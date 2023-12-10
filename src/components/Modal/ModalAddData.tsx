import React, {useState} from 'react';
import {View, Text, Dimensions, StyleSheet, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fonts, colors} from '../../utils';
import ButtonComponent from '../Button';
import {useCategory} from '../../domain/category/useCategory';

interface ModalProps {
  open: boolean;
  close: () => void;
}

const ModalAddData = ({open, close}: ModalProps) => {
  const {height, width} = Dimensions.get('screen');
  const {createCategory} = useCategory();
  const [createData, setCreateData] = useState({
    category: '',
  });
  const handleAdd = () => {
    createCategory(createData.category);
    close();
  };
  return (
    <Modal
      accessible={true}
      animationIn="slideInUp"
      isVisible={open}
      onBackdropPress={() => close()}
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
            onPress={() => close()}
          />
        </View>
        <TextInput
          placeholder="Tambah Data"
          value={createData}
          onChangeText={e => setCreateData({category: e})}
          style={{
            borderWidth: 1,
            paddingHorizontal: 12,
            marginVertical: 12,
            borderRadius: 5,
          }}
        />
        <ButtonComponent
          title={'Tambah Data'}
          onPress={() =>
            createData.category.length > 0 ? handleAdd() : undefined
          }
        />
      </View>
    </Modal>
  );
};

export default ModalAddData;
export const styles = StyleSheet.create({
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
