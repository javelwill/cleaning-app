import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import AuthStackNavigator from './auth/auth.navigator';
import MainDrawerNavigator from './main/main.navigator';
import {AuthContext} from '../contexts/auth.context';

type NavigationProps = {
  theme: any;
};

const Navigation = ({theme}: NavigationProps) => {
  const {user} = useContext(AuthContext);
  return (
    <NavigationContainer theme={theme}>
      {user ? <MainDrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
