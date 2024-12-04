import { makeStyles } from '@mui/styles';
import {border, display, fontSize, height, lineHeight, margin, styled, textAlign, width} from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import heiiLogo from '../../../assets/images/heiiLogo.png'
import { Card, CardContent, CardMedia, FormControl, FormControlLabel, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const ChatbotMenu = () => {

  const pg = {
    lineHeight:'15px',
    fontSize:'15px',
    color:'#464E57'
  } 

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

  const producsMenu ={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
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

  const textField = {
    width:'361px',
    height:'47px',
    border:'1px',
    borderRadius:'10px',
    margin:'4px 0'
  }

  const formControlLabel = {
      justifyContent: 'space-between',
      width: '361px',
      height:'45px',
      padding: '10px',
      borderRadius: '10px',
      border:'0.2px',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)',
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
  }

  const textArea = {
    width:'361px',    
    border:'1.37px',
    borderRadius:'10px',
  }

  const AddButton = styled('button')({
    width:'361px',
    height:'47px',
    border:'2px dotted #75A200',
    borderRadius:'10px',  
    position:'relative'  
  });

  const SaveButton = styled('button')({
    width:'364px',
    height:'41px',
    background:'#75A200',
    border:'none',
    borderRadius:'20.5px',  
    color:'#FFFFFF',
    marginTop:'100px'
  });

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
        <h2>Administrar,&nbsp;</h2>
        <h2 style={menuNav} >Menú</h2>                
      </NavBar>     

      <form action="">  
        <div>
        <FormControl fullWidth>
          <InputLabel id="dropdown-label">Seleccionar sede</InputLabel>
          <Select
            labelId="dropdown-label"
            //value={}
            //onChange={}
            label="Seleccionar sede"
          >
          <MenuItem value="opcion1">Opción 1</MenuItem>
          <MenuItem value="opcion2">Opción 2</MenuItem>
          <MenuItem value="opcion3">Opción 3</MenuItem>
          </Select>
        </FormControl>
        </div>

        <div><h2>Slider</h2></div>
          
        <div style={producsMenu} >
          <div style={{width:'60%'}} >
            <FormControl fullWidth>
            <InputLabel id="select-label">Seleccionar opción</InputLabel>
            <Select
              labelId="select-label"
              //value={opcionSeleccionada}
              //onChange={handleChange}
            >
              <MenuItem value="opcion1">Opción 1</MenuItem>
              <MenuItem value="opcion2">Opción 2</MenuItem>
            </Select>
            </FormControl>  
          </div>

          <div>
            Ver todo 
          </div>      
        </div>

        <div>
          <h2><b>Productos y precios del Menú</b></h2>
          <p style={pg}> Presiona y arrastra en los puntos de la ficha 
            para cambiar el orden del menú* 
          </p>   
          <div>
          <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
            <CardMedia
              component="img"
              height="10px"
              width="1px"
              image={heiiLogo}
              alt="Imagen de ejemplo"
            />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Hamburguesa clasica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $15.000
                </Typography>
              </CardContent>
          </Card>
          </div>
        </div>
      </form>  
    
      <div>
        <SaveButton>Agregar un producto + </SaveButton>
      </div>

    </ContainerDiv>
  )
}

export default ChatbotMenu

const useStyles = makeStyles({
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    background: 'rgba(255, 255, 255, 1)',
  },

  cardContent:{
    
  },

  paper:{

    /*width: '264.76px',
    height: '37px',
    top: '237px',
    left: '72px',
    borderRadius: '0px 15px 15px 0px',*/
    width: '264.76px',
    height: '45px',
    top: '236px',
    left: '336.76px',
    borderRadius: '0px 15px 15px 0px',
    angle: '-180 deg',
    background: '#75A200',
    boxShadow: '0px 2px 3.1px 0px #00000014',
    color:'#FFFFFF'
  },

  button:{
    width: '208.13px',
    height: '37px',
    top: '476px',
    left: '115.89px',
    borderRadius: '15px',
    background: '#FFFFFF',
    border: '1px solid #75A200',
    boxShadow: '0px 2px 3.1px 0px #00000014',
    color:'#000000',
  }


});

