import React from 'react';
import './App.css';
import './modules/client/containers/ClientMembership'
import Router from './routes/RouteList'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
    
  );
}

export default App;
