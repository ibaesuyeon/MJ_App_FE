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
  Picker,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Constants from 'expo-constants';
import { useNavigation, useRoute  } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Button, Overlay, Icon, Input, BottomSheet, ListItem} from '@rneui/themed';
import { AuthRoutes } from '../../Navigations/routes';

const UserCourseFirstScreen = () => {

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [visibleGrade, setVisibleGrade] = useState(false);
  const [clickCourse, setClickCourse] = useState(-1);
  const [grade, setGrade] = useState("--");
  const [userId, setUserId] = useState("");

  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [credits, setCredits] = useState('');

  const [ctype, setCtype] = useState('');

const toggleOverlay = () => {
  setVisible(!visible);
};

const saveLecture = async () => {
  console.log("w잘옴")
  console.log(name)
  console.log(credits)
  console.log(ctype)
  console.log(userId)
  console.log("w잘옴")
  try{
    const response = await axios.post(`http://192.168.200.128:8080/myCourse/myCourse/register`, {
      year: 1,
      semester: "SPRING",
      cname: name,
      credits: credits,
      ctype: ctype,
      myCourseUserId: userId,
    }
    );
    console.log("저장완료");

    setVisible(!visible);

  }catch(e){
    console.log(e.response.data);
    console.log(e.message);
  }
};

const toggleOverlayGrade = (myCourseId) => {
  setClickCourse(myCourseId);
  console.log(myCourseId);
  setVisibleGrade(!visibleGrade);
};

const changeGrade = () => {
  console.log(clickCourse);
};

const changeSemesterPage = (changeYear, changeSemester) => {
  navigation.navigate(AuthRoutes.USERTIMETABLE2, {data: { years: changeYear,
    semesters: changeSemester}})
};

const [isVisible, setIsVisible] = useState(false);

const list = [
  { title: '1학년 1학기',
  onPress: () => {changeSemesterPage("1","1"),setIsVisible(false)} },
  { title: '1학년 2학기',
  onPress: () =>{changeSemesterPage("1","2"),setIsVisible(false)} },
  { title: '2학년 1학기',
  onPress: () => {changeSemesterPage("2","1"),setIsVisible(false)} },
  { title: '2학년 2학기',
  onPress: () => {changeSemesterPage("2","2"),setIsVisible(false)} },
  { title: '3학년 1학기',
  onPress: () => {changeSemesterPage("3","1"),setIsVisible(false)} },
  { title: '3학년 2학기',
  onPress: () => {changeSemesterPage("3","2"),setIsVisible(false)} },
  { title: '4학년 1학기',
  onPress: () => {changeSemesterPage("4","1"),setIsVisible(false)} },
  { title: '4학년 2학기',
  onPress: () => {changeSemesterPage("4","2"),setIsVisible(false)} },

  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
];

useEffect( () => {

  axios.get(`http://192.168.200.128:8080/user/user/device/${Constants.installationId}`)
.then(response => {
  setUserId(response.data.data.userId);

  console.log(userId+"정보성공");
  
  axios.get(`http://192.168.200.128:8080/myCourse/myCourse/${response.data.data.userId}/1/SPRING`)
  .then(response => {
    const data = response.data;
    console.log(data);
    const objects = [];
    
    for (let i = 0; i < data.list.length; i++) {
      const obj = {
          myCourseId: data.list[i].myCourseId,
          name: data.list[i].cname,
          credit: data.list[i].credit,
          grade: data.list[i].grade

      };
      console.log(obj);
      objects.push(obj);
  }
  setData(objects);

    console.log("됨");
  })
  .catch(error => {
    console.log(error.response.data)
    
    console.log("안됨");
  });

})
.catch(error => {
  console.log(error);
});
},[])

const handleChangeName = (event) => {
  console.log(event.nativeEvent.text)
  setName(event.nativeEvent.text);
};
const handleChangeInfo = (event) => {
  setCtype(event.nativeEvent.text);
};
const handleChangeCredits = (event) => {
  setCredits(event.nativeEvent.text);
};

  // function CreditScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled={false}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.timetable}>
            <View style={styles.timetablename}>
              <Text style={styles.timetablenametext}>1학년 1학기 시간표</Text>
            </View>
            <View style={styles.timetablecourse}>

                  {data.map((item) => (
                  <View
                  style={[
                    styles.contentBackground,
                    styles.totalCredit,
                    styles.rowWrapper,
                  ]}
                  >
                    <Text numberOfLines={1} style={styles.CurrentCreditTitle}>{item.name}</Text>
                    <Text style={styles.CurrentCreditdetail}>{item.credit}학점</Text>
                    
                      {item.grade==null?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> -- </Text>:
                      item.grade=="A_PLUS"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> A+ </Text>:
                      item.grade=="A0"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> A </Text>:
                      item.grade=="B_PLUS"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> B+ </Text>:
                      item.grade=="B0"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> B </Text>:
                      item.grade=="C_PLUS"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> C+ </Text>:
                      item.grade=="C0"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> C </Text>:
                      item.grade=="D_PLUS"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> D+ </Text>:
                      item.grade=="D0"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> D </Text>:
                      item.grade=="F"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> F </Text>:
                      item.grade=="P"?<Text onPress={toggleOverlayGrade} style={styles.buttonText}> P </Text>:
                      <Text onPress={toggleOverlayGrade} style={styles.buttonText}> NP </Text>}
                  </View>
                ))}

            </View>
              <Button
                  title="강의 추가하기"
                  buttonStyle={{
                    backgroundColor: 'black',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: wp('90%'),
                    height: hp('9%'),
                  }} 
                  titleStyle={{ fontWeight: 'bold' }}
                  onPress={toggleOverlay}
                />
              <Overlay overlayStyle={{ width: wp('90%')}} isVisible={visible} onBackdropPress={toggleOverlay}>
              <Input onChange={handleChangeName} placeholder='강의 제목 입력'/>
              <Input onChange={handleChangeInfo} placeholder='강의 정보 입력'/>
              <Input onChange={handleChangeCredits} placeholder='학점 입력(숫자만 입력해주세요!)'/>
              <Button
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 30,
                }}
                title="저장하기"
                onPress={saveLecture}
              />
            </Overlay>
            <Button
                  title="학기 변경하기"
                  buttonStyle={{
                    backgroundColor: 'black',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: wp('90%'),
                    height: hp('9%'),

                  }}
                  titleStyle={{ fontWeight: 'bold' }}
                  onPress={() => setIsVisible(true)}
                />
                <BottomSheet modalProps={{}} isVisible={isVisible}>
                {list.map((l, i) => (
                  <ListItem
                    key={i}
                    containerStyle={l.containerStyle}
                    onPress={l.onPress}
                  >
                    <ListItem.Content>
                      <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                ))}
              </BottomSheet>
          </View>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Overlay overlayStyle={{ width: wp('90%')}} isVisible={visibleGrade} onBackdropPress={toggleOverlayGrade}>
            <TouchableOpacity onPress={changeGrade}>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-stars'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>A+</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-hearts'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>A</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-wink'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>B+</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
             name='grin-alt'
             type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>B</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-squint-tears'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>C+</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-tears'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>C</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-tongue-wink'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>D+</Text>
            </View>
            </TouchableOpacity><TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='grin-tongue'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>D</Text>
            </View>
            </TouchableOpacity><TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='ghost'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>F</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='ghost'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>P</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.vertical}>
              <Icon style={styles.Icon}
              name='ghost'
              type='font-awesome-5'
              color='black'
              />
              <Text style={styles.gradeText}>NP</Text>
            </View>
            </TouchableOpacity>
            </Overlay>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </View>
      </Pressable>
    </KeyboardAvoidingView>
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 'auto',
  },
  timetablename: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:  hp('3%'),
    width: wp('90%'),
    height: hp('5%'),
    borderBottomWidth: 1,
    paddingBottom: hp('2%')
  },
  timetablenametext: {
    fontSize: 20,
    fontWeight: '700',
  },
  timetable: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('90%'),
  },
  timetablecourse: {
    alignItems: 'center',
    minHeight: hp('60%'),
    maxHeight: hp('60%'),
    width: wp('90%'),
    marginVertical: hp('2%'),
    borderBottomWidth: 1
  },
  CurrentCreditTitle: {
    right: wp('16%'),
    fontSize: 20,
    fontWeight: '700',
    maxWidth:  wp('40%'),
  },
  CurrentCreditdetail: {
    right: wp('6%'),
    fontSize: 20,
    fontWeight: '700',
    maxWidth:  wp('20%'),
  },
  buttonText: {
    right: wp('-10%'),
    fontSize: 20,
    fontWeight: '900',
    maxWidth:  wp('20%'),
  },
  contentBackground: {
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  totalCredit: {
    top: hp('2%'),
    width: wp('90%'),
    height: hp('8%'),
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowWrapper: {
    flexDirection: 'row',
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#f6f6f6',
    height: hp('5%'),
  },
  gradeText: {
    right:  wp('0%'),
    fontSize: 20,
    fontWeight: 'bold'
  },
  
});
export default UserCourseFirstScreen;
