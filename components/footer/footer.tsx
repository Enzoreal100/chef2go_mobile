// components/footer/footer.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

const Footer: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isRouteActive = (expectedPath: string) => {
    console.log('Verificando rota: ', expectedPath);
    console.log('Rota atual: ', pathname);
    return pathname === expectedPath;
  };

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/')}
      >
        <FontAwesome5
          name="home"
          size={24}
          color={isRouteActive('/') ? '#FF6600' : '#FFFFFF'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/search')}
      >
        <FontAwesome5
          name="search"
          size={24}
          color={isRouteActive('search') ? '#FF6600' : '#FFFFFF'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/bookmark')}
      >
        <FontAwesome5
          name="bookmark"
          size={24}
          color={isRouteActive('bookmark') ? '#FF6600' : '#FFFFFF'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/profile')}
      >
        <FontAwesome5
          name="user"
          size={24}
          color={isRouteActive('profile') ? '#FF6600' : '#FFFFFF'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333333',
    height: 80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconButton: {
    padding: 10,
  },
});

export default Footer;