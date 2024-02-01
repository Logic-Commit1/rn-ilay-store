import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '~/constants';

interface ButtonProps {
  label: string;
  buttonStyle?: any;
  textStyle?: any;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  buttonStyle,
  textStyle,
  onPress
}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 6,
    backgroundColor: COLORS.tertiary,
    borderRadius: 10
  },
  text: {
    fontFamily: 'Poppins',
    color: COLORS.white,
    fontSize: SIZES.medium
  }
});
