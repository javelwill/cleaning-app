import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type PaymentsStackNavigatorParamList = {};

export type PaymentsStackNavigatorProps<
  T extends keyof PaymentsStackNavigatorParamList
> = NativeStackScreenProps<PaymentsStackNavigatorParamList, T>;
