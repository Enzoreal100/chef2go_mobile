import { ChefsCard } from "@/components/chefsCard/chefsCard";
import { ChefFilterButtons } from "@/components/chefsFilterButtons/chefsFilterButtons";
import { ChefCardsCarousel } from "@/components/featuredChefCardCarousel/featuredChefCardCarousel";
import { Header } from "@/components/header/header";
import { HeaderProps } from "@/components/header/headerProps.interface";
import { Text } from "@react-navigation/elements";
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { allChefsData } from "../constants/chefsMockDB";

const headerProps: HeaderProps = {
  greeting: "Olá, Usuário!",
  subtitle: "Ache o chef perfeito",
  profileImageUri: "https://placehold.co/50x50",
  searchPlaceholder: "Procure por um chef, cozinha...",
};

const chefs = allChefsData;
export default function Index() {
  const [selectedCuisine, setSelectedCuisine] = useState("All Chefs"); // Estado para o filtro selecionado

  // Extrai todas as cozinhas únicas e adiciona 'All Chefs' no início
  const availableCuisines = useMemo(() => {
    const cuisines = new Set(chefs.map((chef) => chef.cuisine));
    return ["All Chefs", ...Array.from(cuisines).sort()];
  }, [chefs]);

  // Filtra os chefs com base na cozinha selecionada
  const filteredChefs = useMemo(() => {
    if (selectedCuisine === "All Chefs") {
      return chefs;
    }
    return chefs.filter((chef) => chef.cuisine === selectedCuisine);
  }, [selectedCuisine]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1C1C1C" }}>
      <ScrollView>
        <Header {...headerProps} />
        <ChefCardsCarousel />
        <Text style={styles.screenHeader}>Nearby Chefs</Text>
        <ChefFilterButtons
          cuisines={availableCuisines}
          selectedCuisine={selectedCuisine}
          onSelectCuisine={setSelectedCuisine}
        />
        <ChefsCard chefs={filteredChefs} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 10,
  },
});
