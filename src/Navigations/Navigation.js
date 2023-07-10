import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
      {/* { user ? <MainStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
};

export default Navigation;
