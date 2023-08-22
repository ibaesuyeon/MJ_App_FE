import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from './routes';

import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import WelCampusScreen from '../Screens/WelcomeScreen/WelCampusScreen';
import WelSYearScreen from '../Screens/WelcomeScreen/WelSYearScreen';
import WelEndScreen from '../Screens/WelcomeScreen/WelEndScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: '#fff' },
        headerShown: false,
      }}
    >
      <Stack.Screen name={AuthRoutes.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={AuthRoutes.WEL_CAMPUS} component={WelCampusScreen} />
      <Stack.Screen name={AuthRoutes.WEL_SYear} component={WelSYearScreen} />
      <Stack.Screen name={AuthRoutes.WEL_End} component={WelEndScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
