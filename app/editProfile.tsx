import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // FontAwesome para câmera
import { useRouter } from 'expo-router';
import AppText from '@/components/appText/appText';
import { colors } from '@/constants/color.constants';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileInput from '../components/profileInput/profileInput';
import PreferenceChip from '../components/preferenceChip/preferenceChip';
import NotificationToggle from '../components/notificationToggle/notificationToggle';
import DangerZone from '../components/dangerZone/dangerZone';

export default function EditProfileScreen() {
  const router = useRouter();

  // Estados para os campos do perfil
  const [firstName, setFirstName] = useState('Guilherme');
  const [lastName, setLastName] = useState('Berte');
  const [email, setEmail] = useState('guilhermeberte@email.com');
  const [phoneNumber, setPhoneNumber] = useState('+55 11 91234-5678');
  const [location, setLocation] = useState('Cuiabá, MT');
  const [bio, setBio] = useState('Entusiasta por culinária, sempre buscando novas receitas e sabores. Adoro cozinhar para amigos e família nos fins de semana.');
  const [avatarUri, setAvatarUri] = useState('https://mmdbbucket.s3.sa-east-1.amazonaws.com/berte.png'); // Sua imagem de perfil

  // Estados para as preferências dietéticas
  const [dietaryPreferences, setDietaryPreferences] = useState<string[]>(['Vegetariano', 'Sem Glúten']);
  const allDietaryOptions = ['Vegetariano', 'Sem Glúten', 'Vegan', 'Dairy-Free', 'Keto'];

  // Estados para as preferências de notificação
  const [bookingUpdatesEnabled, setBookingUpdatesEnabled] = useState(true);
  const [chefMessagesEnabled, setChefMessagesEnabled] = useState(false);
  const [promotionsEnabled, setPromotionsEnabled] = useState(true);

  // Função para mudar a foto de perfil
  const handleChangePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão Necessária', 'Precisamos de acesso à sua galeria de fotos para mudar a imagem.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Quadrado para perfil
      quality: 1,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  };

  // Função para alternar as preferências dietéticas
  const toggleDietaryPreference = (preference: string) => {
    setDietaryPreferences(prev =>
      prev.includes(preference)
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  // Função para salvar as mudanças
  const handleSave = () => {
    // Lógica para salvar os dados atualizados (enviar para API, etc.)
    const profileData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      location,
      bio,
      dietaryPreferences,
      notifications: {
        bookingUpdatesEnabled,
        chefMessagesEnabled,
        promotionsEnabled,
      },
      avatarUri,
    };
    console.log('Dados do perfil salvos:', profileData);
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    // router.back(); // Navegar de volta após salvar
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Excluir Conta',
      'Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => console.log('Conta excluída!') },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={colors.TEXT_PRIMARY} />
        </TouchableOpacity>
        <AppText style={styles.headerTitle}>Edit Profile</AppText>
        <TouchableOpacity onPress={handleSave} style={styles.headerButton}>
          <AppText style={styles.saveButtonText}>Save</AppText>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileImageSection}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
            <TouchableOpacity style={styles.cameraIcon} onPress={handleChangePhoto}>
              <FontAwesome name="camera" size={18} color="#FFF" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleChangePhoto}>
            <AppText style={styles.changePhotoText}>Change Photo</AppText>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <ProfileInput label="Nome" value={firstName} onChangeText={setFirstName} />
          <ProfileInput label="Sobrenome" value={lastName} onChangeText={setLastName} />
          <ProfileInput label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
          <ProfileInput label="Televone" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />
          <ProfileInput label="Endereço" value={location} onChangeText={setLocation} isLocation={true} />
          <ProfileInput
            label="Bio"
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={4}
            inputStyle={styles.bioInput}
          />
        </View>

        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Dietary Preferences</AppText>
          <View style={styles.chipsContainer}>
            {allDietaryOptions.map(option => (
              <PreferenceChip
                key={option}
                label={option}
                isSelected={dietaryPreferences.includes(option)}
                onPress={() => toggleDietaryPreference(option)}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <AppText style={styles.sectionTitle}>Notification Preferences</AppText>
          <NotificationToggle
            title="Update de reservas"
            description="Seja notificado sobre atualizações de reservas"
            isEnabled={bookingUpdatesEnabled}
            onToggle={setBookingUpdatesEnabled}
          />
          <NotificationToggle
            title="Mensagens de Chefs"
            description="Receba mensagens de chefs sobre suas reservas"
            isEnabled={chefMessagesEnabled}
            onToggle={setChefMessagesEnabled}
          />
          <NotificationToggle
            title="Promoções e Ofertas"
            description="Receba promoções e ofertas especiais"
            isEnabled={promotionsEnabled}
            onToggle={setPromotionsEnabled}
          />
        </View>

        <DangerZone onDeleteAccount={handleDeleteAccount} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.BG,
    marginBottom: 40, // Espaçamento inferior para evitar sobreposição com botões
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.DIVIDER,
    backgroundColor: colors.CARD,
  },
  headerButton: {
    padding: 8, // Aumenta a área de toque
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.TEXT_PRIMARY,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.ACCENT,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Padding para o final da tela
  },
  profileImageSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.CARD,
    borderBottomWidth: 1,
    borderBottomColor: colors.DIVIDER,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: colors.ACCENT, // Borda na imagem de perfil
    resizeMode: 'cover',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.ACCENT,
    borderRadius: 15,
    padding: 6,
  },
  changePhotoText: {
    color: colors.ACCENT,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.CARD,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.DIVIDER,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.TEXT_PRIMARY,
    marginBottom: 15,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center', // Se quiser centralizar os chips
  },
  bioInput: {
    height: 100, // Altura fixa para a bio
    textAlignVertical: 'top', // Faz o texto começar no topo em multiline
    paddingVertical: 10, // Ajusta o padding vertical para a altura da linha
  },
});