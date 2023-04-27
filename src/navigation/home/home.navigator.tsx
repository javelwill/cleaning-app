import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from './home.types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default HomeStackNavigator;
