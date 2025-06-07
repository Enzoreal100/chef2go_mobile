import { ChatHeader } from '@/components/ChatBot/ChatHeader';
import { ChatInput } from '@/components/ChatBot/ChatInput';
import { Message } from '@/components/ChatBot/MessageBubble';
import { MessagesList } from '@/components/ChatBot/MessagesList';
import { photo } from '@/constants/photos.constant';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ChatBotPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! 👋\nComo posso ajudar você a encontrar o chef perfeito hoje?", isBot: true },
    { id: 2, text: "Gostaria de encontrar um chef especializado em culinária italiana", isBot: false },
    { id: 3, text: "Ótimo! Encontrei alguns chefs especializados em culinária italiana na sua região. O Chef Marco Rossi tem excelentes avaliações e está disponível hoje. Ele é conhecido por seus pratos autênticos da Toscana. Gostaria de ver mais detalhes?", isBot: true },
    { id: 4, text: "Você tem alguma opção com um preço mais acessível?", isBot: false },
    { id: 5, text: "Claro! O Chef Antonio Silva também é especialista em culinária italiana e oferece ótimas refeições", isBot: true },
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
      <ChatHeader 
        botName="ChefIA"
        botAvatar={photo.chefIA}
        isOnline={true}
      />
      
      <MessagesList 
        messages={messages}
        botAvatar={photo.chefIA}
        userAvatar={photo.berte}
      />

      <ChatInput
        value={inputText}
        onChangeText={setInputText}
        onSend={handleSend}
        placeholder="Type your message..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
}); 