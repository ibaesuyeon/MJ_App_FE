import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserScreen from '../Screens/UserScreen';
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
import MainStack from './MainStack';
import CreditScreen from '../Screens/CreditScreen';
import HeaderLeftButton from '../Components/HeaderLeftButton';
import HeaderRightButton from '../Components/HeaderRightButton';
import { GRAY } from '../Colors';
import MainScreen from '../Screens/MainScreen';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '900' },
          headerShadowVisible: true,
          headerStyle: { shadowOpacity: 100, shadowColor: GRAY },
          headerPressOpacity: 70,
          headerBackTitleVisible: false,
          headerTitle: '명지대학교',
          headerLeft: () => <HeaderLeftButton />,
          headerRight: () => <HeaderRightButton />,
        }}
      >
        <Drawer.Screen
          name="Main"
          component={MainStack}
          options={{ drawerLabel: '홈' }}
        />
        <Drawer.Screen
          name="NormalNotice"
          component={NormalNoticeScreen}
          options={{ headerTitle: '일반공지', drawerLabel: '일반공지' }}
        />
        <Drawer.Screen
          name="FestivalNotice"
          component={FestivalNoticeScreen}
          options={{ headerTitle: '행사공지', drawerLabel: '행사공지' }}
        />
        <Drawer.Screen
          name="SchoolNotice"
          component={SchoolNoticeScreen}
          options={{ headerTitle: '학사공지', drawerLabel: '학사공지' }}
        />
        <Drawer.Screen
          name="EduNotice"
          component={EduNoticeScreen}
          options={{
            headerTitle: '장학/학자금공지',
            drawerLabel: '장학/학자금공지',
          }}
        />
        <Drawer.Screen
          name="StWorkNotice"
          component={StWorkNoticeScreen}
          options={{ headerTitle: '학생활동공지', drawerLabel: '학생활동공지' }}
        />
        <Drawer.Screen
          name="WorkNotice"
          component={WorkNoticeScreen}
          options={{
            headerTitle: '진로/취업/창업공지',
            drawerLabel: '진로/취업/창업공지',
          }}
        />
        <Drawer.Screen
          name="HumNotice"
          component={HumNoticeScreen}
          options={{
            headerTitle: '인문대공지',
            drawerLabel: '인문대공지',
          }}
        />
        <Drawer.Screen
          name="BusinessNotice"
          component={BusinessNoticeScreen}
          options={{
            headerTitle: '경영대공지',
            drawerLabel: '경영대공지',
          }}
        />
        <Drawer.Screen
          name="LawNotice"
          component={LawNoticeScreen}
          options={{
            headerTitle: '법대공지',
            drawerLabel: '법대공지',
          }}
        />
        <Drawer.Screen
          name="IctNotice"
          component={IctNoticeScreen}
          options={{
            headerTitle: 'ICT공지',
            drawerLabel: 'ICT공지',
          }}
        />
        <Drawer.Screen
          name="Credit"
          component={CreditScreen}
          options={{ headerTitle: '이수학점', drawerLabel: '이수학점' }}
        />
        <Drawer.Screen
          name={'User'}
          component={UserScreen}
          options={{ headerTitle: '사용자 정보', drawerLabel: '사용자 정보' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
