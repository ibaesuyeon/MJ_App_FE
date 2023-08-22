import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigations/Navigation';
import 'react-native-gesture-handler';
import MainScreen from './Screens/MainScreen';
import DrawerNavigation from './Navigations/DrawerNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigation />
      {/* <Navigation /> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
});

export default App;
