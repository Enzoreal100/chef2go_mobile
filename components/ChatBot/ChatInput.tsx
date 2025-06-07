import { colors } from '@/constants/color.constants';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({ 
  value, 
  onChangeText, 
  onSend, 
  placeholder = "Type your message..." 
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#666"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSend}
      />        
      <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <Text style={styles.sendButtonText}>▶</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 90,
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
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.BASE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    transform: [{ rotate: '90deg' }],
  },
}); 