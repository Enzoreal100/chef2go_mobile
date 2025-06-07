import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Header } from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { ChefsCard } from "@/components/chefsCard/chefsCard";
import { colors } from '@/constants/color.constants';
import { FontAwesome } from '@expo/vector-icons';
import allChefsData from '@/constants/chefsMockDB'; // ajuste o caminho conforme sua estrutura
import { Chef } from '@/constants/chefProps.interface';

const MessageScreen = () => {
  const favoriteChefs: Chef[] = allChefsData.filter((chef) => chef.IsFavorite);

  const renderChef = ({ item }: { item: Chef }) => (
    <TouchableOpacity style={styles.chefContainer}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.messageInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          Chat sobre {item.cuisine}
        </Text>
      </View>
      <View style={styles.metaInfo}>
        <Text style={styles.time}>09:18</Text>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>2</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        greeting="Mensagens"
        subtitle="Suas conversas com nossos chefs"
        profileImageUri="https://mmdbbucket.s3.sa-east-1.amazonaws.com/berte.png"
        searchPlaceholder="Buscar seus chats..."
      />


      <FlatList
        data={favoriteChefs}
        keyExtractor={(item) => item.id}
        renderItem={renderChef}
        contentContainerStyle={styles.messagesList}
      />

      <Footer />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    paddingBottom: 80,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 12,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  messagesList: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  chefContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  messageInfo: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
    color: '#333',
  },
  message: {
    fontSize: 13,
    color: '#666',
  },
  metaInfo: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: colors.BASE,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  unreadText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
