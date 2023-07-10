import { StyleSheet, TextInput, View, Image } from 'react-native';
import { MAIN, GRAY, BLACK } from '../Colors';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import search_icon from '../../assets/search_icon.png';
import Icon_FA from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style={[styles.searchbar, styles.rowWrapper]}>
      <TextInput
        placeholder="공지사항 검색"
        placeholderTextColor={GRAY}
        autoCapitalize={'none'}
        autoCorrect={false}
        width="94%"
      />
      <Icon_FA
        name="search"
        color={BLACK}
        size={18}
        style={[styles.logo, styles.header_right]}
      />
    </View>
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
