"use client";

import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";

const MessageContainer = ({ selectedMessage }) => {
  console.log({ selectedMessage });
  return (
    <div
      className={`h-full w-full ${
        selectedMessage ? "" : "flex items-center justify-center"
      }`}
    >
      {selectedMessage ? (
        <div className="flex flex-col h-full w-full gap-4">
          <div className="text-lg font-bold px-4">
            {selectedMessage.fullName}
          </div>
          <div className="flex flex-col justify-center items-center w-full border-b border-slate-800 px-4 hover:bg-[#121416] cursor-pointer p-2">
            <div className="chat-image avatar flex self-center">
              <div className="w-16 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <div className="font-semibold mt-2">{selectedMessage.fullName}</div>

            <span className="text-sm text-slate-500">
              {selectedMessage.username}
            </span>
            <span className="mt-4">The bio of {selectedMessage.fullName}</span>
            <span className="text-sm text-slate-500 mt-4">
              Joined August 2022 · 122 Followers
            </span>
          </div>
          <div>
            <div className="chat chat-start px-4">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                {selectedMessage.fullName}
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end px-4">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Auth User
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
          </div>

          <div className="mt-auto border-t border-slate-800">
            <div className="px-4 mt-2">
              <label className="input input-bordered rounded-xl flex items-center gap-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                <MdOutlineInsertPhoto className="h-9 w-9 px-2 fill-blue-500 hover:fill-blue-500 hover:bg-blue-950 hover:rounded-full"  />
                <MdOutlineEmojiEmotions className="h-9 w-9 px-2 fill-blue-500 hover:fill-blue-500 hover:bg-blue-950 hover:rounded-full"/>
                <input
                  type="text"
                  className="grow text-sm"
                  placeholder="Start a new message"
                />
                <GoPaperAirplane className="h-9 w-9 px-2 fill-blue-500 hover:fill-blue-500 hover:bg-blue-950 hover:rounded-full"/>
              </label>
            </div>
          </div>

          {/* Add more details or components as needed */}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-bold">Select a message</span>
          <div className="flex flex-col">
            <span className="text-sm text-slate-500">
              Choose from your existing conversations, start a
            </span>
            <span className="text-sm text-slate-500">
              new one, or just keep swimming
            </span>
          </div>
          <button className="btn btn-info text-white text-lg w-44 rounded-full mt-6">
            New Message
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;
