"use client";

import { useState } from "react";
import { BsEnvelopePlus } from "react-icons/bs";

const AllMessages = () => {
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);

  const handleSelectMessage = (index) => {
    setSelectedMessageIndex(index);
  };

  const messages = [
    {
      username: "Tanjim Alam",
      handle: "@tanjim",
      time: "2h",
      message: "last message",
    },
    {
      username: "John Doe",
      handle: "@johndoe",
      time: "5h",
      message: "another message",
    },
    // Add more messages here if needed
  ];

  return (
    <div className="w-full sm-md-md:w-[87%] md:w-[90%] lg:w-[45%] py-4 border-r border-slate-800">
      <div className="flex items-center justify-between px-4 mb-4">
        <span className="text-lg font-semibold">Messages</span>
        <div className="relative group">
          <BsEnvelopePlus className="px-2 h-9 w-9 hover:bg-stone-800 hover:rounded-full cursor-pointer" />
          <span className="absolute px-1 py-[0.10rem] top-8 whitespace-nowrap bg-gray-600 rounded-lg left-1/2 transform -translate-x-1/2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none delay-0 group-hover:delay-1000">
            New message
          </span>
        </div>
      </div>

      <div className="px-4 mb-2">
        <label className="input input-bordered rounded-full flex items-center gap-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow text-sm"
            placeholder="Search direct messages"
          />
        </label>
      </div>

      {messages.length != 0 && (
        <div>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-2 items-center cursor-pointer p-4 hover:bg-[#121416] ${
                selectedMessageIndex === index
                  ? "bg-[#202327]"
                  : "bg-transparent"
              }`}
              onClick={() => handleSelectMessage(index)}
            >
              <div className="avatar">
                <div className="h-9 w-9 rounded-full border"></div>
              </div>

              <div className="flex flex-col w-full">
                <div className="flex gap-1 h-5 items-start">
                  <span className="text-sm text-white font-semibold">
                    {msg.username}
                  </span>
                  <span className="text-sm text-slate-500">{msg.handle}</span>
                  <span className="text-sm text-slate-500">· {msg.time}</span>
                </div>

                <div className="text-sm text-slate-500">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMessages;
