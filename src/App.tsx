import React from 'react';
import './App.css';
import './modules/client/containers/ClientMembership'
import ClientMembership from './modules/client/containers/ClientMembership';
import ChatbotMenu from './modules/chatbot/containers/ChatbotMenu';

function App() {
  return (
    <div>
     {/* <ClientMembership/>*/}
      <ChatbotMenu/>
    </div>
    
  );
}

export default App;
