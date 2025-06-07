import { colors } from '@/constants/color.constants';
import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ChatHeaderProps {
  botName: string;
  botAvatar: string;
  isOnline?: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  botName, 
  botAvatar, 
  isOnline = true 
}) => {
  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <View style={styles.headerCenter}>          
        <Image 
          source={{ uri: botAvatar }}
          style={styles.botAvatar}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.botName}>{botName}</Text>
          <View style={styles.onlineStatus}>
            <Text style={styles.onlineText}>• {isOnline ? 'Online' : 'Offline'}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuDots}>⋮</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    backgroundColor: '#FFFFFF',
    width: '100%',
  },
  backButton: {
    width: 40,
    justifyContent: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: colors.BASE,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButton: {
    width: 40,
    alignItems: 'flex-end',
    padding: 8,
  },
  menuDots: {
    fontSize: 20,
    color: colors.BASE,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  botAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerInfo: {
    alignItems: 'center', 
  },
  botName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BASE,
    textAlign: 'center', 
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineText: {
    fontSize: 14,
    color: '#4CAF50',
  },
}); 