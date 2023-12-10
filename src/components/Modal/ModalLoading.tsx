import React from 'react';
import { ActivityIndicator, Modal, SafeAreaView } from 'react-native';

const ModalLoading = () => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={true}
      statusBarTranslucent={true}>
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(0, 0, 0,0.3)',

          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="small" color="#0000ff" />
      </SafeAreaView>
    </Modal>
  );
};

export default ModalLoading;
