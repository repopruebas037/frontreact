import React from 'react';
import './App.css';
import './modules/client/components/ClientMembership';
import Router from './routes/RouteList';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/frontreact"> {/* 🔹 Agrega el basename aquí */}
      <Router />
    </BrowserRouter>
  );
}

export default App;
