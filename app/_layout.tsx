// app/_layout.tsx
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IndexRouteParams } from "./types/routeParams";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* cria o render específico do header pra cada uma das rotas */}
      <Stack>
        <Stack.Screen
          name="index" // Corresponde ao arquivo app/index.tsx
          options={({ route }) => {
            // <--- RECEBENDO 'route' NAS OPÇÕES DA TELA
            const currentRouteParams = route.params as IndexRouteParams;
            // Definindo valores padrão caso as props não sejam passadas pela página
            const effectiveHeaderProps = {
              ...(currentRouteParams?.headerProps || {}),
            };

            return {
              headerShown: false, // Oculta o cabeçalho padrão do Stack Navigator
              header: () => (
                // <--- RENDERIZANDO SEU COMPONENTE HEADER DIRETAMENTE AQUI
                <Header {...effectiveHeaderProps} />
              ),
            };
          }}
        />

        {/* Exemplo para outra rota, como 'profile' */}
        <Stack.Screen
        name="chefProfile" // Corresponde ao arquivo app/profile.tsx
        options={({ route }) => {

          return {
            headerShown: false,
          }
        }}
      />
              {/* <Stack.Screen
        name="profile" // Corresponde ao arquivo app/profile.tsx
        options={({ route }) => {
          const currentRouteParams = route.params as ProfileRouteParams;
          const effectiveHeaderProps = {
            ...(currentRouteParams?.headerProps || {}),
          };

          return {
            headerShown: false,
            header: () => (
              <Header{...effectiveHeaderProps}/>
            ),
          };
        }}
      /> */}
      </Stack>
      <Footer />
    </GestureHandlerRootView>
  );
}
