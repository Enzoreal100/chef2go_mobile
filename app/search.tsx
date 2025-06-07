import { ChefsCard } from '@/components/chefsCard/chefsCard';
import Footer from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { ChefFilterButtons } from '@/components/chefsFilterButtons/chefsFilterButtons';
import { Chef } from '@/constants/chefProps.interface';
import allChefsData from '@/constants/chefsMockDB';
import { colors } from '@/constants/color.constants';

import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const cuisineOptions = ['French Cuisine', 'Mexican Traditional', 'Brazilian Regional', 'Japanese Sushi', 'Vegan & Organic',];
const filters = ['Rating 4.5+', 'Perto de mim',];

const SearchScreen = () => {
  const [chefs, setChefs] = useState<Chef[]>(allChefsData);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const toggleFavorite = (chefId: string) => {
    setChefs((prev) =>
      prev.map((chef) =>
        chef.id === chefId ? { ...chef, IsFavorite: !chef.IsFavorite } : chef
      )
    );
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const applyFilters = () => {
    let filtered = allChefsData;

    if (activeFilters.includes('Rating 4.5+')) {
      filtered = filtered.filter((chef) => chef.rating >= 4.5);
    }

    if (activeFilters.includes('Perto de mim')) {
      filtered = filtered.filter((chef) => parseFloat(chef.distance) <= 3);
    }

    if (activeFilters.includes('$$')) {
      filtered = filtered.filter((chef) => chef.price === '$$');
    }

    if (selectedCuisine) {
      filtered = filtered.filter((chef) => chef.cuisine === selectedCuisine);
    }

    setChefs(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [activeFilters, selectedCuisine]);

  return (
    <View style={styles.container}>
      <Header
        greeting="Encontre seu chef"
        subtitle=""
        profileImageUri="https://mmdbbucket.s3.sa-east-1.amazonaws.com/berte.png"
        searchPlaceholder="Procure por chefs, cozinheiros..."
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        <ChefFilterButtons
          cuisines={cuisineOptions}
          selectedCuisine={selectedCuisine}
          onSelectCuisine={(cuisine) =>
            setSelectedCuisine((prev) => (prev === cuisine ? null : cuisine))
          }
        />

        <View style={styles.filtersContainer}>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filter,
                activeFilters.includes(filter) && styles.activeFilter,
              ]}
              onPress={() => toggleFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilters.includes(filter) && styles.activeFilterText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.resultText}>{chefs.length} chefs found</Text>

        <ChefsCard chefs={chefs} onToggleFavorite={toggleFavorite} />
      </ScrollView>

      <Footer />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
  },
  scroll: {
    padding: 20,
    paddingBottom: 100,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  filter: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterText: {
    color: '#444',
    fontWeight: '500',
  },
  activeFilter: {
    backgroundColor: colors.BASE || '#DDEEFF',
  },
  activeFilterText: {
    color: colors.BG || '#0055AA',
    fontWeight: '700',
  },
  resultText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: colors.BASE,
  },
});
