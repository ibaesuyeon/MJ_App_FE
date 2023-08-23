import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import SearchBar from '../../Components/SearchBar';
import NoticeBtn from '../../Components/NoticeBtn';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { WHITE, GRAY } from '../../Colors';
import { useIsFocused } from '@react-navigation/native';

const NormalNoticeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('인문대공지');
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const isFocused = useIsFocused();

  const handleSearch = async (keyword) => {
    setLoading(true);
    try {
      let response;
      if (keyword.trim() === '') {
        response = await axios.get(
          `http://192.168.200.128:8080/notice/${encodeURIComponent(category)}`
        );
      } else {
        response = await axios.get(
          `http://192.168.200.128:8080/notice/${encodeURIComponent(
            category
          )}/search/${encodeURIComponent(keyword)}`
        );
      }
      printData(response);
    } catch (error) {
      console.error('Error:', error.message);
    }
    setLoading(false);
  };

  const printData = (response) => {
    const notices = response.data;
    const objects = [];
    // 데이터에서 객체를 추출하여 배열에 추가
    for (let i = 0; i < notices.list.length; i++) {
      const obj = {
        noticeId: notices.list[i].noticeId,
        num: notices.list[i].num,
        category: notices.list[i].category,
        title: notices.list[i].title,
        pubDate: notices.list[i].pubDate,
        link: notices.list[i].link,
      };
      objects.push(obj);
    }
    setData(objects);
  };

  const printNoData = () => {
    return (
      <View style={(styles.noDataContainer, styles.columnWrapper)}>
        <Text style={styles.noDataText}>
          검색어와 일치하는 검색 결과가 없습니다.
        </Text>
        <View style={{ marginTop: 10 }}>
          <View style={styles.noDataSubTextContainer}>
            <Text style={styles.noDataSubText}>· </Text>
            <Text style={styles.noDataSubText}>
              단어의 철자와 띄어쓰기가 정확한지 확인해주세요.
            </Text>
          </View>
          <View style={styles.noDataSubTextContainer}>
            <Text style={styles.noDataSubText}>· </Text>
            <Text style={styles.noDataSubText}>
              검색어의 단어 수를 줄이거나 다른 검색어를 검색해보세요.
            </Text>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    handleSearch(keyword);
  }, [keyword, isFocused]); //keyword가 변할 때마다

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <SearchBar onSearch={handleSearch} placeholder="공지사항 검색" />
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
            ListEmptyComponent={printNoData()} //검색결과가 없을 시
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
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: GRAY,
    marginTop: 20,
    marginBottom: 10,
  },
  noDataSubTextContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  noDataSubText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'semi-bold',
    color: GRAY,
  },
});
export default NormalNoticeScreen;
