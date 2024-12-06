import { makeStyles } from '@mui/styles';
import {border, fontSize, height, lineHeight, margin, styled, textAlign, width} from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import heiiLogo from '../../../assets/images/heiiLogo.png'
import { FormControl, FormControlLabel, InputAdornment, Radio, RadioGroup } from '@mui/material';
import { Margin } from '@mui/icons-material';

const ChatbotMenu = () => {

  //const classes = useStyles();

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
        <h2 style={menuNav} >Menú,&nbsp;</h2>        
        <h2>Chatbot</h2>
      </NavBar>

      <div>
        <p style={pg} >Los siguientes datos son necesarios 
          para establecer los parámetros en que la IA 
          responderá a las solicitudes de los usuarios.</p>
      </div>

      <form action="">  
        <div>
          <h2><b>Nombre de la IA</b></h2>
          <p style={pg}  >Este el nombre con el que la IA se va a 
            presentar al atender a sus usuarios</p>  
          <TextField id="ia-name" placeholder='Ingrese el nombre' variant="outlined" slotProps={{input: {style: textField}}} />                      
        </div>

        <div>
          <h2><b>Tono y personalidad</b></h2>
          <p style={pg}>Seleccione una de las opciones que mejor
          representen su marca.</p>                      
          <FormControl>          
              <RadioGroup
               aria-labelledby="demo-controlled-radio-buttons-group"
               name="controlled-radio-buttons-group"                            
                >
                <FormControlLabel value="Juvenil" control={<Radio sx={{color: ''}} />} label="Juvenil" labelPlacement='start' sx={formControlLabel}/>
                <FormControlLabel value="Cálido" control={<Radio />} label="Cálido" labelPlacement='start' sx={formControlLabel}/>
                <FormControlLabel value="Persuasivo" control={<Radio />} label="Persuasivo" labelPlacement='start' sx={formControlLabel}/>
                <FormControlLabel value="ELegante" control={<Radio />} label="Elegante" labelPlacement='start' sx={formControlLabel}/>
              </RadioGroup>
          </FormControl>        
        </div>

        <div>
          <h2><b>Productos y precios del Menú</b></h2>
          <p style={pg}> Especifique los datos de los productos, su 
            categoría, nombre del producto y precios exactos 
            separados por una “,” y un salto de línea para 
            cambiar de producto. 
            <br/> <br/>
              Ejemplo
            <br/> <br/>
              Hamburguesas, Hamburguesa vegetariana, 25.000
            <br/> <br/>
              Hamburguesas, Hamburguesa sencilla, 18.900
            <br/> <br/>
              Sándwiches, Sándwich al cordero, 21.000
            <br/> <br/>
              Salchipapas, Salchipapa super ranchera para 2, 35.000
            </p>   
            <TextField
              placeholder="Ingrese los productos"
              multiline
              rows={5}
              maxRows={4}      
              slotProps={{input: {style: textArea}}}                          
            />
        </div>

        <div>
          <h2><b>Opciones de adiciones</b></h2>
          <p style={pg} >Agregue un listado de los ingredientes 
            adicionales que “Chatbot” puede sugerir al 
            cliente junto con sus precios 
          </p>   
          <TextField
            placeholder="Adiciones y precios"
            multiline
            rows={5}
            slotProps={{input: {style: textArea}}}  
          />
        </div>

        <div>
          <h2><b>Frases de confirmación</b></h2>
          <p style={pg} >Qué frases debería usar el Chatbot para confirmar
            los pedidos con sus usuarios. 
            Separe las frases con un salto de línea 
          </p>   
          <TextField
            placeholder="Frases para confirmación de pedido"
            multiline
            rows={5}
            slotProps={{input: {style: textArea}}}  
          /> 
        </div>

        <div>
          <h2><b>Instrucciones para correcciones</b></h2>        
          <p style={pg} >
            Cómo debe responder Chatbot al cliente si menciona un precio incorrecto?
            <br/> <br/>
            Agregue los escenarios que crea correspondientes, 
            por ejemplo; si un cliente pide algo que no está en su menú, 
            o solicita un domicilio desde una ciudad que no tiene sucursal.
          </p>   
          <TextField
            placeholder="Frases para confirmación de pedido"
            multiline
            rows={5}
            slotProps={{input: {style: textArea}}}  
          /> 
        </div>

        <div>
          <h2><b>Parametrización</b></h2>        
          <p style={pg} >
            Especificar los datos que la IA debe responder
            en los siguientes casos
          </p>   
          <TextField id="ia-name" placeholder='Dirección del establecimiento?' 
            variant="outlined"
            slotProps={{
              input: {
                style: textField,
                endAdornment:<InputAdornment position = "start">
                                <LocationOnIcon/>
                            </InputAdornment>
              } 
            }} />              
          <TextField id="ia-name" placeholder='Horarios de atención?' variant="outlined" 
            slotProps={{
              input: {
                style: textField
              }
            }} />                      
            <AddButton>
            <AddIcon sx={{
              position: 'absolute',
              left: '5px', 
              top: '50%',
              transform: 'translateY(-50%)',
              color:'#75A200'            
          }}/>
            Agregar parametro
          </AddButton>

        </div>

        <div>
          <h2><b>Enlace a Redes sociales y soporte</b></h2>        
          <p style={pg} >
            Proporcione los links correspondientes para conectar 
            el administrador de chat de sus Redes sociales y canales de atención
          </p>   
          <div>
            <TextField id="ia-name" placeholder='Link de Chat Instagram' variant="outlined" slotProps={{input: {style: textField}}} />                      
            <TextField id="ia-name" placeholder='Link de Chat Facebook' variant="outlined" slotProps={{input: {style: textField}}} />                      
            <TextField id="ia-name" placeholder='Link de Chat Whatsapp' variant="outlined" slotProps={{input: {style: textField}}} />                            
          </div>        
        </div>
      </form>  
    
      <div>
        <SaveButton>Guardar</SaveButton>
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

