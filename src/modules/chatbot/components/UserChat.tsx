import { Box, styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import op1 from '../../../assets/images/op1.png'
import op2 from '../../../assets/images/op2.png'
import op3 from '../../../assets/images/op3.png'
import { Card } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage, { Message } from './ChatMessage';
import HeiiHeader from '../../common/components/HeiiHeader'

type ChatbotProps = {
  chatResponse: string;
  onUserSend: (message: string) => Promise<string>;
};

const Chatbot: React.FC<ChatbotProps> = ({ chatResponse, onUserSend }) => {

  const ContainerDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
  });

  const NavBar = styled('div')({
    display: 'flex',
    alignItems: 'center'
  });

  const menuNav = {
    color: '#75A200'
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = (message: string) => {
    console.log(message)
    setMessages([...messages, { message, images: [], sender: 'user' }]);

    // Simula una respuesta del chatbot después de 1 segundo
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: 'Claro! en seguida hay algunas '
            + 'opciones que te encantarán, '
            + 'y lo mejor, que están cerca a tu ubicación',
          images: [op1, op2, op3],
          sender: 'bot',
        }
      ]);
    }, 1000);
  };

  const scrollToBottom = () => {
    //messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ContainerDiv>
      <HeiiHeader />
      <NavBar>
        <ArrowBackIosIcon />
        <h2 style={menuNav} >Hola,&nbsp;</h2>
        <h2>Cristian</h2>
      </NavBar>

      <div>
        <h4>¿Para comenzar, qué te gustaría comer?</h4>
      </div>

      <div>
        <Card
          style={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            padding: '15px'
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              "&::-webkit-scrollbar": {
                width: "6px"
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#e0e0e0",
                borderRadius: "3px"
              },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {chatResponse}

            <div ref={messagesEndRef} />
          </Box>
          <ChatInput onSend={onUserSend} />
        </Card>
      </div>
      <Card
        sx={{ maxWidth: 400, height: 'auto' }}
        style={{
          backgroundColor: '#F5F5F5',
          margin: '8px 0'
        }}
      >
      </Card>
    </ContainerDiv>
  )
}

export default Chatbot;

/**{messages.map((msg, index) => (
              <ChatMessage key={index}
                message={msg.message}
                images={msg.images}
                sender={msg.sender} />
            ))} */