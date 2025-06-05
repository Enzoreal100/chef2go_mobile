import { ChefsCard } from "@/components/chefsCard/chefsCard";
import { ChefFilterButtons } from "@/components/chefsFilterButtons/chefsFilterButtons";
import { ChefCardsCarousel } from "@/components/featuredChefCardCarousel/featuredChefCardCarousel";
import { Header } from "@/components/header/header";
import { HeaderProps } from "@/components/header/headerProps.interface";
import { allChefsData } from "@/constants/chefsMockDB";
import { colors } from "@/constants/color.constants";
import { Text } from "@react-navigation/elements";
import { useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const headerProps: HeaderProps = {
  greeting: "Olá, Guilherme!",
  subtitle: "Ache o chef perfeito",
  profileImageUri: "https://cdn.discordapp.com/attachments/1349007002399150182/1380004915409326280/image.png?ex=68424d3b&is=6840fbbb&hm=7c5e19ef761fdaf400ecf280e201a42ec9167c0e1308c7fd867c06c6daa0c9ea&",
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
  safeArea: {
    flex: 1, // Faz a SafeAreaView ocupar toda a altura da tela
    backgroundColor: colors.BG, 
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
