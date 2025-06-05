import { colors } from "@/constants/color.constants";
import React, { useRef } from "react"; // Importe useRef
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"; // Importe TouchableOpacity
import { HeaderProps } from "./headerProps.interface";

export const Header: React.FC<HeaderProps> = ({
  greeting,
  subtitle,
  profileImageUri,
  searchPlaceholder,
}) => {
  // Crie uma referência para o TextInput
  const searchInputRef = useRef<TextInput>(null);

  // Função para focar no TextInput quando a área de busca for clicada
  const handleSearchPress = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.greetingText}>{greeting}</Text>
          <Text style={styles.subtitleText}>{subtitle}</Text>
        </View>
        <Image
          source={
            typeof profileImageUri === "string"
              ? { uri: profileImageUri }
              : profileImageUri
          }
          style={styles.profileImage}
        />
      </View>

      {/* Envolver a área de busca em TouchableOpacity para torná-la clicável */}
      <TouchableOpacity
        style={styles.searchBarContainer}
        onPress={handleSearchPress} // Chama a função quando clicado
        activeOpacity={0.8} // Opcional: Define a opacidade ao tocar
      >
        <TextInput
          ref={searchInputRef} // Atribua a referência ao TextInput
          style={styles.searchBar}
          placeholder={searchPlaceholder}
          placeholderTextColor="#888"
          // Opcional: Para focar automaticamente ao montar o componente (não recomendado para um header)
          // autoFocus={true}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.CARD,
    padding: 20,
    paddingTop: 50,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greetingText: {
    color: colors.BASE,
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitleText: {
    color: colors.BASE,
    fontSize: 16,
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "green",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.BG,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBar: {
    flex: 1,
    color: colors.SEARCH_TEXT,
    fontSize: 16,
    // Garante que o TextInput ocupe o espaço e seja clicável por toda a sua área
    padding: 0, // Remover padding padrão para melhor controle
  },
  searchIcon: {
    color: "#A0A0A0",
    fontSize: 20,
    marginLeft: 10,
  },
});
