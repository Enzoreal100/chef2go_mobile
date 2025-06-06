import { colors } from '@/constants/color.constants';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const ChatBot = () => {  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! 👋\nComo posso ajudar você a encontrar o chef perfeito hoje?", isBot: true },
    { id: 2, text: "Gostaria de encontrar um chef especializado em culinária italiana", isBot: false },
    { id: 3, text: "Ótimo! Encontrei alguns chefs especializados em culinária italiana na sua região. O Chef Marco Rossi tem excelentes avaliações e está disponível hoje. Ele é conhecido por seus pratos autênticos da Toscana. Gostaria de ver mais detalhes?", isBot: true },
    { id: 4, text: "Você tem alguma opção com um preço mais acessível?", isBot: false },
    { id: 5, text: "Claro! O Chef Antonio Silva também é especialista em culinária italiana e oferece otimos pratos", isBot: true },
  ]);
  
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputText, isBot: false }]);
      setInputText('');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>          
          <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/140109430?v=4' }}
            style={styles.botAvatar}
          />
          <View style={styles.headerInfo}>
            <Text style={styles.botName}>ChefBot</Text>
            <View style={styles.onlineStatus}>
              <Text style={styles.onlineText}>• Online</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuDots}>⋮</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.chatContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.isBot ? styles.botMessageContainer : styles.userMessageContainer,
            ]}
          >
           {message.isBot && (
              <Image 
                source={{ uri: 'https://avatars.githubusercontent.com/u/140109430?v=4' }}
                style={styles.messageAvatar}
              />
            )}
            
            <View
              style={[
                styles.messageContent,
                message.isBot ? styles.botMessageContent : styles.userMessageContent,
              ]}
            >
              <Text style={[
                styles.messageText,
                message.isBot ? styles.botMessageText : styles.userMessageText,
              ]}>
                {message.text}
              </Text>
            </View>
          {!message.isBot && (
              <Image 
                source={{ uri: 'https://avatars.githubusercontent.com/u/186867310?v=4' }}
                style={styles.messageAvatar}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor="#666"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSend}
        />        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },  header: {
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
  },  chatContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 80,
    backgroundColor: '#F8F9FB',
  },
  messageContainer: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
    marginLeft: 50,
  },
  botMessageContainer: {
    justifyContent: 'flex-start',
    marginRight: 50,
  },  messageContent: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 20,
    position: 'relative',
  },
  userMessageContent: {
    backgroundColor: '#FFE5D1',
    borderBottomRightRadius: 4,
  },
  botMessageContent: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 14,
  },  userMessageText: {
    color: '#000000',
  },
  botMessageText: {
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    marginRight: 12,
    padding: 12,
    borderRadius: 24,
    backgroundColor: '#f0f0f0',
    fontSize: 16,
  },  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6B21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    transform: [{ rotate: '90deg' }],
  },
});

export default ChatBot;