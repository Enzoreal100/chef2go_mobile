import { Header } from "@/components/header/header";
import { HeaderProps } from "@/components/header/headerProps.interface";
import { Text, View } from "react-native";

const headerProps: HeaderProps = {
  greeting: 'Olá, Usuário!',
  subtitle: 'Ache o chef perfeito',
  profileImageUri: 'https://placehold.co/50x50',
  searchPlaceholder: 'Procure por um chef, cozinha...'

}
export default function Index() {
  return (
    <View>
      <Header {...headerProps} />
      <Text>Vasco!</Text>
    </View>
  );
}
