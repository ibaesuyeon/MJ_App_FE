import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NormalNoticeScreen from '../Screens/NormalNoticeScreen';
import MainStack from './MainStack';
import CreditScreen from '../Screens/CreditScreen';
import HeaderLeftButton from '../Components/HeaderLeftButton';
import HeaderRightButton from '../Components/HeaderRightButton';
import { BLACK, GRAY } from '../Colors';

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
          headerTitle: 'APP_NAME',
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
          options={{ drawerLabel: '일반공지' }}
        />
        <Drawer.Screen
          name="Credit"
          component={CreditScreen}
          options={{ drawerLabel: '이수학점' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
