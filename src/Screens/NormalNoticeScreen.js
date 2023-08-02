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

const NormalNoticeScreen = () => {
  // function NormalNoticeScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SearchBar placeholder="공지사항 검색"></SearchBar>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <View style={[styles.contentBackground, styles.wideContent]}>
            <Text style={styles.NoticeTitle}>
              명지대학교 SW인재육성사업단 기간제 전담직원 채용
              공고ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㄹ
            </Text>
            <Text style={styles.NoticeDate}>2023-06-27</Text>
          </View>
          <Text>~~페이지네이션이 들어갈자리~~</Text>
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
    backgroundColor: 'WHITE',
  },
  contentBackground: {
    backgroundColor: '#f6f6f6',
    // backgroundColor: 'WHITE',
    borderRadius: 10,
  },
  wideContent: {
    width: wp('90%'),
    height: hp('9%'),
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NoticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  NoticeDate: {
    fontSize: 14,
    color: GRAY,
    left: wp('33%'),
    bottom: hp('0.5%'),
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  columnWrapper: {
    flexDirection: 'column',
  },
});
export default NormalNoticeScreen;
