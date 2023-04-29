import type {DrawerScreenProps} from '@react-navigation/drawer';

export type MainDrawerNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
  Support: undefined;
  Provider: undefined;
  Payments: undefined;
  Ratings: undefined;
  Bookings: undefined;
};

export type MainStackNavigatorProps<
  T extends keyof MainDrawerNavigatorParamList
> = DrawerScreenProps<MainDrawerNavigatorParamList, T>;
