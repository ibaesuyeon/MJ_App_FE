import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import Icon_Ft from 'react-native-vector-icons/Feather';
import { BLACK, GRAY } from '../Colors';
import { AuthRoutes } from '../Navigations/routes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const HeaderRightButton = () => {
    const navigation = useNavigation();

  // if(!canGoBack) {
  //     return (

  //     );
  // }
  return (
    <Pressable>
      <Icon_Ft
        name="user"
        color={BLACK}
        size={30}
        style={[styles.logo, styles.header_right]}
        onPress={() => {
          navigation.navigate(AuthRoutes.USER)
          console.log('HeaderRightButton - user');
        }}
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
export default HeaderRightButton;
