import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type SpacerProps = {
  size: number;
  horizontal?: boolean;
};

const Spacer = ({size, horizontal}: SpacerProps) => {
  const defaultValue = 'auto';
  return (
    <View
      style={{
        width: horizontal ? size : defaultValue,
        height: !horizontal ? size : defaultValue,
      }}
    />
  );
};

export default Spacer;

const styles = StyleSheet.create({});
