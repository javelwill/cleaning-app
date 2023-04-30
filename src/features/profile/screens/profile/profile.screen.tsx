import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../../../../contexts/auth.context';

const ProfileScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
