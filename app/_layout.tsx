// app/_layout.tsx
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Stack, router, usePathname } from "expo-router";
import { Image, ImageComponent, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { IndexRouteParams } from "./types/routeParams";
import React, { useEffect } from "react";
import { photo } from "@/constants/photos.constant";

import { colors } from "@/constants/color.constants";
import { View } from "react-native";

export default function RootLayout() {
  const pathname = usePathname();
  const [appIsReady, setAppIsReady] = React.useState(false);
  
  const handleChatPress = () => {
    router.navigate('/chatbot' as any);
  };

  useEffect(() => {
    async function prepare() {
      try {
        const imageUrlsToPreload = Object.values(photo);
        const preloadPromises = imageUrlsToPreload.map(url => {
          if (url && typeof url === 'string') {
              return Image.prefetch(url);
            };
            return Promise.resolve()
        });    
        await Promise.all(preloadPromises);
      }
      catch (err) {
        console.warn('Error preloading images:', err);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  if (!appIsReady) {
    return (
    <View style={styles.container}>
        <Image
          source={{ uri: photo.chefIA }}
          style={styles.image}
          resizeMode="contain" // Ajusta a imagem para caber sem cortar
        />
    </View>
    );
  }

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
            options={{
              headerShown: false,
            }}
          />
        {/* Exemplo para outra rota, como 'profile' */}
          <Stack.Screen
            name="chefProfile" // Corresponde ao arquivo app/profile.tsx
            options={{
              headerShown: false,
            }}
          />

        <Stack.Screen
          name="favorites" // Corresponde ao arquivo app/favorites.tsx
          options={{
              headerShown: false,
          }}
        /> 

        <Stack.Screen
          name="search" // Corresponde ao arquivo app/search.tsx
          options={{
              headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="message" // Corresponde ao arquivo app/profile.tsx
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="editProfile" // Corresponde ao arquivo app/editProfile.tsx
          options={{
            headerShown: false, // Oculta o cabeçalho padrão do Stack Navigator
          }}
        />
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
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BASE, // Usando a cor de fundo definida no constants
  },
  image: {
    width: 200, // Ajuste o tamanho conforme necessário
    height: 200,
    borderRadius: 30, // Adiciona bordas arredondadas
    zIndex: 1000, // Garante que a imagem fique acima de outros elementos
  },
});
