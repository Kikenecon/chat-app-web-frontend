"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LobbyChat() {
  
  const [username, setUsername] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (username.trim()) {
      localStorage.setItem("chatUsername", username);
      router.push("/chat");
    }
  }

  return (
    <div className="login-container container d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
  <h1 className="mb-4">Lobby Chat</h1>
  <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '400px' }}>
    <div className="mb-3">
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Ingrese nombre de usuario"
        required
        className="form-control"
      />
    </div>
    <button type="submit" className="btn btn-primary w-100">Entrar</button>
  </form>
</div>

  );
}