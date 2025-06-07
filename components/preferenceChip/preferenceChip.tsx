import React from 'react';
import { TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import AppText from '../appText/appText';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/color.constants';

interface PreferenceChipProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PreferenceChip: React.FC<PreferenceChipProps> = ({ label, isSelected, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        isSelected ? styles.selectedChip : styles.unselectedChip,
        style,
      ]}
      onPress={onPress}
    >
      {isSelected && (
        <Ionicons name="checkmark-circle" size={18} color={colors.ACCENT_TEXT} style={styles.checkmarkIcon} />
      )}
      {/* ALTERAÇÃO AQUI: Use .filter(Boolean) para remover valores falsy (incluindo undefined) */}
      <AppText style={[
        isSelected ? styles.selectedText : styles.unselectedText,
        textStyle, // Inclua textStyle aqui, e o filter(Boolean) cuidará do undefined
      ].filter(Boolean) as TextStyle[] // O 'as TextStyle[]' afirma o tipo para o TypeScript
      }>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  selectedChip: {
    backgroundColor: colors.CHIP_SELECTED_BACKGROUND,
    borderColor: colors.CHIP_SELECTED_TEXT,
  },
  unselectedChip: {
    backgroundColor: colors.CHIP_BACKGROUND,
    borderColor: colors.CHIP_BORDER,
  },
  checkmarkIcon: {
    marginRight: 5,
  },
  selectedText: {
    color: colors.ACCENT_TEXT,
    fontWeight: 'bold',
    fontSize: 14,
  },
  unselectedText: {
    color: colors.TEXT_PRIMARY,
    fontSize: 14,
  },
});

export default PreferenceChip;