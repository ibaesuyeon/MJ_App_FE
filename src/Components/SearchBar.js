import { StyleSheet, TextInput, View, Image } from 'react-native';
import { MAIN, GRAY } from '../Colors';
import PropTypes from 'prop-types';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import search_icon from '../../assets/search_icon.png';

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
      <Image source={search_icon} style={styles.logo} />
    </View>
  );
};
SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
SearchBar.defaultProps = {
  onPress: '',
};
const styles = StyleSheet.create({
  searchbar: {
    width: '100%',
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
  },
});

export default SearchBar;
