import 'react-native-gesture-handler';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStackNavigator from './src/navigation/auth/auth.navigator';
import {colors} from './src/constants/colors';
import {Provider as PaperProvider} from 'react-native-paper';
import MainStackNavigator from './src/navigation/main/main.navigator';
import AuthProvider from './src/contexts/auth.context';
import Navigation from './src/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.bg.primary,
    },
  };

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <PaperProvider>
        <AuthProvider>
          <Navigation theme={theme} />
        </AuthProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
