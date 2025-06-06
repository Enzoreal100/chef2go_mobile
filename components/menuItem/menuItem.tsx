import React from 'react';
import { TouchableOpacity, StyleSheet, View, TextStyle, ViewStyle } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AppText from '../appText/appText';
import { colors } from '@/constants/color.constants';

type IconFamily = 'FontAwesome' | 'MaterialCommunityIcons' | 'Ionicons';

interface MenuItemProps {
  iconName: string;
  iconFamily: IconFamily;
  title: string;
  onPress: () => void;
  showChevron?: boolean;
  color?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const MenuItem: React.FC<MenuItemProps> = ({
  iconName,
  iconFamily,
  title,
  onPress,
  showChevron = true,
  color = colors.BASE, // Cor padrão para o ícone
  style,
  textStyle,
}) => {
  const renderIcon = () => {
    switch (iconFamily) {
      case 'FontAwesome':
        return <FontAwesome name={iconName as any} size={24} color={color} />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={iconName as any} size={24} color={color} />;
      case 'Ionicons':
        return <Ionicons name={iconName as any} size={24} color={color} />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.leftContent}>
        {renderIcon()}
        <AppText>{title}</AppText>
      </View>
      {showChevron && (
        <Ionicons name="chevron-forward" size={20} color="#A0A0A0" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginLeft: 15,
    color: colors.BASE, // Cor padrão para o texto
  },
});

export default MenuItem;