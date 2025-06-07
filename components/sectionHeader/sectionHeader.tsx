import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from '../appText/appText';
import { colors } from '@/constants/color.constants';

interface SectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
  showSeeAll?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onSeeAll, showSeeAll = true }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      {showSeeAll && onSeeAll && (
        <TouchableOpacity onPress={onSeeAll}>
          <AppText style={styles.seeAllText}>See All</AppText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BASE, // Cor do título
    flex: 1,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.BASE, // Cor do link "See All"
  },
});

export default SectionHeader;