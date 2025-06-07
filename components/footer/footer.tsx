// components/footer/footer.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import { colors } from '@/constants/color.constants';

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
          color={isRouteActive('home') ? colors.FOOTER_ACTIVE  : colors.BASE}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/search')}
      >
        <FontAwesome5
          name="search"
          size={24}
          color={isRouteActive('search') ? colors.FOOTER_ACTIVE  : colors.BASE}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/favorites')}
      >
        <FontAwesome5
          name="bookmark"
          size={24}
          color={isRouteActive('favorites') ? colors.FOOTER_ACTIVE  : colors.BASE}
        />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/message')}
      >
        <FontAwesome5
          name="comment-alt"
          size={24}
          color={isRouteActive('message') ? colors.FOOTER_ACTIVE : colors.BASE}
        />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => router.push('/profile')}
      >
        <FontAwesome5
          name="user"
          size={24}
          color={isRouteActive('profile') ? colors.FOOTER_ACTIVE  : colors.BASE}
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
    backgroundColor: colors.CARD,
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