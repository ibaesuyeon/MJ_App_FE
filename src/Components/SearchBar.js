import { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { MAIN, GRAY, BLACK } from '../Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon_FA from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [text, setText] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    onReset();
  }, [isFocused]);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText('');
  };
  const searchData = () => {
    onSearch(keyword);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={[styles.searchbar, styles.rowWrapper]}>
        <TextInput
          placeholder="공지사항 검색"
          placeholderTextColor={GRAY}
          autoCapitalize={'none'}
          autoCorrect={false}
          returnKeyType="done"
          width="94%"
          onChange={onChange}
          value={text}
          onChangeText={(input) => {
            setKeyword(input);
          }}
          onSubmitEditing={searchData}
        />
        <Icon_FA
          name="search"
          color={BLACK}
          size={18}
          style={[styles.logo, styles.header_right]}
          onPress={searchData} // 검색 아이콘을 누를 때 검색 실행
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

SearchBar.defaultProps = {
  onPress: '',
};
const styles = StyleSheet.create({
  searchbar: {
    width: wp('90%'),
    height: hp('5%'),
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: MAIN.LIGHT,
  },
  logo: {
    width: 20,
    height: 20,
  },
  rowWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
