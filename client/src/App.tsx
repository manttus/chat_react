import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import RoomForm from "./components/Form/room_form";
import MessageForm from "./components/Form/message_form";

const socket = io("http://localhost:3001/");

function App() {
  const [message, setMessage] = useState<string>("");
  const [roomId, setRoomId] = useState<string | null>(null);
  const [isJoined, setIsJoined] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("connect", () => {});
    socket.on("new-message", (message: string) => {
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  const submitHandler = () => {
    socket.emit("send-message", roomId, message);
  };

  const joinRoom = () => {
    socket.emit("join-room", roomId);
    setIsJoined(true);
  };

  return (
    <>
      <div>
        <h1>Chat App</h1>
        <div>
          {messages.length === 0 && <div> No Messages </div>}
          {messages.map((message, index) => {
            return <div key={index}>{message}</div>;
          })}
        </div>
        <br />
        <RoomForm joinRoom={joinRoom} setRoomId={setRoomId} />
        <br />
        {isJoined && (
          <MessageForm setMessage={setMessage} submitHandler={submitHandler} />
        )}
      </div>
    </>
  );
}

export default App;
