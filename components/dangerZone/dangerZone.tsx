import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from '../appButton/appButton';
import { colors } from '@/constants/color.constants';

interface DangerZoneProps {
  onDeleteAccount: () => void;
}

const DangerZone: React.FC<DangerZoneProps> = ({ onDeleteAccount }) => {
  return (
    <View style={styles.container}>
      <AppButton
        title="Deletar Conta"
        onPress={onDeleteAccount}
        style={styles.deleteButton}
        textStyle={styles.deleteButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DANGER_ZONE_BACKGROUND,
    borderRadius: 12,
    padding: 16,
    marginTop: 30,
    marginBottom: 20, // Espaçamento extra para o final da tela
    alignItems: 'center',
    marginHorizontal: 30, // Espaçamento horizontal
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.DANGER_TEXT,
    marginBottom: 15,
  },
  deleteButton: {
    backgroundColor: colors.BASE,
    borderColor: colors.DANGER_BUTTON_BORDER,
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 10,
    width: '80%', // Ajuste conforme necessário
  },
  deleteButtonText: {
    color: colors.DANGER_BUTTON_TEXT,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DangerZone;