import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../../Navigations/routes';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>안녕하세요!</Text>
      <StatusBar style="auto" />
      <Button 
      title={'시작하기'}
      types={'MainButton'}
      onPress={() => navigation.navigate(AuthRoutes.WEL_CAMPUS)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: '#005eb8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    zIndex: 1,
    color: 'white',
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 50,
    top: -100,
  }

});

export default WelcomeScreen;
