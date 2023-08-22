import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Screens/MainScreen';
import NormalNoticeScreen from '../Screens/NormalNoticeScreen';
import UserScreen from '../Screens/UserScreen';
import UserEditScreen from '../Screens/UserEditScreen/UserEditScreen';
import CreditScreen from '../Screens/CreditScreen';
import { BLACK, WHITE } from '../Colors';
import HeaderLeftButton from '../Components/HeaderLeftButton';
import HeaderRightButton from '../Components/HeaderRightButton';
import AlermSettingScreen from '../Screens/AlermSettingScreen';
import UserCourseFirstScreen from '../Screens/UserCourseScreen/UserCourseFirstScreen';
import UserCourseSecondScreen from '../Screens/UserCourseScreen/UserCourseSecondScreen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: '900' },
        headerBackTitleVisible: false,
        headerTitle: 'APP_NAME',
        headerLeft: () => <HeaderLeftButton />,
        headerRight: () => <HeaderRightButton />,
      }}
    >
      <Stack.Screen name={'Main'} component={MainScreen} />
      <Stack.Screen
        name={'Credit'}
        component={CreditScreen}
        options={{ headerTitle: '이수 학점' }}
      />
      <Stack.Screen
        name={'NormalNotice'}
        component={NormalNoticeScreen}
        options={{ headerTitle: '일반 공지' }}
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
        options={{ headerTitle: '알람 수정'}}
      />
       <Stack.Screen
        name={'UserTable'}
        component={UserCourseFirstScreen}
        options={{ headerTitle: '시간표'}}
      />
      <Stack.Screen
        name={'UserTable2'}
        component={UserCourseSecondScreen}
        options={{ headerTitle: '시간표'}}
      />
       
      
    </Stack.Navigator>
  );
};
export default MainStack;
