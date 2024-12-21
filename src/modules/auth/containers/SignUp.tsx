import HomeImg from '../../../assets/images/home.png';
import HeiiLogo from '../../../assets/images/heiiLogoWh.png';
import {styled} from '@mui/system';
import Link from '@mui/material/Link';
import {Card, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const containerStyle = {  
  height: '100vh',  
  width:'100vw',
  background: 'linear-gradient(to bottom, #000000, #000000)',
  display: "flex",
  justifyContent: "center",
  alignItems: "center", 
}

const mainStyle = {
  backgroundImage : `url(${HomeImg})`,
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat",
  height: '95vh',
  width:'510px',
  display: "flex",
  flexDirection:'column' as 'column', 
  alignItems: "center",   
  justifyContent:'center',
  color:'#FFFFFF',  
}

const StyledLink = styled(Link)({
  width:'300px',
  height:'40px',
  background:'#75A200',
  border:'none',
  borderRadius:'20.5px',  
  color:'#FFFFFF',
  fontSize:'20px',
  textDecoration:'none',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
});

const textField = {
  width:'361px',
  height:'47px',
  border:'1px',
  borderRadius:'10px',
  margin:'0px 0 20px 0'
}

const Home = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div style={containerStyle} >
      <div style={mainStyle} >
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'30vh'}} >
          <img src={HeiiLogo} alt="" width={'340px'} />
          <h2>Bienvenido</h2>
         <p>Ingresa los datos de tu cuenta</p>         
        </div>
        <Card style={{display:'flex', 
          flexDirection:'column', 
          alignItems:'center',
          width:'100%',
          marginTop:'auto',
          backgroundColor:'#FFFFFF', 
          borderRadius:'15px',
          paddingTop:'50px'}} >   
          <TextField id="email"             
            placeholder='correo12@gmail.com' 
            variant="outlined" 
            label='Correo'
            slotProps={{input: {
                        style: textField
                      },
                      inputLabel : {
                        shrink:true
                      }
                    }} 
          />                      
          <TextField id="password"             
            placeholder='********'
            variant="outlined" 
            label='Contraseña'
            type={showPassword ? 'text' : 'password'}
            slotProps={{input: {
                        style: textField,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end" onClick={togglePasswordVisibility} >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                      inputLabel : {
                        shrink:true
                      },
                    }}             
          />
          <TextField id="password"             
            placeholder='********' 
            variant="outlined" 
            label='Confirmar contraseña'
            type={showConfirmPassword ? 'text' : 'password'}
            slotProps={{input: {
                        style: textField,
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end" onClick={toggleConfirmPasswordVisibility} >
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      },
                      inputLabel : {
                        shrink:true
                      },
                    }}             
          />  
          <div style={{width:'100%', 
                display:'flex', 
                justifyContent:'space-around', 
                alignItems:'center'}} 
            >            
          </div>                    
          <StyledLink href="" color="inherit" style={{marginTop:'20px'}} >
            Registrarme
          </StyledLink>                                     
          <p style={{ display: 'flex', 
                        justifyContent:'space-between', 
                        gap: '50px' ,
                        marginTop:'20px'
                      }}> o </p>

          {/* ****** SignUp with icon buttons****** */}
          <div style={{ display: 'flex', 
                        justifyContent:'space-between', 
                        gap: '50px',
                        marginTop:'20px'
                      }}
                    >      
            <IconButton              
              sx={{          
              borderRadius: '50%',
              width: '50px', 
              height: '50px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', 
              backgroundColor:'#FFFFFF',
              '&:hover': {
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)',
                  },
            }}
            >     
            <GoogleIcon style={{fontSize:'45px'}} /> 
              </IconButton>
            <IconButton              
              sx={{          
                  borderRadius: '50%',
                  width: '50px', 
                  height: '50px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', 
                  backgroundColor:'#1DA1F2',
                  '&:hover': {
                    backgroundColor: '#1DA1F2',
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >     
              <TwitterIcon style={{fontSize:'25px', color:'#FFFFFF'}} /> 
            </IconButton>
            <IconButton              
              sx={{          
                  borderRadius: '50%',
                  width: '50px', 
                  height: '50px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', 
                  backgroundColor:'#000000',
                  '&:hover': {
                    backgroundColor: '#000000',
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >     
              <AppleIcon style={{fontSize:'25px', color:'#FFFFFF'}} /> 
            </IconButton>
          </div>    
          {/* ****** End Login with icon buttons ****** */}

          <a style={{marginTop:'30px', color:'#FFFFFF'}}  href="sign-up">Ingresar como visitante</a>
        </Card>
      </div>
    </div>
    
  )
}

export default Home