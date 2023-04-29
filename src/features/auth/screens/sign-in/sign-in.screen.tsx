import {Ionicons} from '@expo/vector-icons';
import {useFormik} from 'formik';
import React, {useState} from 'react';
import {Keyboard, Pressable, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../../components/button/button.component';
import Content from '../../../../components/content/content.component';
import Google from '../../../../components/google/google.component';
import Header from '../../../../components/header/header.component';
import Spacer from '../../../../components/spacer/spacer.component';
import Type from '../../../../components/type/type.component';
import {colors} from '../../../../constants/colors';
import {fontSizes, fonts} from '../../../../constants/fonts';
import {sizes} from '../../../../constants/sizes';
import {AuthStackNavigatorProps} from '../../../../navigation/auth/auth.types';
import * as Yup from 'yup';

const SignInScreen = ({navigation}: AuthStackNavigatorProps<'SignIn'>) => {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={{flex: 1}}
      >
        <Header
          title="Log In"
          subtitle="Please fill the details below to start with your existing account."
          subtitleWidth={'75%'}
          backIcon={false}
        />

        <Content>
          <TextInput
            label="Email"
            mode="outlined"
            selectionColor={colors.brand.primary}
            activeOutlineColor={colors.brand.primary}
            outlineColor={colors.bg.secondary}
            style={{
              backgroundColor: colors.bg.primary,
              fontFamily: fonts.bold,
              fontSize: fontSizes.body,
            }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            textContentType="emailAddress"
            onChangeText={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email && (
            <>
              <Spacer size={sizes.xxs} />
              <Type variant="error">{formik.errors.email}</Type>
            </>
          )}

          <Spacer size={sizes.sm} />

          <TextInput
            label="Password"
            mode="outlined"
            selectionColor={colors.brand.primary}
            activeOutlineColor={colors.brand.primary}
            outlineColor={colors.bg.secondary}
            style={{
              backgroundColor: colors.bg.primary,
              fontFamily: fonts.bold,
              fontSize: fontSizes.body,
            }}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye-off' : 'eye'}
                iconColor={colors.ui.disabled}
                onPress={() => {
                  setShowPassword(!showPassword);
                }}
              />
            }
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password && (
            <>
              <Spacer size={sizes.xxs} />
              <Type variant="error">{formik.errors.password}</Type>
            </>
          )}

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
            onPress={formik.handleSubmit}
            disabled={false}
          />

          <Spacer size={sizes.md} />

          <View style={styles.signup}>
            <Type textAlign="center">Don't have an account?</Type>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Type variant="link"> Signup here</Type>
            </Pressable>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.orContainer}>
              <View style={styles.orSeparator}></View>
              <Type>OR</Type>
              <View style={styles.orSeparator}></View>
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
        </Content>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes.xs,
  },
  orSeparator: {
    height: 1,
    flex: 1,
    backgroundColor: colors.bg.secondary,
  },
});
