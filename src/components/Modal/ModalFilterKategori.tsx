import React, {useEffect} from 'react';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Fonts, colors} from '../../utils';
import GapComponent from '../Gap';
import {useKategoriState} from '../../entites/KategoriGlobalState';

interface ModalProps {
  open: boolean;
  close: () => void;
  title: string;
}

interface KategoriItem {
  id: number;
  category: string;
  data: any;
}

const ModalFilterKategori = ({open, close, title, data}: ModalProps) => {
  const {height, width} = Dimensions.get('screen');
  const {setDataKategri, dataKategri} = useKategoriState();

  const renderItem = (item: KategoriItem) => {
    return (
      <TouchableOpacity
        style={{
          paddingVertical: 5,
          backgroundColor: dataKategri === item.category ? colors.primary : 'transparent',
          paddingHorizontal: dataKategri === item.category ? 5 : 0
        }}
        onPress={() => {
          setDataKategri(item.category),          
          close()
        }}>
        <Text
          style={{
            color: dataKategri === item.category ? colors.white : colors.black1,
          }}>
          {item.category}
        </Text>
      </TouchableOpacity>
    );
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
        <View style={styles.RowHeaders}>
          <Text
            style={{
              fontSize: 15,
              color: colors.black1,
              fontFamily: Fonts.primary[800],
            }}>
            {title}
          </Text>
          <AntDesign
            name="close"
            size={15}
            onPress={() => close()}
            color={colors.black1}
          />
        </View>
        <GapComponent height={20} />
        <FlatList
          data={data}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </Modal>
  );
};

export default ModalFilterKategori;
export const styles = StyleSheet.create({
  ContainerCards: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  ContentCards: {
    padding: 15,
  },
  RowHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
