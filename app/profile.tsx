import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
// import StatCard from '../components/StatCard';
// import MenuItem from '../components/MenuItem';
// import BookingCard from '../components/BookingCard';
// import SectionHeader from '../components/SectionHeader';
import ProfileHeader from '@/components/profileHeader/profileHeader';
import StatCard from '@/components/statCard/statCard';
import { colors } from '@/constants/color.constants';
import MenuItem from '@/components/menuItem/menuItem';
import BookingCard from '@/components/bookingCard/bookingCard';
import SectionHeader from '@/components/sectionHeader/sectionHeader';
import { useRouter } from 'expo-router';
import { photo } from '@/constants/photos.constant';

const Profile: React.FC = () => {

  const router = useRouter();

  const handleEditProfile = () => {
    router.push('/editProfile'); // Navega para a tela de edição de perfil
  };

  const handleStatPress = (stat: string) => {
    console.log(`Ver ${stat}`);
  };

  const handleMenuItemPress = (item: string) => {
    console.log(`Navegar para ${item}`);
  };

  const handleSeeAllBookings = () => {
    console.log('Ver todas as reservas');
  };

  const handleGoBack = () => {
    console.log('Voltar'); // Implementar navegação real aqui
  };

  const handleOpenChat = () => {
    console.log('Abrir chat');
  };
  



  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        <ProfileHeader
          avatarUri={photo.berte} 
          name="Guilherme Berte"
          email="guilhermeberte@email.com"
          onEditProfile={handleEditProfile}
        />

        <View style={styles.statsContainer}>
          <StatCard value={12} label="Reservas" onPress={() => handleStatPress('Bookings')} />
          <View style={styles.statDivider} />
          <StatCard value={3} label="Favoritos" onPress={() => handleStatPress('Favorites')} />
          <View style={styles.statDivider} />
          <StatCard value={7} label="Reviews" onPress={() => handleStatPress('Reviews')} />
        </View>

        <View style={styles.menuGrid}>
          <MenuItem
            iconName="book-multiple"
            iconFamily="MaterialCommunityIcons"
            title="Minhas Reservas"
            onPress={() => handleMenuItemPress('My Bookings')}
            showChevron={false}
            style={styles.gridItem}
            color={colors.BASE} // Cor primária do design
          />
          <MenuItem
            iconName="star-outline"
            iconFamily="MaterialCommunityIcons"
            title="Favoritos"
            onPress={() => handleMenuItemPress('Favorites')}
            showChevron={false}
            style={styles.gridItem}
            color={colors.BASE} // Cor para favoritos
          />
          <MenuItem
            iconName="cog"
            iconFamily="FontAwesome"
            title="Configurações"
            onPress={() => handleMenuItemPress('Settings')}
            showChevron={false}
            style={styles.gridItem}
            color={colors.BASE} // Cor para configurações
          />
          <MenuItem
            iconName="headset"
            iconFamily="MaterialCommunityIcons"
            title="Suporte"
            onPress={() => handleMenuItemPress('Support')}
            showChevron={false}
            style={styles.gridItem}
            color={colors.BASE} // Cor para suporte
          />
        </View>

        <SectionHeader title="Reservas Recentes" onSeeAll={handleSeeAllBookings} />

        <View style={styles.bookingsList}>
          <BookingCard
            avatarUri="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Marco Rossi"
            details="Jantar Italiano · 2 Mai, 19:00"
            status="Completa"
          />
          <BookingCard
            avatarUri="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Sarah Chen"
            details="Asian Fusion · 12 Jun, 20:00"
            status="Próxima"
          />
        </View>
        
        <View style={styles.mainMenu}>
          <MenuItem
            iconName="account-outline"
            iconFamily="MaterialCommunityIcons"
            title="Minha Conta"
            onPress={() => handleMenuItemPress('Account')}
            color="#E0E0E0"
          />
          <MenuItem
            iconName="bell-outline"
            iconFamily="MaterialCommunityIcons"
            title="Notificações"
            onPress={() => handleMenuItemPress('Notifications')}
            color="#E0E0E0"
          />
          <MenuItem
            iconName="help-circle-outline"
            iconFamily="MaterialCommunityIcons"
            title="Central de Ajuda"
            onPress={() => handleMenuItemPress('Help Center')}
            color="#E0E0E0"
          />
          <MenuItem
            iconName="logout"
            iconFamily="MaterialCommunityIcons"
            title="Sair"
            onPress={() => handleMenuItemPress('Logout')}
            color="#FF4500" // Cor para Logout
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BG, // Cor de fundo geral escura
    marginBottom: 70, // Espaçamento inferior para evitar sobreposição com botões
    marginTop: 40, // Espaçamento superior para evitar sobreposição com o cabeçalho
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    position: 'absolute', // Para sobrepor ao conteúdo do cabeçalho
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // Garante que esteja acima de outros elementos
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 20, // Espaçamento inferior para o ScrollView
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.CARD, // Cor de fundo para a seção de estatísticas
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 20, // Espaçamento do cabeçalho
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#3A3A3A',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.CARD, // Cor de fundo para a grade de menu
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden', // Para que as bordas dos itens internos não vazem
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  gridItem: {
    width: '50%', // Duas colunas
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingsList: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  mainMenu: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.CARD, // Cor de fundo para o menu principal
    borderRadius: 10,
    overflow: 'hidden',
  }
});

export default Profile;