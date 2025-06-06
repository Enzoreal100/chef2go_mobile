import { chefs } from '@/constants/chefsMockDB';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from "@/constants/color.constants";
import { About, AboutProps } from '@/components/chefAbout/about';
import { Specialties } from '@/components/chefsSpecialties/specialties';
import { Reviews } from '@/components/chefsReview/reviews';

const aboutProps: AboutProps = {
  name: `this Chef`,
  priceRange: `$$$`
}

export default function ChefProfile() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const chef = chefs.find((c) => String(c.id) === String(id));

  if (!chef) {
    return (
      <View style={styles.container}>
        <Text style={{ padding: 20, textAlign: 'center' }}>Chef not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chef Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <Image source={{ uri: chef.image }} style={styles.avatar} />
        <Text style={styles.name}>{chef.name}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFA500" />
          <Text style={styles.rating}>{chef.rating}</Text>
          <Text style={styles.ratingText}>Reviews</Text>
        </View>
        <View style={styles.tagsRow}>
          <Text style={styles.tag}>{chef.cuisine}</Text>
          <Text style={[styles.tag, styles.available]}>Available</Text>
        </View>
      </View>

    
      <About {...aboutProps} />
      
      <Specialties items={['Pasta', 'Risotto', 'Tiramisu', 'Seafood', 'Cooking Classes']} />

      <Reviews></Reviews>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book {chef.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  backIcon: { marginRight: 8 },
  headerTitle: { fontSize: 20, fontWeight: '600' },
  profileSection: { alignItems: 'center', padding: 16 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: '700' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  rating: { marginLeft: 4, fontWeight: '600' },
  ratingText: { marginLeft: 6, color: 'gray' },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    margin: 4,
    fontSize: 12,
  },
  available: { backgroundColor: '#c6f6d5', color: '#22543d' },
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
  button: {
    backgroundColor: colors.BASE,
    margin: 16,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
