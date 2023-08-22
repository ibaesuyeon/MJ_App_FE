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
import { Input, Button, Divider, useTheme } from '@rneui/themed';


const AlermKeywordSettingScreen = () => {
  const [userId, setUserId] = useState('');
      const [data, setData] = useState([]);

  // useEffect( () => {

  // axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
  // .then(response => {
  //   console.log(response.data);

  //   setUserId(response.data.data.userId);

    // console.log(userId);
  // })
  // .catch(error => {
  //   console.log(error);
  // });


  //   axios.get(`키워드가져오기url`)
  // .then(response => {
  //   console.log(response.data);
  // const data = response.data;
  // const objects = [];
//   for (let i = 0; i < data.list.length; i++) {
//     const obj = {
//         keywordId: data.list[i].keywordId,
//         kname: data.list[i].kname,
//     };
//     console.log(obj)
//     objects.push(obj);
// }
// setData(objects);
  // })
  // .catch(error => {
  //   console.log(error);
  // });
  // },[])


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ios: 'padding'})}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.keywordInputView}>
            <Input inputContainerStyle={{width: wp('56%'), marginLeft:  wp('6%')}}
            placeholder='추가및 삭제할 키워드'
            />
            <Button
              title="입력"
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              containerStyle={{
                width:  wp('28%'),
                marginVertical:  hp('1%'),
                marginRight:  wp('11%')
              }}
              titleStyle={{ color: 'white',fontWeight: 'bold' }}
            />
          </View>
          <View>
            <Text style={styles.keywordname}>키워드 목록</Text>
            <View style={styles.horizontalLine} />
            <View style={styles.vertical}>
              <Text style={styles.keyword}>Left text</Text>
              <Text style={styles.keyword}>Right text</Text>
            </View>
          </View>
          <View>
            
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
    paddingTop:  hp('2%'),
    paddingHorizontal:  wp('6%'),
  },
  keywordInputView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: wp('90%'),
  },
  keywordname: {
   fontSize: 30,
   fontWeight: 'bold',
   textAlign: 'left',
  },
  horizontalLine: {
    borderBottomWidth: 1, // 가로선의 두께
    borderColor: 'black', // 가로선의 색상
    width: wp('90%'), // 가로선의 너비
    marginTop: hp('2%'), // 위쪽 여백
    marginBottom: hp('3%')
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  keyword: {
    fontSize: 20,
    maxWidth:  wp('30%'),
  },
  
});
export default AlermKeywordSettingScreen;
