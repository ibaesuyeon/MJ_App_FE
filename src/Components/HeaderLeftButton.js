import { StyleSheet, Pressable } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Icon_Ft from 'react-native-vector-icons/Feather';
import { BLACK, GRAY } from '../Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const HeaderLeftButton = ({canGoBack}) => {
const HeaderLeftButton = () => {
  const navigation = useNavigation();
  // if(!canGoBack) {
  //     return (

  //     );
  // }
  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Icon_Ft
        name="menu"
        color={BLACK}
        size={30}
        style={[styles.logo, styles.header_left]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});
export default HeaderLeftButton;
