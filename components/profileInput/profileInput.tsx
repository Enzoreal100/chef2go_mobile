import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import AppText from '../appText/appText';
import { colors } from '@/constants/color.constants';
import { Ionicons } from '@expo/vector-icons'; // Para o ícone de localização

interface ProfileInputProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  isLocation?: boolean; // Para exibir o ícone de localização
}

const ProfileInput: React.FC<ProfileInputProps> = ({
  label,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  isLocation,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText style={styles.label}>{label}</AppText>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.TEXT_SECONDARY}
          {...otherProps}
        />
        {isLocation && (
          <Ionicons name="location-outline" size={20} color={colors.TEXT_SECONDARY} style={styles.locationIcon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: colors.TEXT_PRIMARY,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.INPUT_BACKGROUND,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.INPUT_BORDER,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.TEXT_PRIMARY,
  },
  locationIcon: {
    marginLeft: 10,
  }
});

export default ProfileInput;