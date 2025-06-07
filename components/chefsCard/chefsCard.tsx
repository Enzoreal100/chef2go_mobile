import { AntDesign, FontAwesome } from "@expo/vector-icons"; // Importe FontAwesome
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Chef } from "@/constants/chefProps.interface";
import { colors } from "@/constants/color.constants";
import { useRouter } from "expo-router";

export interface ChefsCardProps { // Renomeado de ChefProps para evitar conflito com a interface Chef
  chefs: Chef[];
  // NOVO: Adicionar uma prop para lidar com a alternância de favorito
  onToggleFavorite: (chefId: string) => void;
}

export const ChefsCard: React.FC<ChefsCardProps> = ({ chefs, onToggleFavorite }) => {
  const router = useRouter();

  // NOVO: Lógica de ordenação - Favoritos primeiro, depois por rating (ou outra métrica)
  const sortedChefs = [...chefs].sort((a, b) => {
    // Se 'a' é favorito e 'b' não é, 'a' vem antes
    if (a.IsFavorite && !b.IsFavorite) {
      return -1;
    }
    // Se 'b' é favorito e 'a' não é, 'b' vem antes
    if (!a.IsFavorite && b.IsFavorite) {
      return 1;
    }
    // Se ambos são favoritos ou nenhum é favorito, ordene por rating (ou outra prioridade)
    return b.rating - a.rating; // Maior rating primeiro
  });

  return (
    <ScrollView style={styles.scrollViewContent}>
      {sortedChefs.length > 0 ? ( // Usar sortedChefs aqui
        sortedChefs.map((chef) => (
          <View key={chef.id} style={styles.chefCard}>
            <Image source={{ uri: chef.image }} style={styles.chefImage} />
            <View style={styles.chefInfo}>
              <Text style={styles.chefName}>{chef.name}</Text>
              <Text style={styles.chefCuisine}>{chef.cuisine}</Text>
              <View style={styles.ratingDistance}>
                <AntDesign name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{chef.rating}</Text>
                <Text style={styles.distanceText}>
                  {" "}
                  • {chef.distance} km away
                </Text>
              </View>
            </View>

            {/* NOVO: Ícone de Favorito */}
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => onToggleFavorite(chef.id)} // Chama a função do pai
            >
              <FontAwesome
                name={chef.IsFavorite ? "bookmark" : "bookmark-o"} // Ícone preenchido ou outline
                size={24}
                color={ colors.BASE } // Cor diferente se favorito
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.bookButton}
              onPress={() => router.push(`/chefProfile?id=${chef.id}`)}
            >
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.noChefsText}>No chefs found for this cuisine.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {},
  chefCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.CARD,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    // NOVO: Adicionar uma leve elevação ou sombra para destacar
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  chefImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  chefInfo: {
    flex: 1,
  },
  chefName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.BASE,
  },
  chefCuisine: {
    fontSize: 14,
    color: colors.BASE,
    marginTop: 2,
  },
  ratingDistance: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: colors.BASE,
    marginLeft: 5,
  },
  distanceText: {
    fontSize: 14,
    color: colors.BASE,
  },
  // NOVO: Estilo para o botão de favorito
  favoriteButton: {
    padding: 10,
    marginRight: 10, // Espaçamento entre o ícone de favorito e o botão Book
  },
  bookButton: {
    backgroundColor: colors.BASE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bookButtonText: {
    color: colors.CARD,
    fontWeight: "bold",
    fontSize: 16,
  },
  noChefsText: {
    color: colors.BASE,
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});