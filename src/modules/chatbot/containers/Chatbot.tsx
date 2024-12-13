import {border, Box, height, styled, width} from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import heiiLogo from '../../../assets/images/heiiLogo.png'
import op1 from '../../../assets/images/op1.png'
import op2 from '../../../assets/images/op2.png'
import op3 from '../../../assets/images/op3.png'
import {Card, CardContent, CardMedia, Paper, TextField, Typography} from '@mui/material';
import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage, { Message } from './ChatMessage';


const Chatbot = () => {

  const ContainerDiv = styled('div')({
    display: 'flex',
    flexDirection:'column',
    padding:'25px',
  });

  const header = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
  }

  const leftHeader={
    display:"flex"
  }

  const heiiLogoStyle={
    width: '49px',
    height:'80%',
    marginLeft:'10px'
  }

  const NavBar = styled('div')({
    display:'flex',
    alignItems:'center'
  });

  const OutButton = styled('button')({
    width:'112px',
    height:'35px',
    border:'1px',
    borderRadius:'30px',
    outline:'1px solid #75A200;',    
    backgroundColor:'transparent',
    display:'flex',
    justifyContent:'space-around',    
    alignItems:'center',
    lineHeight:'20px'
  });

  const logoutIcon = {
    width:'18px',
    height:'18px',    
    color:'#75A200'
  };

  const menuNav = {        
    color:'#75A200'
  };

  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (message: string) => {
    setMessages([...messages, { message, images:[], sender: 'user' }]);

    // Simula una respuesta del chatbot después de 1 segundo
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message:'Claro! en seguida hay algunas '
                + 'opciones que te encantarán, '
                + 'y lo mejor, que están cerca a tu ubicación',
          images:[op1, op2, op3],
          sender: 'bot',
        }
      ]);
    }, 1000);
  };

  
  return (
    <ContainerDiv>
      <div style={header}>
        <div style={leftHeader} >
          <PersonIcon/>
          <img src={heiiLogo} alt="heii-logo" style={heiiLogoStyle} />
        </div>
        <OutButton>Salir  <LogoutIcon style={logoutIcon} /> </OutButton>
      </div>

      <NavBar>        
        <ArrowBackIosIcon/>
        <h2 style={menuNav} >Hola,&nbsp;</h2>        
        <h2>Cristian</h2>
      </NavBar>

      <div>
        <h4>¿Para comenzar, qué te gustaría comer?</h4>
      </div>

      <div>
        <Card
          style={{
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '15px'
          }}
          >
          <Box
            sx={{
              flex:1,              
              overflowY: 'auto',
              padding:'20px',
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
            {messages.map((msg, index) => (
              <ChatMessage key={index} 
                message={msg.message} 
                images={msg.images}
                sender={msg.sender} />
            ))}
            </Box>
            <ChatInput onSend={handleSend} />            
          </Card>      
        </div>
        <Card
        sx={{ maxWidth: 400, height:'auto' }}
        style={{
            backgroundColor:'#F5F5F5',
            margin: '8px 0'    
          }}
        >
    </Card>
    </ContainerDiv>
  )
}

export default Chatbot;