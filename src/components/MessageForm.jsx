"use client";

import {createMessage} from "@/utils/api-chat";
import {useRouter} from "next/navigation";
import { useState } from "react";


export default function MessageForm({onMessageSent}) {
    
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const username = localStorage.getItem("chatUsername");

    if (!username) {
      router.push("/");
    }

    if (content.trim()) {
      try {
        await createMessage(username, content);
        setContent("");
        onMessageSent();
      } catch (error) {
        console.log("Error enviando mensaje", error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="message-form">
  <div className="mb-3">
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      rows={3}
      placeholder="Escribe un mensaje..."
      required
      className="form-control"
    />
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
</form>

  );
}