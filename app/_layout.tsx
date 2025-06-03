// app/_layout.tsx
import { Stack } from "expo-router";
import { IndexRouteParams } from "./types/routeParams";
import { Header } from "@/components/header/header";


export default function RootLayout() {
  return (
    <Stack>
      {/*
        Esta Stack.Screen configura a rota 'index'.
        A função `header` será chamada para renderizar o cabeçalho.
        Dentro dela, acessamos `route.params` para obter as props customizadas.
      */}
      <Stack.Screen
        name="index" // Corresponde ao arquivo app/index.tsx
        options={({ route }) => { // <--- RECEBENDO 'route' NAS OPÇÕES DA TELA
          const currentRouteParams = route.params as IndexRouteParams;
          // Definindo valores padrão caso as props não sejam passadas pela página
          const effectiveHeaderProps = {
            ...(currentRouteParams?.headerProps || {}), 
          };

          return {
            headerShown: false, // Oculta o cabeçalho padrão do Stack Navigator
            header: () => ( // <--- RENDERIZANDO SEU COMPONENTE HEADER DIRETAMENTE AQUI
              <Header {...effectiveHeaderProps}/>
            ),
          };
        }}
      />

      {/* Exemplo para outra rota, como 'profile' */}
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
  );
}