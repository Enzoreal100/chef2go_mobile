import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../appText/appText';
import { colors } from '@/constants/color.constants';


interface StatCardProps {
  value: number;
  label: string;
  onPress: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.value}>{value}</AppText>
      <AppText style={styles.label}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BASE, // Cor primária do design
  },
  label: {
    fontSize: 12,
    color: colors.BASE,
  },
});

export default StatCard;