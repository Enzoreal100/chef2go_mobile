import { Header } from "@/components/header/header";
import { HeaderProps } from "@/components/header/headerProps.interface";
import { View } from "react-native";
import { ChefsCard } from "@/components/chefsCard/chefsCard";

const headerProps: HeaderProps = {
  greeting: 'Olá, Usuário!',
  subtitle: 'Ache o chef perfeito',
  profileImageUri: 'https://placehold.co/50x50',
  searchPlaceholder: 'Procure por um chef, cozinha...'

}
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: '#1C1C1C' }}>
      <Header {...headerProps} />
      <ChefsCard />
    </View>
  );
}
