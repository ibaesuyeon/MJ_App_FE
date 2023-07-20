import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text} from 'react-native';


const Button = ({title, types, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.containers}>
      <Text style={styles.title}> {title} </Text>
    </Pressable>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  containers: {
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    width: 200,
    position: 'absolute', 
    top: 600,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
  },
});

export default Button;
