import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useMutation } from "convex/react";
import ThreadView from "./ThreadView";
import "../../../styles/chat.css"

function ChatSection() {
  // Corrected: match the generated API exactly
  const createThread = useMutation(api.demo.chat.createThread);
  const sendMessage = useMutation(api.demo.chat.sendMessageToAgent);

  const [threadId, setThreadId] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (prompt) => {
    if (!threadId || !prompt) return;

    // Send prompt to backend
    const response = await sendMessage({ threadId, prompt });

    // Update messages for display
    setMessages((prev) => [
      ...prev,
      { role: "user", message: prompt },
      { role: "assistant", message: response },
    ]);
  };

  return (
    <div>
      <h1>Convex Agent Demo Chat</h1>
      <div>
        {threadId ? (
          <ThreadView
            threadId={threadId}
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div>
            <p>No thread created yet</p>
            <button
              onClick={async () => {
                const id = await createThread({});
                setThreadId(id);
                setMessages([]);
              }}
            >
              Create Thread
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatSection;
