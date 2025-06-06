import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface AboutProps {
  name: string;
  priceRange: string;
}

export const About: React.FC<AboutProps> = ({ name, priceRange }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>About {name}</Text>
      <Text style={styles.aboutText}>
        Um experiente chef especializado em uma culinária única e saborosa.
Eles trazem paixão a cada prato, usando ingredientes frescos e locais. Disponível para
jantares privados, eventos e muito mais.
      </Text>
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>150+</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{priceRange}</Text>
          <Text style={styles.statLabel}>Price</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>15 yrs</Text>
          <Text style={styles.statLabel}>Experience</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 8 },
  aboutText: { fontSize: 14, color: '#555' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  statBox: { alignItems: 'center', flex: 1 },
  statValue: { fontSize: 16, fontWeight: '700' },
  statLabel: { fontSize: 12, color: '#888' },
});
