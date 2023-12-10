import {Dimensions, StyleSheet} from 'react-native';
import {Fonts, colors} from '../../../utils';
export const StyleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contanerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  imageLogo: {
    width: 244,
    height: 50,
    alignSelf: 'center',
  },
  contentPertama: {
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 30,
    fontFamily: Fonts.primary[800],
    textAlign: 'center',
    color: colors.primary,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: Dimensions.get('window').width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
