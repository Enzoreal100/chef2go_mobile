import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Exemplo, pode ser FontAwesome, MaterialCommunityIcons etc.
import { colors } from '@/constants/color.constants';

interface AppIconButtonProps {
  iconName: keyof typeof Ionicons.glyphMap; // Tipo para ícones do Ionicons
  onPress: () => void;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

const AppIconButton: React.FC<AppIconButtonProps> = ({ iconName, onPress, size = 24, color = colors.BG, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Ionicons name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 50, // Para botões circulares
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppIconButton;