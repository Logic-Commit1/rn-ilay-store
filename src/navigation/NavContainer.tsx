import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigation/TabNavigator';
import { AuthProvider } from '../contexts/AuthenticationContext';

const IlayStoreTheme = {
  dark: false,
  colors: {
    background: 'rgb(250, 250, 250)',
    primary: 'rgb(246, 81, 86)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(108, 112, 114)',
    border: 'rgb(108, 112, 114)',
    notification: 'rgb(246, 81, 86)'
  }
};

const NavContainer = () => (
  <NavigationContainer theme={IlayStoreTheme}>
    <AuthProvider>
      <TabNavigator />
    </AuthProvider>
  </NavigationContainer>
);

export default NavContainer;
