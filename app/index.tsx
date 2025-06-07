import { ChefCardsCarousel } from "@/components/featuredChefCardCarousel/featuredChefCardCarousel";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ChefCardsCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
