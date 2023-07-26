import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../../Components/Button';
import RNPickerSelect from 'react-native-picker-select';
import Constants from 'expo-constants';

import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../../Navigations/routes';

import {CAMPUSITEM,SEOULMAJOR,YONGINMAJOR,SEOULMAJORHUMANITIES,SEOULMAJORSocialScience,SEOULMAJORManagement,
  SEOULMAJORLAW,SEOULMAJORICT,SEOULMAJORFUTURE,SEOULMAJORBANGMOK,YONGINMAJORNATURAL,YONGINMAJORTECH,YONGINMAJORARTPHY,
  YONGINMAJORARCHITECTURE,YONGINMAJORBANGMOK,YONGINMAJORINTER, YONGINMAJORICT} from '../../Components/major'

const WelCampusScreen = () => {

  const getDeviceInfo = () => {
    setUserId(Constants.installationId);

    // 기기 정보 출력하기
    console.log('deviceId:', Constants.installationId);

  };

  const [userId, setUserId] = useState('');
  const navigation = useNavigation();

  const [campusValue, setCampusValue] = useState('');
  const [marjorValue, setMajorValue] = useState('');
  const [detailMarjorValue, setDetailMajorValue] = useState('');

  const handleCampusChange  = (value) => {
    setCampusValue(value);
  };
  const handleMajorChange  = (value) => {
    setMajorValue(value);
  };
  const handleDetailMajorChange  = (value) => {
    setDetailMajorValue(value);
  };

  const saveUserInfofirst = async () => {
    try{
      const response = await axios.post('https://localhost:8080/user/user/register', {
        deviceId: userId,
        year: 0,
        userCampusId: campusValue,
        userCollegeId: marjorValue,
        userMajorId: detailMarjorValue,
        userUnivId: 1,
      }
      );
    }catch(e){
      console.log(e.response.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>전공을 알려주세요!</Text>
      <View>
        <View style={styles.selectedOptionView}>
          <Text style={styles.selectedOptionName}>캠퍼스</Text>
          <RNPickerSelect
          placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleCampusChange}
            items={CAMPUSITEM}
            value={campusValue}
          />
        </View>

        <View style={styles.selectedOptionView}>
          <Text style={styles.selectedOptionName}>단과대</Text>
          {campusValue=='2'? (
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleMajorChange}
            items={YONGINMAJOR}
            value={marjorValue}
          />
          ):(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleMajorChange}
            items={SEOULMAJOR}
            value={marjorValue}
          />
          )}
        </View>

        <View style={styles.selectedOptionView}>
          <Text style={styles.selectedOptionName}>학과</Text>
          {marjorValue=='1'? (
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={SEOULMAJORHUMANITIES}
            value={detailMarjorValue}
          />
          ):marjorValue=='2'?(
            <RNPickerSelect
            placeholder={""}
              style={pickerSelectStyles}
              onValueChange={handleDetailMajorChange}
              items={SEOULMAJORSocialScience}
              value={detailMarjorValue}
            />
          ):marjorValue=='3'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={SEOULMAJORManagement}
            value={detailMarjorValue}
          />
          ):marjorValue=='4'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={SEOULMAJORLAW}
            value={detailMarjorValue}
          />
          ):marjorValue=='5'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={SEOULMAJORICT}
            value={detailMarjorValue}
          />
          ):marjorValue=='13'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={SEOULMAJORBANGMOK}
            value={detailMarjorValue}
          />
          ):marjorValue=='6'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={SEOULMAJORFUTURE}
            value={detailMarjorValue}
          />
          ):marjorValue=='7'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORNATURAL}
            value={detailMarjorValue}
          />
          ):marjorValue=='8'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORTECH}
            value={detailMarjorValue}
          />
          ):marjorValue=='9'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORARTPHY}
            value={detailMarjorValue}
          />
          ):marjorValue=='10'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORARCHITECTURE}
            value={detailMarjorValue}
          />
          ):marjorValue=='11'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORICT}
            value={detailMarjorValue}
          />
          ):marjorValue=='12'?(
            <RNPickerSelect
            placeholder={""}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORINTER}
            value={detailMarjorValue}
          />
          ):(
            <RNPickerSelect
            placeholder={"14"}
            style={pickerSelectStyles}
            onValueChange={handleDetailMajorChange}
            items={YONGINMAJORBANGMOK}
            value={detailMarjorValue}
          />
          )}
        </View>

      </View>
      <StatusBar style="auto" />
      <Button 
      title={'다음'}
      types={'MainButton'}
      onPress={() => {saveUserInfofirst, navigation.navigate(AuthRoutes.WEL_SYear)}}
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
    fontSize: 30,
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
    marginVertical: 15,

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

export default WelCampusScreen;
