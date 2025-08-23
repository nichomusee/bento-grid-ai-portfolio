import { Section } from "../shared/Section"   
import "../../styles/chat/chat.css"
import { BrushCleaning } from "lucide-react"   

export default function Chat() {

  
  return (
    <div className="chat-container">
      <div className="chat-header">
        
        <div className="chat-header-avatar">
          <img 
            src="/src/assets/avatars/Nicho.jpg"
            alt="Nich Bot Avatar"
          />
        </div>
        
        <div className="chat-header-content">
          <h2 className="chat-header-title">Nich Bot</h2>
        </div>
        
        <button
          className="chat-header-new-thread-btn"
          title="Start new conversation"
        >
          <BrushCleaning size={16} />
        </button>
        
      </div>

      <div    className = " chat-message-container ">

    </div>
  )
}
