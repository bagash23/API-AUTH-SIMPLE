import EncryptedStorage from 'react-native-encrypted-storage';

export const StoreDataValue = async ({ key, value } : {key: string, value: any}) => {
    try {
        await EncryptedStorage.setItem(key, value)
    } catch (error) {
        console.log(error)
    }
}


export const GetDataValue = async ({ key } : {key: string}) => {
    try {

        await EncryptedStorage.getItem(key)
        
    } catch (error) {
        console.log(error)
    }
};

export const RemoveDataValue = async ({ key } : {key: string}) => {
    try {
        await EncryptedStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}