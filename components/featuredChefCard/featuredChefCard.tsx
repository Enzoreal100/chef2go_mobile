// src/components/ChefCard.tsx
import { Chef } from "@/constants/chefProps.interface";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const ChefCard: React.FC<Chef> = ({
  name,
  cuisine,
  rating,
  priceRange,
  image,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.chefImage} />
      <View style={styles.textContainer}>
        <Text style={styles.chefName}>{name}</Text>
        <Text style={styles.chefSpecialty}>{cuisine}</Text>
        <View style={styles.detailsRow}>
          <Icon name="star" size={16} color="#FFD700" style={styles.starIcon} />
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          <Text style={styles.priceRange}>{priceRange}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: "hidden",
    width: 300,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    minHeight: 350,
  },
  chefImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 16,
  },
  chefName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  chefSpecialty: {
    fontSize: 16,
    color: "#CCCCCC",
    marginBottom: 8,
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    marginRight: 4,
  },
  rating: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginRight: 8,
  },
  priceRange: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default ChefCard;
