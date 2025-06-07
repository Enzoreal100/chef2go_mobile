import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const Reviews = () => {
  return (
    <View style={styles.card}>
      <View style={styles.reviewHeader}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.reviewItem}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        <View>
          <Text style={styles.reviewerName}>Sofia Crepaldi <Text style={styles.rating}>5.0</Text></Text>
          <Text style={styles.reviewText}>O melhor jantar italiano que experimentei!</Text>
        </View>
      </View>

      <View style={styles.reviewItem}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/47.jpg' }} style={styles.avatar} />
        <View>
          <Text style={styles.reviewerName}>Neto Rezende <Text style={styles.rating}>4.8</Text></Text>
          <Text style={styles.reviewText}>Comida incrível e uma apresentação maravilhosa!</Text>
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
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  seeAll: { fontSize: 12, color: '#f97316' },
  reviewHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  reviewItem: { flexDirection: 'row', gap: 12, marginVertical: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  reviewerName: { fontWeight: '600', marginBottom: 4 },
  rating: { color: '#f59e0b' },
  reviewText: { fontSize: 13, color: '#555' },
});
