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
import SearchBar from '../Components/SearchBar';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Divider } from '@rneui/themed';
import { BLACK, GRAY } from '../Colors';
import MJ_logo from '../../assets/MJ_logo.png';
import Icon_Ft from 'react-native-vector-icons/Feather';

const MainScreen = () => {
  // function MainScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SearchBar placeholder="공지사항 검색"></SearchBar>
          <View style={styles.rowWrapper}>
            <Image source={MJ_logo} style={styles.logo} />
            <Text style={styles.headLine1}>명지대학교 최근 공지사항</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text>
              최근 공지사항 내용이 들어가며 해당 공지로 연결되는 버튼의 기능을
              합니다
            </Text>
          </View>
          <View style={styles.rowWrapper}>
            <View style={[styles.contentBackground, styles.mediumContent]}>
              <Text style={styles.contentTitle}>명지대학교 공지사항</Text>
            </View>
            <View style={styles.columnWrapper}>
              <View style={[styles.contentBackground, styles.smallContent]}>
                <Text style={styles.contentTitle}>단과대별 공지사항 </Text>
              </View>
              <View style={[styles.contentBackground, styles.smallContent]}>
                <Text style={styles.contentTitle}>마이아이캡 공지사항</Text>
              </View>
            </View>
          </View>
          <Divider />
          <View style={[styles.contentBackground, styles.menuContent]}></View>
          <Text style={styles.headLine2}>캠퍼스맵</Text>
          <View style={[styles.contentBackground, styles.mapContent]}></View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    right: wp('14%'),
    marginHorizontal: 5,
  },
  headLine1: {
    right: wp('15%'),
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediumContent: {
    width: wp('44'),
    height: hp('15%'),
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallContent: {
    width: wp('44%'),
    height: hp('7%'),
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContent: {
    width: wp('90%'),
    height: hp('15%'),
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContent: {
    width: wp('90%'),
    height: hp('24%'),
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  columnWrapper: {
    flexDirection: 'column',
  },
});

export default MainScreen;
