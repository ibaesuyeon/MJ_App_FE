import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
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
        <Text style={styles.NoticeTitle}>{title}</Text>
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
});

export default NoticeBtn;
