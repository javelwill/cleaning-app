import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type ProviderStackNavigatorParamList = {};

export type ProviderStackNavigatorProps<
  T extends keyof ProviderStackNavigatorParamList
> = NativeStackScreenProps<ProviderStackNavigatorParamList, T>;
