import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from './auth.types';
import SignInScreen from '../../features/auth/screens/sign-in/sign-in.screen';
import ForgetPasswordScreen from '../../features/auth/screens/forget-password/forget-password.screen';
import VerificationCodeScreen from '../../features/auth/screens/verification-code/verification-code.screen';
import ResetPasswordScreen from '../../features/auth/screens/reset-password/reset-password.screen';
import SignUpScreen from '../../features/auth/screens/sign-up/sign-up.screen';
import UserDetailsScreen from '../../features/auth/screens/user-details/user-details.screen';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen
        name="VerificationCode"
        component={VerificationCodeScreen}
      />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
