import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackNavigatorParamList} from './auth.types';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default AuthStackNavigator;
