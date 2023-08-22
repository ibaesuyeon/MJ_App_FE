import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

import Constants from 'expo-constants';

import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../../Navigations/routes';

const WelSYearScreen = () => {

  const [userdbId, setUserdbId] = useState('');

  const navigation = useNavigation();
  const [yearValue, setYearValue] = useState('');

  const handleYearChange  = (value) => {
    setYearValue(value);
  };

  useEffect( () => {
    axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
  .then(response => {
    console.log(response.data);
    console.log(response.data.data.userId);
    setUserdbId(response.data.data.userId);
    console.log("ID:"+userdbId);
  })
  .catch(error => {
    console.log(error);
  });
  },[])

  const saveUserInfo = async () => {

    try{
      console.log(userdbId);
      console.log(yearValue);
      const response = await axios.put(`http://192.168.200.128:8080/user/user/modifyYear/${userdbId}`, {
        userId: userdbId,
        year: yearValue,
      }
      );

      navigation.navigate(AuthRoutes.WEL_End);
    }catch(e){
      console.log(e.response.data);
      console.log("변경x");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>몇 학년이신가요?</Text>
      <StatusBar style="auto" />
      <View style={styles.selectedOptionView}>
          <Text style={styles.selectedOptionName}>학년</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={handleYearChange}
            placeholder={""}
            items={[
              { label: '1학년', value: '1' },
              { label: '2학년', value: '2' },
              { label: '3학년', value: '3' },
              { label: '4학년', value: '4' },
              { label: '4학년 이상', value: '5' },
            ]}
            value={yearValue}
          />
        </View>
      <Button 
      title={'완료'}
      types={'MainButton'}
      onPress={saveUserInfo}
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
