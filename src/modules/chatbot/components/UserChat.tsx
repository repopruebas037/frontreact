import { Box, padding, styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ChatInput from './ChatInput';
import HeiiHeader from '../../common/components/HeiiHeader'
import ChatMessage, { Message } from '../containers/ChatMessage';

type ChatbotProps = {
  messages: Message[];
  onUserSend: (user_prompt: string) => Promise<string>;
};

const Chatbot: React.FC<ChatbotProps> = ({ messages, onUserSend }) => {

  const ContainerDiv = styled('div')({
    padding: '20px',
    boxSizing: 'border-box',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    '@media (max-width:600px)': {
      padding: '10px'
    }
  });

  const ChatContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '80%',
    padding: '25px',
    boxSizing: 'border-box',
    '@media (max-width):600px': {
      padding: '15px'
    }
  });

  const NavBar = styled('div')({
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  });

  const menuNav = {
    color: '#75A200'
  };

  const StyledCard = styled(Card)({
    width: '60%',
    maxWidth: '600px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px',
    boxSizing: 'border-box',
    '@media (max-width: 600px)': {
      width: '90%',
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const defaultMessageRef = useRef<HTMLDivElement | null>(null);

  /**
   * Hace que la barra de scroll se ubique al final de contenedor
   */
  const scrollToBottom = () => {
    if (messages.length >= 1 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Modifica el box que contine el chat y mueve el input al 
   * fondo del contenedor del chat cuando inicia la 
   * interacción con el chatbot
   */
  const fixChatBox = () => {
    if (messages.length >= 1 && chatContainerRef.current) {
      chatContainerRef.current.style.flex = '1';
      chatContainerRef.current.style.padding = '10px';
    }
  }

  /**
   * Desaparece en el mensaje por defecto cuando inicia la interacción
   */
  const hideDefaultMessage = () => {
    if (messages.length >= 1 && defaultMessageRef.current) {
      defaultMessageRef.current.style.display = 'none';
    }
  }

  useEffect(() => {
    scrollToBottom();
    fixChatBox();
    hideDefaultMessage();
  }, [messages]);

  return (
    <ContainerDiv>
      <HeiiHeader />
      <NavBar>
        <ArrowBackIosIcon />
        <h2 style={menuNav} >Hola,&nbsp;</h2>
        <h2>Visitante</h2>
      </NavBar>

      <ChatContainer>
        <StyledCard>
          <Box
            ref={chatContainerRef}
            sx={{
              flex: 0,
              "&::-webkit-scrollbar": {
                width: "6px"
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#e0e0e0",
                borderRadius: "3px"
              },
              display: 'flex',
              flexDirection: 'column',
              '@media (max-width: 600px)': {
                padding: '10px',
              },
            }}

          >
            <div ref={defaultMessageRef} style={{ textAlign: 'center', marginBottom: '5px' }}  >
              <h4>¿Para comenzar, qué te gustaría comer?</h4>
            </div>
            {messages.map((msg, index) => (
              <ChatMessage key={index}
                message={msg.message}
                images={msg.images}
                sender={msg.sender} />
            ))}

            <div ref={messagesEndRef} />
          </Box>
          <ChatInput onSend={onUserSend} />
        </StyledCard>

      </ChatContainer>
    </ContainerDiv>
  )
}

export default Chatbot;