import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { GRAY } from '../Colors';
import * as Linking from 'expo-linking';

const NoticeBtn = ({ title, pubDate, link }) => {
  const handleOpenURL = () => {
    Linking.openURL(link);
  };
  return (
    <Pressable style={styles.container} onPress={() => handleOpenURL()}>
      <View style={[styles.contentBackground, styles.wideContent]}>
        <Text style={[styles.container, styles.NoticeTitle]}>{title}</Text>
        <Text style={styles.NoticeDate}>{pubDate}</Text>
      </View>
    </Pressable>
  );
};
// Button.propTypes = {
//   title: PropTypes.string.isRequired,
//   onPress: PropTypes.func.isRequired,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'WHITE',
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
    alignItems: 'left',
  },
  NoticeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  NoticeDate: {
    fontSize: 14,
    color: GRAY,
    left: wp('69%'),
    bottom: hp('0.5%'),
  },
});

export default NoticeBtn;
