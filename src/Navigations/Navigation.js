import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Constants from 'expo-constants';

const Navigation = () => {

  const [isId, setIsId] = useState(false);
  const [userId, setUserId] = useState('');

  const getDeviceInfo = () => {
    setUserId(Constants.installationId);

    // 기기 정보 출력하기
    console.log('deviceId:', Constants.installationId);

  };

  useEffect( () => {
    getDeviceInfo();
    console.log(userId);
    axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
  .then(response => {
    console.log(response.data);
  
    setIsId(true);
  })
  .catch(error => {
    if (error.response) {
      // 서버 응답이 있는 경우 (오류 응답)
      console.log(error);
      console.log('Response Data:', error.response.data);
      console.log('Response Status:', error.response.status);
      console.log('Response Headers:', error.response.headers);
    } else if (error.request) {
      // 서버 응답이 없는 경우 (요청 오류)
      console.log('Request Error:', error.request);
    } else {
      // 기타 오류
      console.log('Error Message:', error.message);
    }
  });
  },[])

  return (
    <NavigationContainer>
      {/* <MainStack /> */}
       { isId ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
