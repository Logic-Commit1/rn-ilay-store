import { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import Button from '~/components/Button';
import hotdogPhoto from '~/assets/products/hotdogs/hotdog.png';
import { COLORS } from '~/constants';
import { supabase } from '~/lib/supabase';
import { useAuth } from '../contexts/AuthenticationContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

interface AccountProps {
  currentUser: any;
  /* onSignOut: () => void; */
}

const Account: React.FC<AccountProps> = ({ currentUser }) => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    signOut();
  };

  const handleDeleteAccount = () => {
    console.log('Delete account pressed.');
  };

  const handleLoginModal = () => {
    console.log('login modal open');
  };

  const user_profilePicture =
    currentUser?.user_metadata.avatar_url &&
    currentUser?.user_metadata.avatar_url !== ''
      ? currentUser.user_metadata.avatar_url
      : hotdogPhoto;

  const user_name =
    currentUser?.user_metadata.name && currentUser?.user_metadata.name !== ''
      ? currentUser.user_metadata.name
      : 'Suki';

  const user_email =
    currentUser?.email && currentUser?.email !== '' ? currentUser.email : '';

  return (
    <SafeAreaView>
      <View style={styles.accent}></View>
      <View style={styles.profileInformation}>
        <View style={styles.userAvatarContainer}>
          <Image
            source={currentUser ? { uri: user_profilePicture } : hotdogPhoto}
            style={styles.userAvatar}
          />
        </View>
        <Text style={styles.displayName}>{user_name}</Text>
        <Text style={styles.displayEmail}>{user_email}</Text>
      </View>
      {currentUser ? (
        <View style={styles.profileSettings}>
          <View>
            <Text style={styles.header}>Account</Text>
            <TouchableOpacity style={styles.card} onPress={handleDeleteAccount}>
              <Text style={styles.text}>Delete My Account</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.header}>Settings</Text>
            <View>
              <TouchableOpacity onPress={handleSignOut} style={styles.card}>
                <Text style={styles.text}>Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Button
            label="Login"
            buttonStyle={{ paddingHorizontal: 14 }}
            textStyle={{ fontFamily: 'Poppins' }}
            onPress={handleLoginModal}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 'auto'
  },

  accent: {
    width: '100%',
    backgroundColor: COLORS.tertiary,
    position: 'absolute',
    top: 0,
    left: 0,
    height: 142,
    background: COLORS.tertiary,
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 72,
    zIndex: 2
  },
  profileInformation: {
    position: 'relative',
    textAlign: 'center',
    padding: 32,
    zIndex: 3,
    backgroundColor: COLORS.white,
    width: '80%',
    margin: 24,
    borderRadius: 24,
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 4
  },
  displayName: {
    fontFamily: 'Poppins'
  },
  displayEmail: {
    fontFamily: 'Poppins',
    color: COLORS.gray
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
