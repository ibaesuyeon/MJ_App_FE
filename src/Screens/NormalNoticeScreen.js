import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Keyboard,
  StyleSheet,
  View,
  Platform,
  Text,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import SearchBar from '../Components/SearchBar';
import NoticeBtn from '../Components/NoticeBtn';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Divider } from '@rneui/themed';
import { BLACK, WHITE, GRAY } from '../Colors';
import MJ_logo from '../../assets/MJ_logo.png';
import Icon_Ft from 'react-native-vector-icons/Feather';

const NormalNoticeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('일반공지');
  const [data, setData] = useState([]);
  const [title, setTitle] = useState();
  const [pubDate, setPubDate] = useState();
  const [link, setLink] = useState();

  useEffect(() => {
    axios
      .get(`http://192.168.123.109:8080/notice/${category}`)
      .then((response) => {
        console.log(response.data);
        // setNotice(response.data);

        const data = response.data;
        const objects = [];

        // 데이터에서 객체를 추출하여 배열에 추가
        for (let i = 0; i < data.list.length; i++) {
          const obj = {
            noticeId: data.list[i].noticeId,
            num: data.list[i].num,
            category: data.list[i].category,
            title: data.list[i].title,
            pubDate: data.list[i].pubDate,
            link: data.list[i].link,
          };
          console.log(obj);
          objects.push(obj);
        }
        setData(objects);
        // 배열에 저장된 객체를 출력
        // console.log(objects);
      })
      .catch((error) => {
        if (error.response) {
          // 서버 응답이 도착한 경우
          console.log('error data:', error.response.data); // 서버가 응답한 데이터
          console.log('error code:', error.response.status); // 응답 상태 코드
        } else if (error.request) {
          // 서버 응답이 없는 경우 (네트워크 오류)
          console.log('Network Error:', error.message);
        } else {
          // 그 외의 오류
          console.log('Error:', error.message);
        }
      });
  }, []);

  // const getData = async () => {
  //   if (data.length >= 8 && !notNextData) {
  //     setLoading(true);
  //     await DataFetch();
  //     setLoading(false);
  //   }
  // };
  // const onEndReached = () => {
  //   if (!loading) {
  //     getData();
  //   }
  // };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SearchBar placeholder="공지사항 검색"></SearchBar>
          <FlatList
            // onEndReached={onEndReached}
            onEndReachedThreshold={0.6}
            ListFooterComponent={loading && <ActivityIndicator />}
            data={data}
            keyExtractor={(_) => _.noticeId}
            renderItem={({ item }) => {
              const { title, pubDate, link } = item;
              return <NoticeBtn title={title} pubDate={pubDate} link={link} />;
            }}
          />
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
    backgroundColor: WHITE,
  },
  contentBackground: {
    backgroundColor: '#f6f6f6',
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
