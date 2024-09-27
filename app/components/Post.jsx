import Image from "next/image";

import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Post = () => {
  const isImg = true;
  return (
    <div className="flex flex-col gap-2 px-4 border-b border-slate-800">
      <div className="flex gap-2">
        <div className="avatar">
          <div className="h-9 w-9 rounded-full border"></div>
        </div>

        <div className="flex flex-col w-full mb-2">

          <div className="flex gap-1 h-5 items-start">
            <span className="text-sm text-white font-semibold">
              Tanjim Alam
            </span>
            <span className="text-sm text-slate-500">@tanjim</span>
            <span className="text-sm text-slate-500">· 2h</span>
            <MdDelete className="h-9 w-9 px-2 fill-slate-500 cursor-pointer hover:fill-red-500 hover:bg-red-950 rounded-full ml-auto"/>
          </div>

          <div className="text-sm text-white mt-1">caption</div>

          {isImg && (
            <div className="w-full h-72 mx-auto mt-3 relative overflow-hidden border border-slate-700 rounded-lg">
              <Image
                src="https://picsum.photos/seed/picsum/1100/700"
                alt="Image"
                layout="fill"
                objectFit="contain"
                className="object-cover"
              />
            </div>
          )}

          <div className="flex gap-14 mt-1">
            <div className="flex items-center group cursor-pointer">
              <FaRegComment className="h-8 w-8 px-[0.4rem] fill-slate-500 group-hover:fill-blue-500 group-hover:bg-blue-950 group-hover:rounded-full" />
              <span className="text-sm text-slate-500 group-hover:text-blue-500">19</span>
            </div>

            <div className="flex items-center group cursor-pointer">
              <FaRegHeart className="h-8 w-8 px-[0.4rem] fill-slate-500 group-hover:fill-red-500 group-hover:bg-red-950 group-hover:rounded-full" />
              <span className="text-sm text-slate-500 group-hover:text-red-500">19</span>
            </div>

            <div className="flex items-center group cursor-pointer ml-auto">
              <FaRegBookmark className="h-9 w-9 px-3 fill-slate-500 group-hover:fill-blue-500 group-hover:bg-blue-950 group-hover:rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
