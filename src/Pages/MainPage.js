import {
  Keyboard,
  StyleSheet,
  View,
  Platform,
  Text,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Image,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../Navigations/routes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Divider } from '@rneui/themed';
import { BLACK, GRAY } from '../Colors';
import MJ_logo from '../../assets/MJ_logo.png';
import three_horizontal_line from '../../assets/three_horizontal_line.png';
import user from '../../assets/user.png';

const MainPage = () => {
  return (
    <SafeAreaView>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={[styles.header, styles.rowWrapper]}>
            <Image
              source={three_horizontal_line}
              style={[styles.logo, styles.header_left]}
            />
            <Image source={MJ_logo} style={styles.logo} />
            <Text style={styles.header_title}>명지대학교</Text>
            <Image source={user} style={[styles.logo, styles.header_right]} />
          </View>
          <SearchBar></SearchBar>
          <Text style={styles.headLine1}>최근 공지사항</Text>
          <View style={[styles.contentBackground, styles.wideContent]}></View>
          <View style={styles.rowWrapper}>
            <View
              style={[styles.contentBackground, styles.mediumContent]}
            ></View>
            <View style={styles.columnWrapper}>
              <View
                style={[styles.contentBackground, styles.smallContent]}
              ></View>
              <View
                style={[styles.contentBackground, styles.smallContent]}
              ></View>
            </View>
          </View>
          <Divider />
          <View style={[styles.contentBackground, styles.menuContent]}></View>
          <Text style={styles.headLine2}>캠퍼스맵</Text>
          <View style={[styles.contentBackground, styles.mapContent]}></View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: wp('100%'),
    height: hp('7%'),
    borderBottomWidth: 1,
    borderBottomColor: GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_left: { right: wp('20%') },
  header_right: { left: wp('20%') },
  header_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headLine1: {
    right: wp('30%'),
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  headLine2: {
    right: wp('35%'),
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  contentBackground: {
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
  },
  wideContent: {
    width: wp('90%'),
    height: hp('10%'),
    marginVertical: 5,
  },
  mediumContent: {
    width: wp('44'),
    height: hp('15%'),
    marginVertical: 5,
    marginHorizontal: 5,
  },
  smallContent: {
    width: wp('44%'),
    height: hp('7%'),
    marginVertical: 5,
    marginHorizontal: 5,
  },
  menuContent: {
    width: wp('90%'),
    height: hp('15%'),
    marginVertical: 5,
  },
  mapContent: {
    width: wp('90%'),
    height: hp('25%'),
    marginVertical: 5,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  columnWrapper: {
    flexDirection: 'column',
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});

export default MainPage;
