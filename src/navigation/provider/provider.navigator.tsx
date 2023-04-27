import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProviderStackNavigatorParamList} from './provider.types';

const Stack = createNativeStackNavigator<ProviderStackNavigatorParamList>();

const ProviderStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default ProviderStackNavigator;
