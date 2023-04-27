import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TemplateNameStackNavigatorParamList = {};

export type TemplateNameStackNavigatorProps<
  T extends keyof TemplateNameStackNavigatorParamList
> = NativeStackScreenProps<TemplateNameStackNavigatorParamList, T>;
