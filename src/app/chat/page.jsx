"use client";

import MessageForm from "@/components/MessageForm";
import MessageList from "@/components/MessageList";
import { getMessages } from "@/utils/api-chat";
import { useEffect, useState } from "react";

export default function ChatPage() {

  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  

  // Función asíncrona para obtener los mensajes del servidor
  async function fetchMessages() {
    try {
      const response = await getMessages();
      setMessages(response);
    } catch (error) {
      console.log("Error obteniendo mensajes", error);
    }
  }

  // Efecto para obtener el nombre de usuario del localStorage y cargar los mensajes inicialmente
  useEffect(() => {
    setUsername(localStorage.getItem("chatUsername"));
    fetchMessages();

    // Interval para actualizar los mensajes cada segundo
    const interval = setInterval(fetchMessages, 1000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-5">
    <h2 className="titulo-principal text-center mb-4">Chat de {username}</h2>
    <div className="card">
      <div className="card-body" style={{ height: '400px', overflowY: 'auto' }}>
        <MessageList messages={messages} />
      </div>
      <div className="card-footer">
        <MessageForm onMessageSent={fetchMessages} />
      </div>
    </div>
  </div>
  
  );
}