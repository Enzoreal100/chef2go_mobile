import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppText from '../appText/appText';
import AppButton from '../appButton/appButton';
import { colors } from '@/constants/color.constants';


interface ProfileHeaderProps {
  avatarUri: string;
  name: string;
  email: string;
  onEditProfile: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ avatarUri, name, email, onEditProfile }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatarUri }} style={styles.avatar} />
        <TouchableOpacity style={styles.cameraIcon}>
          <FontAwesome name="camera" size={18} color="#FFF" />
        </TouchableOpacity>
      </View>
      <AppText style={styles.name}>{name}</AppText>
      <AppText style={styles.email}>{email}</AppText>
      <AppButton
        title="Edit Profile"
        onPress={onEditProfile}
        style={styles.editButton}
        textStyle={styles.editButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.CARD, // Cor de fundo do cabeçalho
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.BASE, // Cor da borda do avatar
    backgroundColor: colors.BG, // Cor de fundo do avatar
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,  // Sombra do avatar 
    }
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.BASE, // Cor de fundo do ícone da câmera
    borderRadius: 15,
    padding: 6,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.BASE, // Cor do texto do nome
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: colors.BASE,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: colors.BASE,
    color: colors.BASE,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: 'auto', // Ajusta o tamanho do botão
  },
  editButtonText: {
    color: '#6C4CE6',
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default ProfileHeader;