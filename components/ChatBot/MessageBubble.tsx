import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

interface MessageBubbleProps {
  message: Message;
  botAvatar?: string;
  userAvatar?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  message, 
  botAvatar = 'https://avatars.githubusercontent.com/u/140109430?v=4',
  userAvatar = 'https://avatars.githubusercontent.com/u/186867310?v=4'
}) => {
  return (
    <View
      style={[
        styles.messageContainer,
        message.isBot ? styles.botMessageContainer : styles.userMessageContainer,
      ]}
    >
     {message.isBot && (
        <Image 
          source={{ uri: botAvatar }}
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
          source={{ uri: userAvatar }}
          style={styles.messageAvatar}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  messageContent: {
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
  },
  userMessageText: {
    color: '#000000',
  },
  botMessageText: {
    color: '#000000',
  },
}); 