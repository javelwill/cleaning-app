import React from 'react';
import {Text} from 'react-native';
import {fontSizes, fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';

type TypeProps = {
  children: React.ReactNode;
  variant?: 'title' | 'body' | 'link' | 'hint' | 'error';
  textAlign?: 'left' | 'center' | 'right';
  width?: number | string;
};

const styles = {
  title: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.title,
    color: colors.text.primary,
  },
  body: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
    color: colors.text.secondary,
    lineHeight: 20,
  },
  link: {
    fontFamily: fonts.medium,
    fontSize: fontSizes.body,
    color: colors.brand.primary,
  },
  hint: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.hint,
    color: colors.text.secondary,
  },
  error: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.hint,
    color: colors.text.error,
  },
};

const Type = ({
  children,
  variant = 'body',
  textAlign = 'left',
  width = 'auto',
}: TypeProps) => {
  return <Text style={[styles[variant], {textAlign, width}]}>{children}</Text>;
};

export default Type;
