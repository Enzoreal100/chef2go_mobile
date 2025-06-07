import React from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { ChefFilterButtonsProps } from '../../constants/chefs-filter-buttons.interface';
import { colors } from '@/constants/color.constants';


export const ChefFilterButtons: React.FC<ChefFilterButtonsProps> = ({
  cuisines,
  selectedCuisine,
  onSelectCuisine,
}) => {
  interface RenderItemProps {
    item: string;
  }

  const renderItem = ({ item }: RenderItemProps) => (
    <TouchableOpacity
      style={[
        styles.button,
        selectedCuisine === item && styles.selectedButton,
      ]}
      onPress={() => onSelectCuisine(item)}
    >
      <Text
        style={[
          styles.buttonText,
          selectedCuisine === item && styles.selectedButtonText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cuisines}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    marginBottom: 20,
  },
  flatListContent: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.UNACTIVE_BUTTON,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor:  colors.UNACTIVE_BUTTON,
  },
  selectedButton: {
    backgroundColor: colors.BASE,
    borderColor: colors.BASE,
  },
  buttonText: {
    color: colors.BASE,
    fontSize: 16,
    fontWeight: '500',
  },
  selectedButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});