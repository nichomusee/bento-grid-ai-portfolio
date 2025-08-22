import { Section } from "../shared/Section"   
import "../../styles/chat.css"                 // Import chat-specific CSS styles
import { BrushCleaning } from "lucide-react"   // Import a cleaning/brush icon from lucide-react

export default function Chat() {
  return (
    // Main container for the chat section
    <div className="chat-container">

      {/* Header section of the chat */}
      <div className="chat-header">
        <div className ="chat-header-avatar">
                      
          <img 
          src ="/src/assets/avatars/Nicho.jpg"
          alt="Assistant Avatar"

          />

          {/* Container for the header text content */}
          <div className="chat-header-content">
            {/* Title of the chat header */}
            <h2 className="chat-header-title">Nich Bot</h2>
          </div>

          {/* Button with an icon (can be used to clear messages, reset chat, etc.) */}
          <button
          classNmae ="chat-header-new-thread-btn"
          
          title ="Start new  conversation"
          >
            <BrushCleaning size={16} /> {/* Small icon inside the button */}
          </button>
        </div>
      </div>
    </div>
  )
}
