import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Height } from '@mui/icons-material';

// Definición del tipo para el mensaje
export interface Message {
  message: string;
  images: string[];
  sender: 'user' | 'bot';
}

interface ChatMessageProps {
  message: string;
  images:string[]
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, images, sender }) => {
  const isUser = sender === 'user';

  return (
    <Card
      style={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#F5F5F5' : '#75A200',
        margin: '8px 0',
        maxWidth: '70%',
        maxHeight:'200px',
        minHeight:'200px',          
      }}
    >
      <CardContent>
        <Typography>{message}</Typography>
        {
          !isUser ? 
          <Card style={{height:'auto'}} >
            {images.map((img, index) => (
              <img src={img} alt="" style={{height:'100px'}} />
            ))}            
          </Card> : null
        }
      </CardContent>
    </Card>
  );
};

export default ChatMessage;
