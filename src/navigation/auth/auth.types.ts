import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackNavigatorParamList = {
  SignIn: undefined;
  ForgetPassword: undefined;
  VerificationCode: undefined;
  ResetPassword: undefined;
  SignUp: undefined;
  UserDetails: undefined;
};

export type AuthStackNavigatorProps<
  T extends keyof AuthStackNavigatorParamList
> = NativeStackScreenProps<AuthStackNavigatorParamList, T>;
