import HomeImg from '../../../assets/images/home.png';
import HeiiLogo from '../../../assets/images/heiiLogoWh.png';
import {styled} from '@mui/system';
import Link from '@mui/material/Link';

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
  backgroundColor: 'linear-gradient(to bottom, #FFFFFF, #000000)',
}

const StyledLink = styled(Link)({
  width:'200px',
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

const Home = () => {
  return (
    <div style={containerStyle} >
      <div style={mainStyle} >
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'35vh'}} >
          <img src={HeiiLogo} alt="" width={'50%'} />
          <h3>Ordena rápido, chatea fácil.</h3>
        </div>
      <div style={{display:'flex', 
          flexDirection:'column', 
          alignItems:'center',
          marginTop:'25vh'}} >          
          <StyledLink href="login" color="inherit">
            Logearse
          </StyledLink>                            
          <a style={{marginTop:'30px', color:'#FFFFFF'}}  href="chatbot">Ingresar como visitante</a>
        </div>
      </div>
    </div>
    
  )
}

export default Home