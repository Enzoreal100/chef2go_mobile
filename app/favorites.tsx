import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Header } from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ChefsCard } from "@/components/chefsCard/chefsCard";
import { Chef } from "@/constants/chefProps.interface";
import { colors } from "@/constants/color.constants";
import allChefsData from "@/constants/chefsMockDB";

// Supondo que a lista completa de chefs já esteja disponível aqui (vinda de props, contexto ou API)
const chefsData: Chef[] = allChefsData;

export default function Favorites() {
  const [chefs, setChefs] = useState<Chef[]>(chefsData);

  const handleToggleFavorite = (chefId: string) => {
    const updated = chefs.map((chef) =>
      chef.id === chefId ? { ...chef, IsFavorite: !chef.IsFavorite } : chef
    );
    setChefs(updated);
  };

  const favoriteChefs = chefs.filter((chef) => chef.IsFavorite);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        greeting="Seus favoritos"
        subtitle="Chefs que você salvou"
        profileImageUri="https://mmdbbucket.s3.sa-east-1.amazonaws.com/berte.png"
        searchPlaceholder="Buscar chefs..."
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subtitle}>Explore os chefs que você marcou como favoritos.</Text>
      </View>

      <View style={styles.chefsContainer}>
        <ChefsCard chefs={favoriteChefs} onToggleFavorite={handleToggleFavorite} />
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.BASE,
  },
  subtitle: {
    fontSize: 14,
    color: colors.BASE,
    marginTop: 4,
    marginBottom: 12,
  },
  chefsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100, // espaço para o Footer
  },
});
