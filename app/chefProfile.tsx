import { About, AboutProps } from '@/components/chefAbout/about';
import { Reviews } from '@/components/chefsReview/reviews';
import { Specialties } from '@/components/chefsSpecialties/specialties';
import { Chef } from '@/constants/chefProps.interface';
import { allChefsData as chefs } from '@/constants/chefsMockDB';
import { colors } from "@/constants/color.constants";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ChefProfile() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

const chef: Chef = chefs.find((c) => String(c.id) === String(id))!;

const [currentChef, setCurrentChef] = React.useState<Chef>(chef); // <--- LINHA ALTERADA: Removido '| null' e o '|| null'.

useEffect(() => {
    // Aqui também afirmamos que o resultado de find será um Chef.
    setCurrentChef(chefs.find((c) => String(c.id) === String(id))!); // <--- LINHA ALTERADA: Adicionado '!' para afirmar que não é null.
  }, [id]);


  const handleToggleFavorite = () => {
    setCurrentChef((prevChef) => {
      if (prevChef) {
        const updatedChef = {...prevChef, IsFavorite: !prevChef.IsFavorite};
        return updatedChef;
      }
      return prevChef;
    });
      }

  return (
       <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chef Profile</Text>
        {/* NOVO: Ícone de Favorito no cabeçalho ou ao lado do nome */}
        <TouchableOpacity
          style={styles.favoriteButtonHeader} // Novo estilo para este botão
          onPress={handleToggleFavorite}
        >
          <FontAwesome
            name={currentChef.IsFavorite ? "bookmark" : "bookmark-o"} // Ícone preenchido ou outline
            size={24}
            color={currentChef.IsFavorite ? colors.BASE : colors.BG} // Cores para favorito/não favorito
          />
        </TouchableOpacity>
      </View>

      <View style={styles.profileSection}>
        <Image source={{ uri: currentChef.image }} style={styles.avatar} />
        <Text style={styles.name}>{currentChef.name}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFA500" />
          <Text style={styles.rating}>{currentChef.rating}</Text>
          <Text style={styles.ratingText}>Reviews</Text>
        </View>
        <View style={styles.tagsRow}>
          <Text style={styles.tag}>{currentChef.cuisine}</Text>
          <Text style={[styles.tag, styles.available]}>Available</Text>
          {/* Adicione o priceRange aqui, se quiser */}
          {currentChef.priceRange && <Text style={styles.tag}>{currentChef.priceRange}</Text>}
        </View>
      </View>

      {/* NOVO: Ajusta aboutProps para usar dados dinâmicos do chef */}
      <About name={currentChef.name} priceRange={currentChef.priceRange} />

      <Specialties items={['Pasta', 'Risotto', 'Tiramisu', 'Seafood', 'Cooking Classes']} />

      <Reviews></Reviews>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book {currentChef.name}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7', marginBottom: 70, marginTop: 25 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between', // Para espaçar o botão de voltar e o de favorito
  },
  backIcon: { marginRight: 8 },
  headerTitle: { fontSize: 20, fontWeight: '600' },
  // NOVO: Estilo para o botão de favorito no cabeçalho
  favoriteButtonHeader: {
    padding: 8, // Aumenta a área de toque
    // Você pode ajustar a posição exata se quiser que ele fique mais à direita do título,
    // mas 'space-between' no header já ajuda
  },
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