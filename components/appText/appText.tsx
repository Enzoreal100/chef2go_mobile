import { colors } from '@/constants/color.constants';
import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface AppTextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

const AppText: React.FC<AppTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.BASE, // Cor padrão para o tema escuro
  },
});

export default AppText;