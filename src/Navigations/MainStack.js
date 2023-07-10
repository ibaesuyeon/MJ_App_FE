import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HeaderLeftButton from '../components/HeaderLeftButton';
// import HeaderRightButton from '../components/HeaderRightButton';
import MainScreen from '../Screens/MainScreen';
import { WHITE } from '../Colors';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: '700' },
        headerBackTitleVisible: false,
        headerTitle: 'APP_NAME',
      }}
    >
      <Stack.Screen name={'Main'} component={MainScreen} />
    </Stack.Navigator>
  );
};
export default MainStack;
