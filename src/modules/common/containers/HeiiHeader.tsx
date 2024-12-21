import { AppBar, Box, IconButton, Link, Toolbar } from '@mui/material'
import { styled } from '@mui/styles';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import heiiLogo from '../../../assets/images/heiiLogo.png'

const HeiiHeader = () => {

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

      const heiiLogoStyle={
        width: '49px',
        height:'80%',       
      }

      const StyledLink = styled(Link)({
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
      
  return (
    <Box sx={{width:'100%'}} >
        <AppBar elevation={0} position="static" style={{background:'#FFFFFF'}} >
            <Toolbar 
              style={{
                width:'97%', 
                display:'flex', 
                flexDirection:'row', 
                justifyContent:'space-between'                
              }} 
            >
                <div style={{display:'flex', alignItems:'center'}} >
                    <IconButton 
                        size="large"
                        edge="start"                
                        aria-label="menu"                         
                    >
                        <PersonIcon/> 
                    </IconButton>
                    <img src={heiiLogo} alt="heii-logo" style={heiiLogoStyle} />
                </div>                                            
                <StyledLink href="login" color='#00000' style={{textDecoration:'none'}} >
                  Salir
                  <IconButton>
                    <LogoutIcon style={logoutIcon} />
                  </IconButton>
                </StyledLink>
            </Toolbar>
        </AppBar>     
    </Box>
  )
}

export default HeiiHeader
  
  