import { ChefCardsCarousel } from "@/components/featuredChefCardCarousel/featuredChefCardCarousel";
import { Header } from "@/components/header/header";
import { HeaderProps } from "@/components/header/headerProps.interface";
import { allChefsData } from "@/constants/chefsMockDB";
import { colors } from "@/constants/color.constants";
import { Text } from "@react-navigation/elements";
import React, { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chef } from "@/constants/chefProps.interface";
import { ChefFilterButtons } from "@/components/chefsFilterButtons/chefsFilterButtons";
import { ChefsCard } from "@/components/chefsCard/chefsCard";

const headerProps: HeaderProps = {
  greeting: "Olá, Guilherme!",
  subtitle: "Ache o chef perfeito",
  profileImageUri: "https://mmdbbucket.s3.sa-east-1.amazonaws.com/berte.png",
  searchPlaceholder: "Procure por um chef, cozinha...",
};

// Função de ordenação isolada. Ela só será chamada UMA VEZ na inicialização do estado.
const sortChefs = (chefs: Chef[]) => {
  return [...chefs].sort((a, b) => {
    // Mantendo IsFavorite em PascalCase, conforme seu feedback
    if (a.IsFavorite && !b.IsFavorite) {
      return -1;
    }
    if (!a.IsFavorite && b.IsFavorite) {
      return 1;
    }
    return b.rating - a.rating;
  });
};

export default function Index() {
  // ALTERAÇÃO 1: Inicializa o estado dos chefs JÁ ORDENADO.
  // Esta função de inicialização só é executada na PRIMEIRA renderização.
  const [chefsData, setChefsData] = useState<Chef[]>(() => sortChefs(allChefsData));

  const [selectedCuisine, setSelectedCuisine] = useState("All Chefs");

  const availableCuisines = useMemo(() => {
    // Note que availableCuisines ainda depende de chefsData.
    // Isso é bom, pois se chefsData mudar (mesmo que a ordem não), as opções de filtro podem ser atualizadas.
    const cuisines = new Set(chefsData.map((chef) => chef.cuisine));
    return ["All Chefs", ...Array.from(cuisines).sort()];
  }, [chefsData]);

  const handleToggleFavorite = (chefId: string) => {
    setChefsData((prevChefs) => {
      const updatedChefs = prevChefs.map((chef) =>
        // Manter IsFavorite em PascalCase
        chef.id === chefId ? { ...chef, IsFavorite: !chef.IsFavorite } : chef
      );
      // ALTERAÇÃO 2: Aqui, a lista 'updatedChefs' é retornada SEM re-ordenação.
      // O 'useMemo' de filteredChefs abaixo usará esta lista na ordem atual.
      console.log(`Chef ${chefId} favorito: ${!prevChefs.find(c => c.id === chefId)?.IsFavorite}`);
      return updatedChefs;
    });
  };

  // ALTERAÇÃO 3: filteredChefs AGORA SÓ FILTRA.
  // Ele não aplica mais a ordenação, confiando na ordem que 'chefsData' já possui.
  const filteredChefs = useMemo(() => {
    if (selectedCuisine === "All Chefs") {
      return chefsData; // Retorna a lista chefsData na sua ordem atual (inicialmente ordenada)
    }
    return chefsData.filter((chef) => chef.cuisine === selectedCuisine);
  }, [selectedCuisine, chefsData]); // Depende do filtro e dos dados (para re-filtrar se chefsData mudar)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header {...headerProps} />
        <ChefCardsCarousel />
        <Text style={styles.screenHeader}>Nearby Chefs</Text>
        <ChefFilterButtons
          cuisines={availableCuisines}
          selectedCuisine={selectedCuisine}
          onSelectCuisine={setSelectedCuisine}
        />
        <ChefsCard
          chefs={filteredChefs} // Passa os chefs FILTRADOS, mas na ordem definida na inicialização
          onToggleFavorite={handleToggleFavorite}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  screenHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.BASE,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 10,
  },
});