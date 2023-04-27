import {Ionicons} from '@expo/vector-icons';
import React, {useState} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../../components/button/button.component';
import Google from '../../../../components/google/google.component';
import Spacer from '../../../../components/spacer/spacer.component';
import Type from '../../../../components/type/type.component';
import {colors} from '../../../../constants/colors';
import {sizes} from '../../../../constants/sizes';
import {AuthStackNavigatorProps} from '../../../../navigation/auth/auth.types';

const SignInScreen = ({navigation}: AuthStackNavigatorProps<'SignIn'>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={{flex: 1}}
      >
        <View style={styles.header}>
          <Type variant="title">Log In</Type>
          <Spacer size={sizes.xs} />
          <Type width={'75%'}>
            Please fill the details below to start with your existing account.
          </Type>
        </View>
        <View style={styles.content}>
          <TextInput
            label="Email"
            mode="outlined"
            value={email}
            onChangeText={(text) => setEmail(text)}
            selectionColor={colors.brand.primary}
            activeOutlineColor={colors.brand.primary}
            outlineColor={colors.bg.secondary}
            style={{
              backgroundColor: colors.bg.primary,
            }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            textContentType="emailAddress"
          />
          <Spacer size={sizes.sm} />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={(text) => setPassword(text)}
            selectionColor={colors.brand.primary}
            activeOutlineColor={colors.brand.primary}
            outlineColor={colors.bg.secondary}
            style={{
              backgroundColor: colors.bg.primary,
            }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            textContentType="password"
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              />
            }
          />
          <Spacer size={sizes.xs} />

          {false && (
            <Type variant="error" textAlign="center">
              Error
            </Type>
          )}
          <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
            <Type variant="hint" textAlign="right">
              Forget Password?
            </Type>
          </Pressable>
          <Spacer size={sizes.md} />
          <Button
            title="Log in"
            backgroundColor={colors.brand.primary}
            color={colors.text.white}
            onPress={() => null}
          />

          <Spacer size={sizes.md} />
          <View style={styles.signup}>
            <Type textAlign="center">Don't have an account?</Type>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Type variant="link"> Signup here</Type>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: sizes.xs,
              }}
            >
              <View
                style={{
                  height: 1,
                  flex: 1,
                  backgroundColor: colors.bg.secondary,
                }}
              ></View>
              <Type>OR</Type>
              <View
                style={{
                  height: 1,
                  flex: 1,
                  backgroundColor: colors.bg.secondary,
                }}
              ></View>
            </View>
            <Spacer size={sizes.md} />
            <Button
              title="Continue with Google"
              borderColor={colors.text.primary}
              backgroundColor={colors.bg.primary}
              color={colors.text.primary}
              onPress={() => null}
              icon={<Google width={20} height={20} />}
            />
            <Spacer size={sizes.sm} />
            <Button
              title="Continue with Apple"
              borderColor={colors.text.primary}
              backgroundColor={colors.bg.primary}
              color={colors.text.primary}
              onPress={() => null}
              icon={<Ionicons name="logo-apple" size={24} color="black" />}
            />
            <Spacer size={sizes.md} />
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: sizes.sm,
    borderBottomColor: colors.bg.secondary,
    borderBottomWidth: 1,
  },
  content: {
    flex: 1,
    padding: sizes.sm,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
