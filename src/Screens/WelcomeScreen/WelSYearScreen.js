import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import RNPickerSelect from 'react-native-picker-select';

import Constants from 'expo-constants';

import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../../Navigations/routes';

const WelSYearScreen = () => {

  const [userId, setUserId] = useState('');
  const [userdbId, setUserdbId] = useState('');

  const getDeviceInfo = () => {
    setUserId(Constants.installationId);

    // 기기 정보 출력하기
    console.log('deviceId:', Constants.installationId);

  };

  useEffect( () => {
    getDeviceInfo();

    axios.get(`http://localhost:8000/user/user/device/${userId}`)
  .then(response => {
    console.log(response.data);
    setUserdbId(response.data.userId);
  })
  .catch(error => {
    if (error.response) {
      // 서버 응답이 도착한 경우
      console.log(error.response.data); // 서버가 응답한 데이터
      console.log(error.response.status); // 응답 상태 코드
    } else if (error.request) {
      // 서버 응답이 없는 경우 (네트워크 오류)
      console.log('Network Error:', error.message);
    } else {
      // 그 외의 오류
      console.log('Error:', error.message);
    }
  });
  },[])

  const navigation = useNavigation();
  const [yearValue, setYearValue] = useState('');

  const handleYearChange  = (value) => {
    setYearValue(value);
  };

  const saveUserInfo = async () => {

    try{
      const response = await axios.post(`http://localhost:8080/user/user/modifyYear/${userdbId}`, {
        userId: userdbId,
        year: yearValue,
      }
      );
    }catch(e){
      console.log(e.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>몇 학년이신가요?</Text>
      <StatusBar style="auto" />
      <View style={styles.selectedOptionView}>
          <Text style={styles.selectedOptionName}>캠퍼스</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={handleYearChange}
            items={[
              { label: '1학년', value: '1학년' },
              { label: '2학년', value: '2학년' },
              { label: '3학년', value: '3학년' },
              { label: '4학년', value: '4학년' },
              { label: '4학년 이상', value: '1학년 이상' },
            ]}
            value={yearValue}
          />
        </View>
      <Button 
      title={'완료'}
      types={'MainButton'}
      onPress={() => {saveUserInfo, navigation.navigate(AuthRoutes.WEL_End)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: '#005eb8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    zIndex: 1,
    color: 'white',
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 50,
    top: -100,
  },
  selectedOptionView: {
    zIndex: 1,
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 50,
    width: 300,
    height: 40,
    top: -20,
    margin: 'auto',
    flexDirection: 'row',
    marginVertical: 10,

  },
  selectedOptionName: {
    color: 'white',
    fontSize: 20,
    margin: 'auto',
    marginVertical: 10,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: '700',
    width: 80,

  },

});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: 'white',
    width: 200,
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // To ensure the text is never behind the icon
  },
  inputAndroid: {
    backgroundColor: 'white',
    width: 250,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // To ensure the text is never behind the icon
  },
});

export default WelSYearScreen;
