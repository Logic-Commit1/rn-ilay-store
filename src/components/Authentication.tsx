import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { supabase } from '~/lib/supabase';
import { useAuth } from '../contexts/AuthenticationContext';
import { COLORS, SIZES } from '~/constants';
import { logo, googleLogo } from '~/constants/icons';
import useCurrentUser from '../hooks/useCurrentUser';
import { User, saveUser } from '~/data/User';

interface LoginButtonProps {
  setLoginModalVisible: (type: boolean) => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ setLoginModalVisible }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { signIn } = useAuth();
  const { fetchCurrentUser } = useCurrentUser();

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '375320252700-7j97b84chekgeofr9g436n5tcdka94sv.apps.googleusercontent.com'
  });

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: userInfo.idToken
        });
        console.log(`value of data is: ${data}`,JSON.stringify(data, null, 2));

        if (error) {
          console.error(error);
        } else {
          const user = data.user
          await saveUser({
            id: user?.id || '',
            email: user?.email || '',
            full_name: user?.user_metadata.full_name,
            avatar_url: user?.user_metadata.avatar_url || '',
          } as User)
          fetchCurrentUser();
          signIn();
        }
      } else {
        throw new Error('no ID token present!');
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    } finally {
      setLoginModalVisible(false);
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log(isSignedIn);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={handleGoogleSignIn}
          disabled={isSigningIn}
          style={styles.signInButton}
        >
          <Image source={googleLogo} style={styles.googleLogo} />
          <Text style={styles.buttonText}>
            {isSigningIn ? 'Signing In...' : 'Sign In with Google'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface AuthenticationProps {
  delay?: number;
  setLoginModalVisible: (type: boolean) => void;
}

const Authentication: React.FC<AuthenticationProps> = ({
  delay = 0,
  setLoginModalVisible
}) => {
  const { isAuthenticated, signIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay, setIsOpen]);

  const renderModal = () => {
    if (isOpen) {
      return (
        <>
          <View style={styles.modal}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.tagline}>
              Order na ng mura at paboritong ulam kay ate ilay!
            </Text>
            <LoginButton setLoginModalVisible={setLoginModalVisible} />
          </View>
        </>
      );
    }

    return null;
  };

  return renderModal();
};

export default Authentication;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modal: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    top: '20%',
    width: '100%',
    height: 240,
    elevation: 10,
    backgroundColor: COLORS.accent,
    borderRadius: 20
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30
  },
  googleLogo: {
    width: 25,
    height: 25,
    marginRight: 10 // Add margin to separate the image and text
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium
  },
  signInButton: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 20,
    marginTop: 20,
    flexDirection: 'row'
  },
  tagline: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    alignSelf: 'center',
    fontSize: SIZES.medium,
    marginTop: 20,
    paddingHorizontal: 30
  }
});
