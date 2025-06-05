import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chef } from "@/constants/chefProps.interface";
import { colors } from "@/constants/color.constants";
export interface ChefProps {
  chefs: Chef[]
}
export const ChefsCard: React.FC<ChefProps> = ({ chefs }) => {

return (
    <ScrollView style={styles.scrollViewContent}>
      {chefs.length > 0 ? (
        chefs.map((chef) => (
          <View key={chef.id} style={styles.chefCard}>
            <Image source={{ uri: chef.image }} style={styles.chefImage} />
            <View style={styles.chefInfo}>
              <Text style={styles.chefName}>{chef.name}</Text>
              <Text style={styles.chefCuisine}>{chef.cuisine}</Text>
              <View style={styles.ratingDistance}>
                <AntDesign name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>{chef.rating}</Text>
                <Text style={styles.distanceText}> • {chef.distance} km away</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookButton}>
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
  scrollViewContent: {
  },
  chefCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.CARD,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
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
    fontWeight: 'bold',
    color: colors.BASE,
  },
  chefCuisine: {
    fontSize: 14,
    color: colors.BASE,
    marginTop: 2,
  },
  ratingDistance: {
    flexDirection: 'row',
    alignItems: 'center',
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
  bookButton: {
    backgroundColor: colors.BASE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bookButtonText: {
    color: colors.CARD,
    fontWeight: 'bold',
    fontSize: 16,
  },
  noChefsText: {
    color: colors.BASE,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
  }
});