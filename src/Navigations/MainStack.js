import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../Screens/MainScreen';
import NormalNoticeScreen from '../Screens/NormalNoticeScreen';
import CreditScreen from '../Screens/CreditScreen';
import { BLACK, WHITE } from '../Colors';
import HeaderLeftButton from '../Components/HeaderLeftButton';
import HeaderRightButton from '../Components/HeaderRightButton';

const Stack = createNativeStackNavigator();

const MainStack = () => {
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
      <Stack.Screen name={'Main'} component={MainScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;
