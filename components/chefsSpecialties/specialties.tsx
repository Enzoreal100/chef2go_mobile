import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface SpecialtiesProps {
  items: string[];
}

export const Specialties: React.FC<SpecialtiesProps> = ({ items }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Especialidades</Text>
      <View style={styles.tagsRow}>
        {items.map((item) => (
          <Text key={item} style={styles.tag}>{item}</Text>
        ))}
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
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    margin: 4,
    fontSize: 12,
  },
});
