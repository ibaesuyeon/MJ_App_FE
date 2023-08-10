import {
  Keyboard,
  StyleSheet,
  View,
  Platform,
  Text,
  KeyboardAvoidingView,
  Pressable,
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
import { BLACK, GRAY } from '../Colors';
import CreditTable from '../Components/CreditTable';
import { AuthRoutes } from '../Navigations/routes';


const CreditScreen = () => {
  const navigation = useNavigation();

  const [usermajorId, setUsermajorId] = useState('');

  useEffect( () => {
    axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
  .then(response => {
    console.log(response.data);
    console.log(response.data.data.userMajorId);
    setUsermajorId(response.data.data.userMajorId);
  })
  .catch(error => {
    console.log(error);
  });
  
  },[])
  // function CreditScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          
          <View style={[styles.contentBackground, styles.CreditTable]}>
            <Text style={styles.tableTitle}>이수 학점 내역</Text>
            <CreditTable usermajorId={usermajorId} />
          </View>
          <View
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.ScoreTitle}>전체 평점</Text>
            <Text style={styles.Score}>3.37/4.5</Text>
          </View>
          <View
            onPress={() => navigation.navigate(AuthRoutes.USERTIMETABLE)}
            style={[
              styles.contentBackground,
              styles.totalCredit,
              styles.rowWrapper,
            ]}
          >
            <Text style={styles.CurrentCreditTitle}>시간표 체크하기</Text>
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
    right: wp('22%'),
    fontSize: 20,
    fontWeight: '700',
  },
  ScoreTitle: {
    right: wp('21%'),
    fontSize: 20,
    fontWeight: '700',
  },
  CurrentCredit: {
    left: wp('21%'),
    fontSize: 20,
    fontWeight: '700',
  },
  Score: {
    left: wp('20%'),
    fontSize: 20,
    fontWeight: '700',
  },
  CreditTable: {
    top: hp('2%'),
    width: wp('90%'),
    height: hp('57.5%'),
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: hp('2%'),
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  columnWrapper: {
    flexDirection: 'column',
  },
});
export default CreditScreen;
