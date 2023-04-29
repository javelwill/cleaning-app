import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sizes} from '../../constants/sizes';

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({children}: ContentProps) => {
  return <View style={styles.content}>{children}</View>;
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: sizes.sm,
  },
});
