import { useState } from 'react';
import UserChat from '../components/UserChat'
import { Message } from './ChatMessage';

const Chatbot = () => {

    const [chatResponse, setChatResponse] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const handleUserSend = async (user_prompt: string) => {
        const res = await fetch('http://localhost:8000/chatbot/v1/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_prompt })
        });

        if (!res.ok) throw new Error('Error en la API');

        const data = await res.json();
        handleSend(user_prompt, data.message)
        return chatResponse;
    }

    const handleSend = (user_prompt: string, message: string) => {
        setMessages([...messages, { message: user_prompt, images: [], sender: 'user' }]);

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                message: message,
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