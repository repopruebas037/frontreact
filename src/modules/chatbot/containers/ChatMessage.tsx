import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// Definición del tipo para el mensaje
export interface Message {
  message: string;
  sender: 'user' | 'bot';
}

interface ChatMessageProps {
  message: string;
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
  const isUser = sender === 'user';

  return (
    <Card
      style={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#F5F5F5' : '#75A200',
        margin: '8px 0',
        maxWidth: '70%',
      }}
    >
      <CardContent>
        <Typography>{message}</Typography>
      </CardContent>
    </Card>
  );
};

export default ChatMessage;
