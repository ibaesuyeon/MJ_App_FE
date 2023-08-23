import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { GRAY } from '../Colors';
import axios from 'axios';
import Constants from 'expo-constants';

const CreditTable = () => {

  const [userId, setUserId] = useState("");
  const [userMajorId, setUserMajorId] = useState("");

    const [tableData, setTableData] = useState([
    ['공통교양', '0', '18'],  
    ['핵심교양', '0', '18'],
    ['학문기초교양', '0', `18`],
    ['채플이수횟수', '0', '18'],
    ['전공', '0', '18'],
    ['일반교양', '0', '18'],
    ['자유', '0', '18'],
    ['총학점', '0', '18'],
  ]);
 
  useEffect( () => {
    axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
  .then(response => {
    console.log(response.data);
    console.log(response.data.data.userMajorId);
    const data = response.data;
    const objects = [];

    console.log("로그인정보");
    setUserId(response.data.data.userId);
    setUserMajorId(response.data.data.userMajorId);
  })
  .catch(error => {
    console.log(error);
  });

    console.log("학점내용 가져오기");
    console.log(userMajorId);
    axios.get(`http://192.168.200.128:8080/credits/get/${userMajorId}`)
  .then(response => {
   
    console.log(response.data);
    const newData = [...tableData];

    newData[0][2] = response.data.data.commonElectiveCredits;
    newData[1][2] = response.data.data.coreElectiveCredits;
    newData[2][2] = response.data.data.collegeElectiveCredits;
    newData[3][2] = response.data.data.chapel;
    newData[4][2] = response.data.data.majorCredits;
    newData[5][2] = response.data.data.generalElectiveCredits;
    newData[6][2] = response.data.data.freeCredits;
    newData[7][2] = response.data.data.totalCredits;

    setTableData(newData);
  })
  .catch(error => {
    console.log(error);

  });

  axios.get(`http://192.168.200.128:8080/myCourse/credits/${userId}`)
  .then(response => {
  
    console.log(response.data);
    const newData = [...tableData];

    newData[0][1] = response.data.data.myCommonElectiveCredits;
    newData[1][1] = response.data.data.myCoreElectiveCredits;
    newData[2][1] = response.data.data.myCollegeElectiveCredits;
    newData[3][1] = response.data.data.myChapel;
    newData[4][1] = response.data.data.myMajorCredits;
    newData[5][1] = response.data.data.myGeneralElectiveCredits;
    newData[6][1] = response.data.data.myFreeCredits;
    newData[7][1] = response.data.data.myTotalCredits;

    setTableData(newData);
  })
  .catch(error => {
    console.log(error);

  });
  
  },[userId, userMajorId])


  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 0.8, borderColor: GRAY.LIGHT }}>
        <TableWrapper>
          <Rows
            data={tableData}
            flexArr={[2.8, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp('70%'),
    paddingBottom: hp('2%'),
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  row: {
    height: hp('6%'),
    width: wp('80%'),
  },
  text: {
    textAlign: 'center', 
  },
});

export default CreditTable;