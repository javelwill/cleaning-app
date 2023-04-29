import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSizes, fonts} from '../../constants/fonts';
import {sizes} from '../../constants/sizes';

type ButtonProps = {
  title: string;
  borderColor?: string;
  backgroundColor: string;
  color: string;
  icon?: React.ReactNode | null;
  onPress: () => void;
  disabled?: boolean;
};

const Button = ({
  title,
  borderColor = 'transparent',
  backgroundColor,
  color,
  icon = null,
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <Pressable onPress={() => onPress()} disabled={disabled}>
      <View style={[styles.btn, {borderColor, backgroundColor}]}>
        {icon}
        <Text style={[styles.txt, {color}]}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    gap: sizes.xs,
  },
  txt: {
    fontSize: fontSizes.body,
    fontFamily: fonts.medium,
  },
});
