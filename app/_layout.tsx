// app/_layout.tsx
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Stack, router, usePathname } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IndexRouteParams } from "./types/routeParams";

export default function RootLayout() {
  const pathname = usePathname();
  
  const handleChatPress = () => {
    router.navigate('/chatbot' as any);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
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


          <Stack.Screen 
            name="chatbot" 
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="profile" // Corresponde ao arquivo app/profile.tsx
            options={({ route }) => {

              return {
                headerShown: false,
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

             <Stack.Screen
        name="favorites" // Corresponde ao arquivo app/favorites.tsx
        options={({ route }) => {

          return {
            headerShown: false,
          };
        }}
      /> 

      <Stack.Screen
        name="search" // Corresponde ao arquivo app/search.tsx
        options={({ route }) => {

          return {
            headerShown: false,
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
        <Footer />
        
        {/* Botão flutuante do chatbot - só aparece quando não está na tela do chatbot */}
        {pathname !== '/chatbot' && (
          <TouchableOpacity 
            style={styles.floatingChatButton} 
            onPress={handleChatPress}
          >
            <Text style={styles.chatIcon}>💬</Text>
          </TouchableOpacity>
        )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  floatingChatButton: {
    position: 'absolute',
    bottom: 110,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#71200a',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 1000,
  },
  chatIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});
