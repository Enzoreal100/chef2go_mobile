import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

  const chefs = [
    {
      id: '1',
      name: 'James Wilson',
      cuisine: 'French Cuisine',
      rating: 4.7,
      distance: 2.5,
      image: 'https://randomuser.me/api/portraits/men/1.jpg', // Imagem aleatória
    },
    {
      id: '2',
      name: 'Maria Garcia',
      cuisine: 'Mexican Traditional',
      rating: 4.9,
      distance: 3.1,
      image: 'https://randomuser.me/api/portraits/women/2.jpg', // Imagem aleatória
    },
    {
      id: '3',
      name: 'Chen Li',
      cuisine: 'Asian Fusion',
      rating: 4.5,
      distance: 1.8,
      image: 'https://randomuser.me/api/portraits/men/3.jpg', // Imagem aleatória
    },
    {
      id: '4',
      name: 'Sophia Rossi',
      cuisine: 'Italian Contemporary',
      rating: 4.8,
      distance: 4.2,
      image: 'https://randomuser.me/api/portraits/women/4.jpg', // Imagem aleatória
    },
    {
      id: '5',
      name: 'David Kim',
      cuisine: 'Korean BBQ',
      rating: 4.6,
      distance: 0.9,
      image: 'https://randomuser.me/api/portraits/men/5.jpg', // Imagem aleatória
    },
    {
      id: '6',
      name: 'Ana Silva',
      cuisine: 'Brazilian Regional',
      rating: 5.0,
      distance: 3.5,
      image: 'https://randomuser.me/api/portraits/women/6.jpg', // Imagem aleatória
    },
    {
      id: '7',
      name: 'Pierre Dubois',
      cuisine: 'Classic French',
      rating: 4.7,
      distance: 2.1,
      image: 'https://randomuser.me/api/portraits/men/7.jpg', // Imagem aleatória
    },
    {
      id: '8',
      name: 'Fatima Zahra',
      cuisine: 'Moroccan Delights',
      rating: 4.4,
      distance: 5.0,
      image: 'https://randomuser.me/api/portraits/women/8.jpg', // Imagem aleatória
    },
    {
      id: '9',
      name: 'Hiroshi Tanaka',
      cuisine: 'Sushi & Sashimi',
      rating: 4.9,
      distance: 1.5,
      image: 'https://randomuser.me/api/portraits/men/9.jpg', // Imagem aleatória
    },
    {
      id: '10',
      name: 'Isabella Costa',
      cuisine: 'Mediterranean Fresh',
      rating: 4.6,
      distance: 2.8,
      image: 'https://randomuser.me/api/portraits/women/10.jpg', // Imagem aleatória
    },
    {
      id: '11',
      name: 'Mark Johnson',
      cuisine: 'American Comfort',
      rating: 4.3,
      distance: 6.1,
      image: 'https://randomuser.me/api/portraits/men/11.jpg', // Imagem aleatória
    },
    {
      id: '12',
      name: 'Sofia Petrov',
      cuisine: 'Eastern European',
      rating: 4.7,
      distance: 3.9,
      image: 'https://randomuser.me/api/portraits/women/12.jpg', // Imagem aleatória
    },
    {
      id: '13',
      name: 'Antonio Morales',
      cuisine: 'Spanish Tapas',
      rating: 4.8,
      distance: 0.7,
      image: 'https://randomuser.me/api/portraits/men/13.jpg', // Imagem aleatória
    },
    {
      id: '14',
      name: 'Lena Schmidt',
      cuisine: 'German Modern',
      rating: 4.2,
      distance: 4.5,
      image: 'https://randomuser.me/api/portraits/women/14.jpg', // Imagem aleatória
    },
    {
      id: '15',
      name: 'Omar Hassan',
      cuisine: 'Middle Eastern',
      rating: 4.5,
      distance: 1.2,
      image: 'https://randomuser.me/api/portraits/men/15.jpg', // Imagem aleatória
    },
    {
      id: '16',
      name: 'Chloe Dubois',
      cuisine: 'Vegan & Organic',
      rating: 4.9,
      distance: 2.3,
      image: 'https://randomuser.me/api/portraits/women/16.jpg', // Imagem aleatória
    },
    {
      id: '17',
      name: 'Rohan Sharma',
      cuisine: 'Indian Spicy',
      rating: 4.6,
      distance: 5.8,
      image: 'https://randomuser.me/api/portraits/men/17.jpg', // Imagem aleatória
    },
    {
      id: '18',
      name: 'Elena Petrova',
      cuisine: 'Russian Home',
      rating: 4.1,
      distance: 3.0,
      image: 'https://randomuser.me/api/portraits/women/18.jpg', // Imagem aleatória
    },
    {
      id: '19',
      name: 'Javier Gomez',
      cuisine: 'Peruvian Nikkei',
      rating: 5.0,
      distance: 0.5,
      image: 'https://randomuser.me/api/portraits/men/19.jpg', // Imagem aleatória
    },
    {
      id: '20',
      name: 'Sophie Müller',
      cuisine: 'Swiss Fine Dining',
      rating: 4.8,
      distance: 2.7,
      image: 'https://randomuser.me/api/portraits/women/20.jpg', // Imagem aleatória
    },
  ];

export const ChefsCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chefes Próximos</Text>
      <ScrollView>
        {chefs.map((chef) => (
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
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C", // Dark background
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  chefCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2A2A2A", // Slightly lighter dark for cards
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  chefImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Makes the image round
    marginRight: 15,
  },
  chefInfo: {
    flex: 1,
  },
  chefName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  chefCuisine: {
    fontSize: 14,
    color: "#BBBBBB",
    marginTop: 2,
  },
  ratingDistance: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: "#FFFFFF",
    marginLeft: 5,
  },
  distanceText: {
    fontSize: 14,
    color: "#BBBBBB",
  },
  bookButton: {
    backgroundColor: "#E65100", // Orange color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
