import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {sizes} from '../../constants/sizes';
import {colors} from '../../constants/colors';
import Type from '../type/type.component';
import Spacer from '../spacer/spacer.component';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
  subtitle: string;
  subtitleWidth?: string;
  backIcon?: boolean;
};

const Header = ({
  title,
  subtitle,
  subtitleWidth = '100%',
  backIcon = true,
}: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {backIcon && (
        <>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="chevron-back"
              size={30}
              color="black"
              style={{
                marginLeft: -6,
              }}
            />
          </Pressable>
          <Spacer size={sizes.xs} />
        </>
      )}
      <Type variant="title">{title}</Type>
      <Spacer size={sizes.xs} />
      <Type width={subtitleWidth}>{subtitle}</Type>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: sizes.sm,
    borderBottomColor: colors.bg.secondary,
    borderBottomWidth: 1,
  },
});
