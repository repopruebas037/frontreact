import { makeStyles } from '@mui/styles';
import {CardContent, Typography, Box, Grid} from '@mui/material';
import HeiiHeader from '../../common/containers/HeiiHeader'
import CheckIcon from '@mui/icons-material/Check';

const ClientMembership = () => {

  const classes = useStyles();
  
  return (
    <div className={classes.container}>
    <HeiiHeader/>
      <h1 style={{color:'#75A200'}} className={classes.typography}>Bienvenido</h1>
      <p style={{color:'#1B1B20'}}>Para continuar selecciona una membresia que se adapte a ti
      </p>

      <Box className={classes.cardbox}>
        <CardContent>
          <Typography className={classes.membershipPrice}>
            $50.000/año
          </Typography >
        <div style={{margin:'10px 10px 0px 10px '}}>      
          <div style={{margin:'10px 0px 10px 0px '}}>
            <Typography style={{color:'#1B1B20'}}>
              Membresia 1
            </Typography>
            <Typography style={{color:'#75A200'}}>
              Inicial
            </Typography>
          </div>                       
          <div>            
              <Typography>
                Beneficios:
              </Typography>
              <ul style={{listStyle:'none', margin:0, padding:0}} >
                <li className={classes.membershipBenefitItem} > <CheckIcon/> Chat con IA</li>
                <li className={classes.membershipBenefitItem} > <CheckIcon/> Pagina web</li>
                <li className={classes.membershipBenefitItem} > <CheckIcon/> 1 sede</li>
                <li className={classes.membershipBenefitItem} > <CheckIcon/> 1 sede</li>
                <li className={classes.membershipBenefitItem} > <CheckIcon/> 1 s</li>              
              </ul>
          </div>
        </div>                
        </CardContent>
        <Grid item className={classes.grid}>
        <button className={classes.button}>Adquirir</button>
        </Grid>
      </Box>

      <Box className={classes.cardbox}>
        <CardContent >
        <Typography className={classes.membershipPrice}>
          $100.000/año
        </Typography>
        <div style={{margin:'10px 10px 0px 10px '}}>
          <div style={{margin:'10px 0px 10px 0px '}}>
            <Typography style={{color:'#1B1B20'}}>
              Membresia 2
            </Typography>
            <Typography style={{color:'#75A200'}}>
              Intermedio
            </Typography>
          </div>
          <div>        
            <Typography>
              Beneficios:
            </Typography>
            <ul style={{listStyle:'none'}}>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Chat con IA</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Pagina web</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> 2 Sedes</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Reportes</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Menu Personalizado</li>
            </ul>          
          </div>
        </div>                
        </CardContent>
        <Grid item className={classes.grid}>
        <button className={classes.button}> Adquirir</button>
        </Grid>
      </Box>

      <Box className={classes.cardbox}>
        <CardContent className={classes.typography}>
        <div className={classes.membershipPrice}>$200.000/ año</div>
        <div style={{margin:'10px 10px 0px 10px '}}>
          <div style={{margin:'10px 0px 10px 0px '}} >
            <Typography style={{color:'#1B1B20'}}>
              Membresia 2
            </Typography>
            <Typography style={{color:'#75A200'}}>
              Avanzado
            </Typography>
          </div>          
          <div>          
            <Typography >
              Beneficios:
            </Typography>
            <ul style={{listStyle:'none'}}>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Chat con IA</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Pagina web</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> 2 sedes</li>
              <li className={classes.membershipBenefitItem} > <CheckIcon/> Reportes</li>
              <li className={classes.membershipBenefitItem}> <CheckIcon/> Editar menu</li>
            </ul>          
          </div>
        </div>        
        </CardContent>
        <Grid item className={classes.grid}>
        <button className={classes.button}>Adquirir</button>
        </Grid>
      </Box>
    </div>

  )
}

export default ClientMembership


const useStyles = makeStyles({
  container: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    background: 'rgba(255, 255, 255, 1)',
  },

  cardbox:{
    margin: '10px',
    padding:'0px 0px 15px 0px',
    width: '286px',
    height: 'auto',
    top: '221px',
    left: '72px',
    background: 'linear-gradient(152.67deg, #FFFFFF 10.7%, #EEEEEE 123.18%)',
    border: '1px solid #75A200',
    borderRadius:'10px ',
    boxShadow:'0px 4.96px 10.42px 0px #0000001A',
  },

  typography:{
    fontfamily: 'Poppins',
    fontsize: '15px',
    fontweight: '700',
    lineheight: '22.5px',
    textalign: 'center',
    textunderlineposition: 'from-font',
  },

  membershipPrice:{
    boxsizing: 'border-box',
    boxshadow: '0px 2px 3.1px rgba(0, 0, 0, 0.08)',
    width: '100%',
    height: '40px',    
    borderRadius:' 0px 15px 15px 0px',
    background:'#75A200',
    color:'#FFFFFF',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
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
    boxsizing: 'border-box',
    alignItems: 'center',
    
  },

  grid:{
    display: 'flex',
    justifyContent:'center',
  },

  membershipBenefitItem: {
    display: "flex", 
    alignItems: "center", 
    gap: "8px"
  }

});

