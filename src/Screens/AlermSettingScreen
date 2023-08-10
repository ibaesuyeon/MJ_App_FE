import {
  Keyboard,
  StyleSheet,
  View,
  Platform,
  Text,
  KeyboardAvoidingView,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AlermSettingScreen = () => {
  const [isOnNormal, setIsOnNormal] = useState(false);
  const [isOnFestival, setIsOnFestival] = useState(false);
  const [isOnSoc, setIsOnSoc] = useState(false);
  const [isOnLaw, setIsOnLaw] = useState(false);
  const [isOnMajor, setIsOnMajor] = useState(false);

  const handleToggleNormal = () => {
    setIsOnNormal(!isOnNormal);
  };
  const handleToggleFestival = () => {
    setIsOnFestival(!isOnFestival);
  };
  const handleToggleSoc = () => {
    setIsOnSoc(!isOnSoc);
  };
  const handleToggleLaw = () => {
    setIsOnLaw(!isOnLaw);
  };
  const handleToggleMajor = () => {
    setIsOnMajor(!isOnMajor);
  };

  // function CreditScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.CurrentCreditTitle}>일반공지</Text>
            <Text style={styles.Score}>{isOnNormal ? 'ON' : 'OFF'}</Text>
            <TouchableOpacity onPress={handleToggleNormal} style={styles.button}>
              <Text style={styles.buttonText}>Toggle</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.CurrentCreditTitle}>행사공지</Text>
            <Text style={styles.Score}>{isOnFestival ? 'ON' : 'OFF'}</Text>
            <TouchableOpacity onPress={handleToggleFestival} style={styles.button}>
              <Text style={styles.buttonText}>Toggle</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.CurrentCreditTitle}>학사공지</Text>
            <Text style={styles.Score}>{isOnSoc ? 'ON' : 'OFF'}</Text>
            <TouchableOpacity onPress={handleToggleSoc} style={styles.button}>
              <Text style={styles.buttonText}>Toggle</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.CurrentCreditTitle}>장학/학자금공지</Text>
            <Text style={styles.Score}>{isOnLaw ? 'ON' : 'OFF'}</Text>
            <TouchableOpacity onPress={handleToggleLaw} style={styles.button}>
              <Text style={styles.buttonText}>Toggle</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.CurrentCreditTitle}>단과대공지</Text>
            <Text style={styles.Score}>{isOnMajor ? 'ON' : 'OFF'}</Text>
            <TouchableOpacity onPress={handleToggleMajor} style={styles.button}>
              <Text style={styles.buttonText}>Toggle</Text>
            </TouchableOpacity>
          </View>
          
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
  contentBackground: {
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
  },
  totalCredit: {
    top: hp('2%'),
    width: wp('90%'),
    height: hp('8%'),
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CurrentCreditTitle: {
    right: wp('11%'),
    fontSize: 20,
    fontWeight: '700',
    width: 100,
  },
  statusText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#071D49',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    left: wp('11%'),
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  Score: {
    left: wp('9%'),
    fontSize: 18,
    width: 40,
    fontWeight: '700',
  },
});
export default AlermSettingScreen;
