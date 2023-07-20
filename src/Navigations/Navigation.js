import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Constants from 'expo-constants';

const Navigation = () => {

  const getDeviceInfo = () => {
    setUserId(Constants.installationId);

    // 기기 정보 출력하기
    console.log('deviceId:', Constants.installationId);

  };

  const [isId, setIsId] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect( () => {
    getDeviceInfo();

    axios.get(`http://localhost:8000/user/user/device/${userId}`)
  .then(response => {
    console.log(response.data);
    
    setIsId(true);
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

  return (
    <NavigationContainer>
      {/* <MainStack /> */}
       { isId ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
