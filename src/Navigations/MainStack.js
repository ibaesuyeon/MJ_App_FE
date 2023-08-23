import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Screens/MainScreen';
import UserScreen from '../Screens/UserScreen';
import UserEditScreen from '../Screens/UserEditScreen/UserEditScreen';
import CreditScreen from '../Screens/CreditScreen';
import { BLACK, WHITE } from '../Colors';
import HeaderLeftButton from '../Components/HeaderLeftButton';
import HeaderRightButton from '../Components/HeaderRightButton';
import AlermSettingScreen from '../Screens/AlermSettingScreen';
import UserCourseFirstScreen from '../Screens/UserCourseScreen/UserCourseFirstScreen';
import UserCourseSecondScreen from '../Screens/UserCourseScreen/UserCourseSecondScreen';
import NormalNoticeScreen from '../Screens/NoticeScreen/NormalNoticeScreen';
import FestivalNoticeScreen from '../Screens/NoticeScreen/FestivalNoticeScreen';
import SchoolNoticeScreen from '../Screens/NoticeScreen/SchoolNoticeScreen';
import EduNoticeScreen from '../Screens/NoticeScreen/EduNoticeScreen';
import StWorkNoticeScreen from '../Screens/NoticeScreen/StWorkNoticeScreen';
import WorkNoticeScreen from '../Screens/NoticeScreen/WorkNoticeScreen';
import HumNoticeScreen from '../Screens/NoticeScreen/HumNoticeScreen';
import BusinessNoticeScreen from '../Screens/NoticeScreen/BusinessNoticeScreen';
import LawNoticeScreen from '../Screens/NoticeScreen/LawNoticeScreen';
import IctNoticeScreen from '../Screens/NoticeScreen/IctNoticeScreen';
const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerShown: false,
        // headerTitleAlign: 'center',
        // headerTitleStyle: { fontWeight: '900' },
        // headerBackTitleVisible: false,
        // headerTitle: 'APP_NAME',
        // headerLeft: () => <HeaderLeftButton />,
        // headerRight: () => <HeaderRightButton />,
      }}
    >
      <Stack.Screen
        name={'Main'}
        component={MainScreen}
        options={{ headerTitle: '명지대학교' }}
      />
      <Stack.Screen
        name={'Credit'}
        component={CreditScreen}
        options={{ headerTitle: '이수 학점' }}
      />
      <Stack.Screen
        name={'User'}
        component={UserScreen}
        options={{ headerTitle: '사용자 정보' }}
      />
      <Stack.Screen
        name={'UserEdit'}
        component={UserEditScreen}
        options={{ headerTitle: '사용자 정보 수정' }}
      />
      <Stack.Screen
        name={'Alerm'}
        component={AlermSettingScreen}
        options={{ headerTitle: '알람 수정' }}
      />
      <Stack.Screen
        name={'UserTable'}
        component={UserCourseFirstScreen}
        options={{ headerTitle: '시간표' }}
      />
      <Stack.Screen
        name={'UserTable2'}
        component={UserCourseSecondScreen}
        options={{ headerTitle: '시간표' }}
      />
      <Stack.Screen
        name="NormalNotice"
        component={NormalNoticeScreen}
        options={{ headerTitle: '일반공지' }}
      />
      <Stack.Screen
        name="FestivalNotice"
        component={FestivalNoticeScreen}
        options={{ headerTitle: '행사공지' }}
      />
      <Stack.Screen
        name="SchoolNotice"
        component={SchoolNoticeScreen}
        options={{ headerTitle: '학사공지' }}
      />
      <Stack.Screen
        name="EduNotice"
        component={EduNoticeScreen}
        options={{
          headerTitle: '장학/학자금공지',
        }}
      />
      <Stack.Screen
        name="StWorkNotice"
        component={StWorkNoticeScreen}
        options={{ headerTitle: '학생활동공지' }}
      />
      <Stack.Screen
        name="WorkNotice"
        component={WorkNoticeScreen}
        options={{
          headerTitle: '진로/취업/창업공지',
        }}
      />
      <Stack.Screen
        name="HumNotice"
        component={HumNoticeScreen}
        options={{
          headerTitle: '인문대공지',
        }}
      />
      <Stack.Screen
        name="BusinessNotice"
        component={BusinessNoticeScreen}
        options={{
          headerTitle: '경영대공지',
        }}
      />
      <Stack.Screen
        name="LawNotice"
        component={LawNoticeScreen}
        options={{
          headerTitle: '법대공지',
        }}
      />
      <Stack.Screen
        name="IctNotice"
        component={IctNoticeScreen}
        options={{
          headerTitle: 'ICT공지',
        }}
      />
    </Stack.Navigator>
  );
};
export default MainStack;
