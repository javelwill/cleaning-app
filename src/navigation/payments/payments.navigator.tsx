import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PaymentsStackNavigatorParamList} from './payments.types';

const Stack = createNativeStackNavigator<PaymentsStackNavigatorParamList>();

const PaymentsStackNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};

export default PaymentsStackNavigator;
