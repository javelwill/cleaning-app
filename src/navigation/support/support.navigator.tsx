import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SupportStackNavigatorParamList} from './support.types';

const Stack = createNativeStackNavigator<SupportStackNavigatorParamList>();

const SupportStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default SupportStackNavigator;
