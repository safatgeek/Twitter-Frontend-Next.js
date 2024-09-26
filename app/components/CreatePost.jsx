"use client";

import { useState } from "react";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

const CreatePost = () => {
  const [feedType, setFeedType] = useState("forYou");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center border-b border-slate-800">
        <label
          onClick={() => setFeedType("forYou")}
          className="flex flex-col cursor-pointer items-center gap-1 w-[50%] hover:bg-stone-900 pt-4"
        >
          <span className="cursor-pointer">For you</span>
          {feedType === "forYou" && (
            <div className="h-1 w-[53.31px] bg-blue-500 rounded"></div>
          )}
        </label>

        <label
          onClick={() => setFeedType("following")}
          className="flex flex-col cursor-pointer items-center gap-1 w-[50%] hover:bg-stone-900 pt-4"
        >
          <span>Following</span>
          {feedType === "following" && (
            <div className="h-1 w-[68.24px] bg-blue-500 rounded"></div>
          )}
        </label>
      </div>

      <div className="flex flex-col gap-2 px-4 border-b border-slate-800">
        <div className="flex">
          <div className="avatar h-8 w-8 rounded-full border self-center"></div>
          <input
            className="input p-2 input-lg w-full bg-black focus:rounded-none text-white focus:outline-none focus:border-b focus:border-slate-800 border-0"
            placeholder="What's happening?!"
          />
        </div>

        <div className="flex justify-between ml-[15%] p-2">
          <div className="flex gap-2 self-center">
            <MdOutlineInsertPhoto className="h-5 w-5 fill-blue-500" />
            <MdEmojiEmotions className="h-5 w-5 fill-blue-500" />
          </div>

          <button className="btn btn-sm h-[2.2rem] text-base w-20 btn-info rounded-full text-white">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
