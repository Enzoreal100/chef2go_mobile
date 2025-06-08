import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../appText/appText';
import { colors } from '@/constants/color.constants';

interface BookingCardProps {
  avatarUri: string;
  name: string;
  details: string;
  status: 'Completa' | 'Próxima';
}

const BookingCard: React.FC<BookingCardProps> = ({ avatarUri, name, details, status }) => {
  const statusColor = status === 'Completa' ? '#28a745' : '#ffc107'; // Verde ou Amarelo

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUri }} style={styles.avatar} />
      <View style={styles.info}>
        <AppText style={styles.name}>{name}</AppText>
        <AppText style={styles.details}>{details}</AppText>
      </View>
      <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
        <AppText style={styles.statusText}>{status}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.CARD, // Cor de fundo do card
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.BASE,
  },
  details: {
    fontSize: 13,
    color: colors.BASE,
  },
  statusBadge: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default BookingCard;