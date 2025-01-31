import { styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import HeiiHeader from '../../common/components/HeiiHeader'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const KitchenBoard = () => {

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

  const SeasonButton = styled('button')({
    width: '364px',
    height: '41px',
    background: 'transparent',
    border: '2px solid #D1DBB7',
    borderRadius: '20.5px',
    color: '#636363',
  });

  const seasonButtonGroup = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%'
  }

  const [selectedSeason, setSelectedSeason] = useState<String>('baja');

  /**
   * Permite verificar la temporada seleccionada y actuliza el valor
   * de la variable selectedSeadon, 
   * 
   * @param season 
   */
  const handleChangeSeason = (season: string) => {
    setSelectedSeason(season)
  }

  interface Order {
    id: number;
    customerName: string,
    items: {
      name: string,
      quantity: number,
      price: number
    }[],
    total: number,
    status: "Pending" | "In Progress" | "Completed",
    type: "En restaurante" | "Domicilio",
    hour: string
  }

  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customerName: "Juan Pérez",
      items: [
        { name: "Hamburguesa", quantity: 2, price: 5.99 },
        { name: "Papas fritas", quantity: 1, price: 2.99 },
      ],
      total: 14.97,
      status: "Pending",
      type: "En restaurante",
      hour: '8:32 PM'
    },
    {
      id: 2,
      customerName: "María Gómez",
      items: [
        { name: "Pizza Margarita", quantity: 1, price: 8.99 },
        { name: "Refresco", quantity: 2, price: 1.99 },
      ],
      total: 12.97,
      status: "In Progress",
      type: "En restaurante",
      hour: '9:02 PM'
    },
    {
      id: 3,
      customerName: "Luis López",
      items: [{ name: "Ensalada César", quantity: 1, price: 6.99 }],
      total: 6.99,
      status: "Completed",
      type: "Domicilio",
      hour: '11:10 AM'
    },
  ]);

  const OkButton = styled('button')({
    width: '90%',
    height: '41px',
    background: 'transparent',
    border: '2px solid #D1DBB7',
    borderRadius: '20.5px',
    color: '#636363',
  });

  return (
    <ContainerDiv>
      <HeiiHeader />
      <NavBar>
        <ArrowBackIosIcon />
        <h2>Panel&nbsp;</h2>
        <h2 style={menuNav} >Cocina</h2>
      </NavBar>

      <form action="" >
        <div style={{ margin: '10px 0 10px 0' }} >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{ width: '100%' }} />
          </LocalizationProvider>
        </div>

        <h3>Temporada</h3>
        <div style={seasonButtonGroup} >
          <SeasonButton onClick={() => handleChangeSeason('baja')}
            style={{
              backgroundColor: selectedSeason === 'baja' ? '#75A200' : '',
              color: selectedSeason === 'baja' ? '#FFFFFF' : ''
            }}>Baja</SeasonButton>

          <SeasonButton onClick={() => handleChangeSeason('media')}
            style={{
              backgroundColor: selectedSeason === 'media' ? '#75A200' : '',
              color: selectedSeason === 'media' ? '#FFFFFF' : ''
            }}>Media</SeasonButton>

          <SeasonButton onClick={() => handleChangeSeason('alta')}
            style={{
              backgroundColor: selectedSeason === 'alta' ? '#75A200' : '',
              color: selectedSeason === 'alta' ? '#FFFFFF' : ''
            }}>Alta</SeasonButton>
        </div>
      </form>

      {
        /**
         * Se realiza el mapeo de las ordenes
         * Por cada orden se genera un card
         */
        orders.map((order) => (
          <div style={{
            margin: '10px auto',
            backgroundColor: order.type === "En restaurante" ? '#FFB700' : "#75A200",
            maxWidth: '345',
            borderRadius: '10px'
          }} >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '5px 10px',
              color: '#FFFFFF'
            }}>
              <AccessTimeIcon />
              <h5>{order.hour}</h5>
            </div>
            <div>
              <Card sx={{ width: 340, margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                  <CardHeader
                    title={order.type}
                    subheader="OJBAAC7FB4C"
                  />
                  <div style={{
                    marginRight: '12px',
                    textAlign: 'center',
                    border: '1px, solid, #75A200',
                    padding: '0px 5px 0 5px'
                  }} >
                    <h2 style={{}}>12</h2>
                    <p style={{}} >Mesa</p>
                  </div>
                </div>

                <CardContent>
                  <Typography gutterBottom component="div" style={{ fontSize: '15px', color: '#636363' }}  >
                    Pedido
                  </Typography>

                  {/* 
            Se mapean los items de cada pedido y se agrega cada uno
            de ellos a una lista
          */}
                  <ul style={{ listStyle: 'none' }} >
                    {
                      order.items.map((item, index) => (
                        <li key={index} style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #ddd",
                        }} >
                          <Typography>{item.quantity}x&nbsp;{item.name}</Typography>
                          <CheckIcon style={{ color: '#1B1B20' }} />
                        </li>
                      ))
                    }
                  </ul>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }} >
                  <OkButton>Listo</OkButton>
                </CardActions>
              </Card>
            </div>
          </div>
        ))
      }

    </ContainerDiv>
  )
}

export default KitchenBoard