import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Message, MessageBubble } from './MessageBubble';

interface MessagesListProps {
  messages: Message[];
  botAvatar?: string;
  userAvatar?: string;
}

export const MessagesList: React.FC<MessagesListProps> = ({ 
  messages, 
  botAvatar, 
  userAvatar 
}) => {
  return (
    <ScrollView style={styles.chatContainer}>
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          botAvatar={botAvatar}
          userAvatar={userAvatar}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 80,
    backgroundColor: '#F8F9FB',
  },
}); 