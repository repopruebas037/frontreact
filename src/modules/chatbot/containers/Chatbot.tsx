import { useState } from 'react';
import UserChat from '../components/UserChat'
import { Message } from './ChatMessage';

const Chatbot = () => {

    const serverHost = process.env.REACT_APP_SERVER_HOST;
    const chatURL = "/chatbot/v1/chat";

    console.log(serverHost + chatURL)

    const [chatResponse, setChatResponse] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleUserSend = async (user_prompt: string) => {
        console.log(`${serverHost}${chatURL}`)
        const res = await fetch(`${serverHost}${chatURL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_prompt })
        });

        if (!res.ok) throw new Error('Error en la API');

        const chatbot_response = await res.json();
        const parsedMessage = JSON.parse(chatbot_response.message);
        updateChatMessages(user_prompt, parsedMessage)

        return chatResponse;
    }

    const updateChatMessages = (user_prompt: string, chatbot_response: Message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                message: user_prompt,
                menu: [],
                images: [],
                sender: 'user',
            }
        ]);

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                message: chatbot_response.message,
                menu: chatbot_response.menu,
                images: [],
                sender: 'bot',
            }
        ]);
    };

    return (
        <UserChat messages={messages} onUserSend={handleUserSend} />
    )
}

export default Chatbot