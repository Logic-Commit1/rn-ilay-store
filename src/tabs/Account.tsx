import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet
} from 'react-native';
import userAvatar from '~/assets/products/hotdogs/hotdog.png';
import { COLORS } from '~/constants';

const Account: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.accent}></View>
      <View style={styles.profileInformation}>
        <View style={styles.userAvatarContainer}>
          <Image source={userAvatar} style={styles.userAvatar} />
        </View>
        <Text style={styles.text}>Logic Tanjueco</Text>
      </View>
      <View style={styles.profileSettings}>
        <View>
          <Text style={styles.header}>Account</Text>
          <Pressable style={styles.card}>
            <Text style={styles.text}>Delete My Account</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.header}>Settings</Text>

          <Pressable>
            <View style={styles.card}>
              <Text style={styles.text}>Sign Out</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#fafafa',
    zIndex: 1
  },

  accent: {
    width: '100%',
    backgroundColor: COLORS.tertiary,
    position: 'absolute',
    top: 0,
    left: 0,
    height: 142,
    background: '#F65156',
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 72,
    zIndex: 2
  },
  profileInformation: {
    position: 'relative',
    textAlign: 'center',
    padding: 32,
    zIndex: 3,
    backgroundColor: '#ffffff',
    width: '80%',
    margin: 24,
    borderRadius: 24,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 4
  },
  text: {
    fontFamily: 'Poppins'
  },
  userAvatar: {
    width: 70,
    height: 70,
    borderRadius: 90
  },
  userAvatarContainer: {
    borderWidth: 5,
    borderColor: COLORS.accent,
    borderRadius: 50,
    marginBottom: 16,
    width: 80,
    height: 80
  },
  profileSettings: {
    paddingHorizontal: 20
  },
  header: {
    margin: 0,
    fontFamily: 'Poppins-SemiBold'
  },
  card: {
    padding: 14,
    marginVertical: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 3
  }
});

export default Account;
