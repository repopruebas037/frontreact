import { Routes, Route } from "react-router";
import AdminMenu from '../modules/clientAdmin/containers/AdminMenu'
import ChatbotMenu from '../modules/chatbot/containers/ChatbotMenu';
import ClientMembership from '../modules/client/containers/ClientMembership'
import Chatbot from '../modules/chatbot/containers/Chatbot';

const RouteList = () => {
  return (
    <Routes> 
        <Route path = '/' element={<AdminMenu/>}/>      
        <Route path = '/chatbot-menu' element={<ChatbotMenu/>}/>    
        <Route path = '/client-mbs' element={<ClientMembership/>}/>      
        <Route path = '/chatbot' element={<Chatbot/>}/>                   
    </Routes>
  )
}

export default RouteList