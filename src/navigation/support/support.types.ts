import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SupportStackNavigatorParamList = {};

export type SupportStackNavigatorProps<
  T extends keyof SupportStackNavigatorParamList
> = NativeStackScreenProps<SupportStackNavigatorParamList, T>;
