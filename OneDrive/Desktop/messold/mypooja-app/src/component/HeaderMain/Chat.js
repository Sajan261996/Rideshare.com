import React, { useState } from "react";
import "./Chat.css";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        <FaWhatsapp />
      </button>

      {isOpen && (
        <div className="chat-box">
          <button className="chat-close" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
          <p>Chat with us on WhatsApp!</p>
        </div>
      )}
    </div>
  );
}

export default Chat;
