import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { COLORS, SIZES } from '~/constants';
import Authentication from '~/components/Authentication';
import Button from '~/components/Button';
import { useAuth } from '../contexts/AuthenticationContext';
import { useState } from 'react';

interface OrdersProps {
  currentUser: any;
}

const Orders: React.FC<OrdersProps> = ({ currentUser }) => {
  const { isAuthenticated } = useAuth();
  const [isLoginModalVisible, setLoginModalVisible] = useState<boolean>(false);

  const handleLoginModal = () => {
    setLoginModalVisible(true);
    console.log(!isAuthenticated);
  };
  2;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      {currentUser ? (
        <View>
          <Text style={styles.noOrder}>
            Hello, {currentUser?.user_metadata.name}. You don't have any orders
            yet.
          </Text>
        </View>
      ) : (
        <View style={styles.noOrderContainer}>
          <Text style={styles.noOrder}>Mag login para makapagorder</Text>

          <Button
            label="Login"
            buttonStyle={{ paddingHorizontal: 14 }}
            textStyle={{ fontFamily: 'Poppins' }}
            onPress={handleLoginModal}
          />
          {!isAuthenticated && isLoginModalVisible && (
            <Authentication setLoginModalVisible={setLoginModalVisible} />
          )}
          {/* <Authentication /> */}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.large,
    flex: 1 // Ensure the container takes up the entire screen
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.large
  },
  noOrderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noOrder: {
    fontFamily: 'Poppins'
  },
  loginButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.tertiary,
    borderRadius: 5
  },
  loginText: {
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.secondary
  }
});
