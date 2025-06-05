import { CARD_SPACING } from "@/constants/chefCardCarousel.constants";
import { allChefsData } from "@/constants/chefsMockDB";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ChefCard } from "../featuredChefCard/featuredChefCard";

export const ChefCardsCarousel: React.FC = () => {
  const chefsArray = Object.values(allChefsData);
  return (
    <View style={carouselStyles.container}>
      <Carousel
        loop
        width={Dimensions.get("window").width}
        height={Dimensions.get("window").height * 0.5}
        autoPlay={true}
        autoPlayInterval={3000}
        data={chefsArray}
        renderItem={({ item }) => (
          <ChefCard
            name={item.name}
            cuisine={item.cuisine}
            rating={item.rating}
            priceRange={item.priceRange}
            image={item.image}
            distance={item.distance}
            id={item.id} // Adicionando a distância
          />
        )}
      />
    </View>
  );
};

const carouselStyles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardWrapper: {
    // Pode adicionar estilos aqui para espaçamento entre os cards
    // Ou aplicar a margem diretamente no ChefCard
    marginHorizontal: CARD_SPACING * 2,
  },
});
