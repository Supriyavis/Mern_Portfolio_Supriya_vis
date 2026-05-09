import { useEffect, useState } from "react";

export default function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/messages")
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-6">Messages</h2>

      {messages.map((msg, i) => (
        <div key={i} className="bg-black/40 backdrop-blur-md p-4 mb-4 rounded border border-white/10">
          <p><b>Name:</b> {msg.name}</p>
          <p><b>Email:</b> {msg.email}</p>
          <p><b>Message:</b> {msg.message}</p>
        </div>
      ))}
    </div>
  );
}