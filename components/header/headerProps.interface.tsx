import { ImageSourcePropType } from "react-native";

export interface HeaderProps {
  greeting: string;
  subtitle: string;
  profileImageUri: string | ImageSourcePropType;
  searchPlaceholder: string // Aceita URI de string ou require() para imagens locais
}