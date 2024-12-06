
//import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import { colors, Card, Paper, CardContent, Typography, Button, Box, AppBar, Toolbar, Grid, List, ListItem, ListItemIcon, Checkbox } from '@mui/material';
import { buffer } from 'stream/consumers';
import _default from '@mui/material/styles/identifier';
import { hover } from '@testing-library/user-event/dist/hover';
import { alignProperty } from '@mui/material/styles/cssUtils';


const ClientMembership = () => {

  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <AppBar elevation={0} position="static" style={{background:'#FFFFFF'}}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            {/* Logo */}
          </Grid>
          <Grid item>
            <Typography variant="h6" component="div" style={{color:'#003349'}} >
              Heii
            </Typography>
          </Grid>
          <Grid item>
            <button className={classes.button}>Salir</button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
      <h1 style={{color:'#75A200'}} className={classes.typography}>Bienvenido</h1>
      <p style={{color:'#1B1B20'}}>Para continuar selecciona una membresia que se adapte a ti
      </p>

      <Box className={classes.cardbox}>
        <CardContent>
        <Typography className={classes.paper}>
          $50.000/año
        </Typography >
        <Typography style={{color:'#1B1B20'}}>
        Membresia 1
        </Typography>
        <Typography style={{color:'#75A200'}}>
        Inicial
        </Typography>
        <List>
          <Typography>
          Beneficios:
          </Typography>
          <ul>
          <li>Chat con IA</li>
          <li>Pagina web</li>
          <li>1 sede</li>
          </ul>
        </List>
        </CardContent>
        <Grid item>
        <button className={classes.button}>Adquirir</button>
        </Grid>
      </Box>

      <Box className={classes.cardbox}>
        <CardContent >
        <Typography className={classes.paper}>
          $100.000/año
        </Typography>
        <Typography style={{color:'#1B1B20'}}>
        Membresia 2
        </Typography>
        <Typography style={{color:'#75A200'}}>
        Intermedio
        </Typography>
        <List>
          <Typography>
            Beneficios:
          </Typography>
          <ul>
          <li>Chat con IA</li>
          <li>Pagina web</li>
          <li>2 Sedes</li>
          <li>Reportes</li>
          <li>Menu Personalizado</li>
          </ul>
        </List>
        </CardContent>
        <Grid item className={classes.grid}>
        <button className={classes.button}> Adquirir</button>
        </Grid>
      </Box>

      <Box className={classes.cardbox}>
        <CardContent className={classes.typography}>
        <div className={classes.paper}>$200.000/ año</div>
        <Typography style={{color:'#1B1B20'}}>
        Membresia 2
        </Typography>
        <Typography style={{color:'#75A200'}}>
        Avanzado
        </Typography>
        <List>
        <Typography>
        Beneficios:
        </Typography>
        <ul>
          <li>Chat con IA</li>
          <li>Pagina web</li>
          <li>2 sedes</li>
          <li>Reportes</li>
          <li>Editar menu</li>
        </ul>
        </List>
        </CardContent>
        <Grid item>
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
    margin: '10px ',
    width: '286px',
    height: '310px',
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

  paper:{
    boxsizing: 'border-box',
    boxshadow: '0px 2px 3.1px rgba(0, 0, 0, 0.08)',
    width: '264.76px',
    height: '37px',
    top: '237px',
    left: '72px',
    borderRadius:' 0px 15px 15px 0px',
    background:'#75A200',
    color:'#FFFFFF',
    textAlign: 'center',
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
  }


});

