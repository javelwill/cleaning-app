import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {};

export type HomeStackNavigatorProps<
  T extends keyof HomeStackNavigatorParamList
> = NativeStackScreenProps<HomeStackNavigatorParamList, T>;
