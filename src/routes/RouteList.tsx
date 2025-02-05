import { Routes, Route } from "react-router";
import Home from '../modules/auth/containers/Home';
import Login from '../modules/auth/containers/Login';
import SignUp from '../modules/auth/containers/SignUp';
import AdminMenu from '../modules/clientAdmin/components/AdminMenu'
import ChatbotMenu from '../modules/chatbot/components/ChatbotMenu';
import ClientMembership from '../modules/client/components/ClientMembership'
import Chatbot from '../modules/chatbot/containers/Chatbot';
import KitchenBoard from "../modules/Kitchen/components/KitchenBoard";

const RouteList = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/admin-menu' element={<AdminMenu />} />
      <Route path='/chatbot-menu' element={<ChatbotMenu />} />
      <Route path='/client-mbs' element={<ClientMembership />} />
      <Route path='/chatbot' element={<Chatbot />} />
      <Route path='/kitchen-board' element={<KitchenBoard />} />
    </Routes>
  )
}

export default RouteList