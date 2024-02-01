import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

const FontLoader = ({ children }: any) => {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
    return children;
  }
};

export default FontLoader;
