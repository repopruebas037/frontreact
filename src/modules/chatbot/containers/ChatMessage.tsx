import React from 'react';
import { Card, CardMedia, Paper, Typography } from '@mui/material';

// Definición del tipo para el mensaje
export interface Message {
  message: string;
  images: string[];
  menu: string[];
  sender: 'user' | 'bot';
}

interface ChatMessageProps {
  message: string;
  menu: string[];
  images: string[];
  sender: 'user' | 'bot';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, menu, images, sender }) => {
  const isUser = sender === 'user';

  return (
    <Paper
      style={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#F5F5F5' : '#F0F3E7',
        maxWidth: "80%",
        border: `1px solid ${isUser ? '#F5F5F5' : '#75A200'}`,
        margin: '8px 0',
        padding: "10px 16px",
        position: 'relative',
        transition: "all 0.3s ease"
      }}
    >
      <Typography>{message}</Typography>

      {menu.map((menuItem, index) => (
        <li key={index}>
          {menuItem}
        </li>
      ))}
      <Card style={{
        display: 'flex',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        margin: '4px 0px 4px 0'
      }}>
        {
          !isUser ? images.map((img, index) => (
            <CardMedia
              key={index}
              image={img}
              sx={{
                height: 1000,
                width: '100%',
                maxWidth: 150,
                maxHeight: 150,
                objectFit: 'contain',
                flexShrink: 0,
                backgroundColor: '#f0f0f0',
              }}
            />
          ))
            : null
        }
      </Card>
    </Paper>
  );
};

export default ChatMessage;
