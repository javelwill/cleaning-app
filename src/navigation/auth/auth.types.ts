import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackNavigatorParamList = {};

export type AuthStackNavigatorProps<
  T extends keyof AuthStackNavigatorParamList
> = NativeStackScreenProps<AuthStackNavigatorParamList, T>;
