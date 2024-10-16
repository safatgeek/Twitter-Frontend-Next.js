"use client"

import { useState } from "react";
import AllMessages from "../components/messages/AllMessages";
import MessageContainer from "../components/messages/MessageContainer";

const MessagePage = () => {
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  const messages = [
    {
      fullName: "Tanjim Alam",
      username: "@tanjim",
      time: "2h",
      message: "last message",
    },
    {
      fullName: "John Doe",
      username: "@johndoe",
      time: "5h",
      message: "another message",
    },
    // Add more messages as needed
  ];

  const handleSelectMessage = (index) => {
    setSelectedMessageIndex(index);
  };

  const hndleUnselectMessage = () => {
    setSelectedMessageIndex(null)
  }

  return (
    <div className="w-full flex border-r border-slate-800 overflow-x-hidden">
      <AllMessages onSelectMessage={handleSelectMessage} selectedMessageIdx={selectedMessageIndex} messages={messages}  selectedMessage={
          selectedMessageIndex !== null ? messages[selectedMessageIndex] : null} />
      <MessageContainer
        selectedMessage={
          selectedMessageIndex !== null ? messages[selectedMessageIndex] : null
        }
        UnselectChatHandler = {hndleUnselectMessage}

      />
    </div>
  );
};

export default MessagePage;


//sm-md-md:w-[87%] md:w-[90%] lg:w-[45%]