import React, { useEffect, useState } from 'react'
import UserChat from '../components/UserChat'

const Chatbot = () => {

    const [chatResponse, setChatResponse] = useState("");


    const handleUserSend = async (message: string) => {
        const res = await fetch('api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (!res.ok) throw new Error('Error en la API');

        const data = await res.json();

        setChatResponse(data.response)
        return chatResponse
    }

    return (
        <UserChat chatResponse={chatResponse} onUserSend={handleUserSend} />
    )
}

export default Chatbot