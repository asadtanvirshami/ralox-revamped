import React from "react";
import io from "socket.io-client";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const socket = io.connect("http://localhost:3001");

const ChatModal = () => {
  const [open, setOpen] = React.useState(true);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [messageList, setMessageList] = React.useState([]);


  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        room: "1",
        message: currentMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        // Indicate that the message is yours
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  React.useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []); // Only run this effect once on mount

  return (
    <Modal
      mode="light"
      title="Chat Support"
      onClick={() => setOpen((prevOpen) => !prevOpen)}
      Close={() => setOpen((prevOpen) => !prevOpen)}
      show={open}
      size="lg"
    >
      <div className="flex flex-col h-64 overflow-y-auto">
        {messageList.map((message, index) => (
          <div
            key={index}
            className={`flex justify-between mb-2 ${
              message.isMine ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`p-2 rounded-md max-w-xs ${
                message.isMine ? "bg-blue-200 ml-auto" : "bg-gray-200 mr-auto"
              }`}
            >
              <p className="text-sm">{message.message}</p>
              <p className="text-xs text-gray-500">{message.time}</p>
              <p className="text-xs text-gray-500">{message.author}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          className="flex-grow border bg-transparent rounded-l-md p-2"
          placeholder="Type your message..."
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
        />
        <button
          onClick={sendMessage}
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Send
        </button>
      </div>
    </Modal>
  );
};
export default ChatModal;
