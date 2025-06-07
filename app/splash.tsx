import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

interface SplashScreenProps {
  imageUrl: string;
  backgroundColor: string; // Cor de fundo que você obteve da imagem
}

const CustomSplashScreen: React.FC<SplashScreenProps> = ({ imageUrl, backgroundColor }) => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Mantenha a tela de splash visível enquanto os recursos são carregados
        await SplashScreen.preventAutoHideAsync();

        // Simule o carregamento de recursos do aplicativo (imagens, fontes, etc.)
        // Substitua isso pelo seu código de carregamento real
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simula 2 segundos de carregamento

      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (isAppReady) {
      // Oculta a tela de splash quando o aplicativo estiver pronto
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar backgroundColor={backgroundColor} barStyle="light-content" /> {/* Barra de status da mesma cor */}
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain" // Ajusta a imagem para caber sem cortar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Ajuste o tamanho conforme necessário
    height: 200,
  },
});

export default CustomSplashScreen;