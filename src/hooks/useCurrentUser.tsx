import { useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { supabase } from '~/lib/supabase';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  const fetchCurrentUser = async () => {
    try {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      setCurrentUser(user);
      console.log(`fetch user. the data is: `, JSON.stringify(user, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event == 'SIGNED_IN' || event == 'INITIAL_SESSION') {
        if (session?.user) {
          await fetchCurrentUser();
        } else {
          setCurrentUser(null);
        }
        console.log(event);
        console.log('uCU, signed in:');
        console.log(currentUser);
      }

      if (event == 'SIGNED_OUT') {
        setCurrentUser(null);
      }
    });

    return () => {};
  }, []);

  return { currentUser, setCurrentUser, fetchCurrentUser };
};

export default useCurrentUser;
