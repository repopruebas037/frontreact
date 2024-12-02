
//import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
//import Alert from '@mui/material/Alert';
//import Paper from '@mui/material/Paper';
//import { colors } from '@mui/material';
import Card from '@mui/material/Card';
//import { buffer } from 'stream/consumers';

const ClientMembership = () => {

  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <div>
        <button className='exit-button'>Salir</button>
      </div>
      <h1 className='saludo'>Bienvenido</h1>
      <p className='inicio'>Para continuar selecciona una membresia que se adapte a ti</p>
      <Card className={classes.card}>
        <div className={classes.paper}>$50.000/año</div>
        <div className='membership-name'>Membresia 1</div>
        <div className='membership-type'>Inicial</div>
        <ul className='membership-benefits'>
          <li>Chat con IA</li>
          <li>Pagina web</li>
          <li>1 sede</li>
        </ul>
        <button className={classes.button}>Adquirir</button>
      </Card>
      <Card className={classes.card}>
        <div className={classes.paper}>$100.000/año</div>
        <div className='membership-name'>Membresia 2</div>
        <div className='membership-type'>Intermedio</div>
        <ul className='membership-benefits'>
          <li>Chat con IA</li>
          <li>Pagina web</li>
          <li>2 Sedes</li>
          <li>Reportes</li>
          <li>Menu Personalizado</li>
        </ul>
        <button className={classes.button}> Adquirir</button>
      </Card>
      <Card className={classes.card}>
        <div className={classes.paper}>$200.000/ año</div>
        <div className='membership-name'>Membresia 3</div>
        <div className='membership-type'>Avanzado</div>
        <ul className='membership-benefits'>
          <li>Chat con IA</li>
          <li>Pagina web</li>
          <li>2 sedes</li>
          <li>Reportes</li>
          <li>Editar menu</li>
        </ul>
        <button className={classes.button}>Adquirir</button>
      </Card>
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

  card:{
    width: '286px',
    height: '310px',
    top: '221px',
    left: '72px',
    background: 'linear-gradient(152.67deg, #FFFFFF 10.7%, #EEEEEE 123.18%)',
    border: '1px solid #75A200',
    borderRadius:'10px ',
    boxShadow:'0px 4.96px 10.42px 0px #0000001A',
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

