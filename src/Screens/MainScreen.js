import {
  Keyboard,
  StyleSheet,
  View,
  Platform,
  Text,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { useEffect, useState } from 'react';
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
import { AuthRoutes } from '../Navigations/routes';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import Constants from 'expo-constants';
import NoticeBtn from '../Components/NoticeBtn';

const MainScreen = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [data, setData] = useState(0);
  const [recentTitle, setRecentTitle] = useState('');
  const [recentPubDate, setRecentPubDate] = useState('');
  const [recentLink, setRecentLink] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    axios
      .get(
        `http://192.168.123.109:8080/user/user/device/${Constants.installationId}`
      )
      .then((response) => {
        console.log(response.data);

        setUserId(response.data.data.userId);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(userId);
    axios
      .get(`http://192.168.123.109:8080/myCourse/grade/${userId}/all`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`http://192.168.123.109:8080/notice/recent`).then((response) => {
      setRecentTitle(response.data.data.title);
      setRecentPubDate(response.data.data.pubDate);
      setRecentLink(response.data.data.link);
    });
  }, [isFocused]);

  const handleOpenURL = () => {
    const url = 'https://www.mju.ac.kr/mjukr/262/subview.do';
    Linking.openURL(url);
  };

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
          <NoticeBtn
            title={recentTitle}
            pubDate={recentPubDate}
            link={recentLink}
          />
          <View style={styles.rowWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate(AuthRoutes.NORMALNOTICE)}
            >
              <View style={[styles.contentBackground, styles.mediumContent]}>
                <Text style={styles.contentTitle}>명지대학교 공지사항</Text>
              </View>
            </TouchableOpacity>
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
          <Text style={styles.headLine2}>이수학점</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(AuthRoutes.CREDIT)}
          >
            <View style={[styles.contentBackground, styles.wideContent]}>
              <Text style={styles.majorMain}>학점 : {data}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.headLine2}>학사일정</Text>
          <TouchableOpacity onPress={handleOpenURL}>
            <View style={[styles.contentBackground, styles.mapContent]}>
              <Text style={styles.contentTitle}>
                추후 업데이트 예정입니다..!
              </Text>
              <Text style={styles.contentTitle}>
                현재 학교 사이트 이동 가능합니다
              </Text>
            </View>
          </TouchableOpacity>
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
  majorMain: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  majorsub: {
    fontSize: 10,
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
