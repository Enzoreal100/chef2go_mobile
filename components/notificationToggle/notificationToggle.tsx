import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import AppText from '../appText/appText';
import { colors } from '@/constants/color.constants';

interface NotificationToggleProps {
  title: string;
  description: string;
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
}

const NotificationToggle: React.FC<NotificationToggleProps> = ({ title, description, isEnabled, onToggle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
      <Switch
        trackColor={{ false: colors.SWITCH_OFF_TRACK, true: colors.SWITCH_ON_TRACK }}
        thumbColor={isEnabled ? colors.SWITCH_ON_THUMB : colors.SWITCH_OFF_THUMB}
        ios_backgroundColor={colors.SWITCH_OFF_TRACK}
        onValueChange={onToggle}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.DIVIDER,
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.TEXT_PRIMARY,
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: colors.TEXT_SECONDARY,
  },
});

export default NotificationToggle;