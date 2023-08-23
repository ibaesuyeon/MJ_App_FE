import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Constants from 'expo-constants';
import { AuthRoutes } from '../Navigations/routes';

const UserScreen = () => {
  const navigation = useNavigation();
  // 사용자가 미리 지정한 정보
  const [campus, setCampus] = useState('');
  const [college, setCollege] = useState('');
  const [userId, setUserId] = useState('');
  const [major, setMajor] = useState('');
  const [grade, setGrade] = useState('');

  const handleEditAlerm = () => {

    navigation.navigate(AuthRoutes.ALERM);
  };
  // const handleEditKeyword = () => {

  //   navigation.navigate(AuthRoutes.ALERMKEYWORD);
  // };
  const handleEditProfile = () => {
    navigation.navigate(AuthRoutes.USER_EDIT);
  };

  const handleDeleteAccount = () => {
    axios.delete(`http://192.168.200.128:8080/user/user/deletion/${userId}`)
    .then(response => {
      console.log("삭제 성공");
    })
    .catch(error => {
      console.log(error);
      console.log("전공이름 불러오기 실패");
    })
    
  };


  const setMajorName = (value) => {
    axios.get(`http://192.168.200.128:8080/major/major/${value}`)
    .then(response => {
      setMajor(response.data.data.majorName);
    })
    .catch(error => {
      console.log(error);
      console.log("전공이름 불러오기 실패");
    })
    
  };

  useEffect( () => {
    axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
  .then(response => {
    console.log(response.data);

    setCampus(response.data.data.userCampusId);
    if(response.data.data.userCampusId=1){
      setCollege('인문캠퍼스');
    }else{
      setCollege('자연캠퍼스');
    }

    setMajorName(response.data.data.userCollegeId);
    setUserId(response.data.data.userId);
    setGrade(response.data.data.year);
  })
  .catch(error => {
    console.log(error);
  });
  },[])

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.editalermButton}
          onPress={handleEditAlerm}
        >
          <Text style={styles.editProfileText}>알람 설정</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.editalermButton}
          onPress={handleEditKeyword}
        >
          <Text style={styles.editProfileText}>알람 키워드 설정</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={handleEditProfile}
        >
          <Text style={styles.editProfileText}>사용자 정보 수정</Text>
        </TouchableOpacity>
      <View style={styles.box}>
      <Text style={styles.campusText}>명지대학교</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.campusText}>{college}</Text>
      </View>
      <View style={styles.box}>
      <Text  adjustsFontSizeToFit numberOfLines={1} style={styles.campusText}>{major }</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.campusText}>{grade}학년</Text>
      </View>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
      <TouchableOpacity
        style={styles.deleteAccountButton}
        onPress={handleDeleteAccount} 
      >
        <Text style={styles.deleteAccountText}>계정 삭제</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 80,

  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    top:hp('5%')
  },
  separatorContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  editalermButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    bottom:hp('8%'),
    right:wp('3%')
  },
  editProfileButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    bottom:hp('8%'),
    right:wp('3%')
  },
  editProfileText: {
    color: 'blue',
    fontSize: 18,
  },
  box: {
    backgroundColor: '#F8F8F8',
    padding: 16,
    marginBottom: 8,
    width : wp('80%'),
    borderRadius:10,
    marginHorizontal: 20
  },
  
  deleteAccountButton: {
    fles: 0.1,
    marginTop: 16,
    bottom:hp('10%')
  },
  deleteAccountText: {
    color: 'red',
    fontSize: 18,
    marginTop: hp('5%')
    
  },
  campusText:{
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default UserScreen;