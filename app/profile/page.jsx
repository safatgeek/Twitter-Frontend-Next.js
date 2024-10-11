import Image from "next/image";

import { FaArrowLeft } from "react-icons/fa6";
const profilePage = () => {
  return (
    <div className="w-full sm-md-md:w-[85%] sm-md:w-full lg:w-[59%] relative border-r border-slate-800">
      <div className="flex gap-7 items-center ml-2 ">
        <FaArrowLeft className="px-2 h-8 w-8  hover:bg-stone-800 hover:rounded-full" />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Tanjim Safat</span>

          <span className="text-sm text-slate-500">3 post</span>
        </div>
      </div>
      <div className="w-full h-40 sm:h-44 md:h-52 relative overflow-hidden mt-1">
        <Image
          src="https://picsum.photos/seed/picsum/1000/700"
          alt="Cover Photo"
          layout="fill"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute top-[10rem] sm:top-40 md:top-48 left-4">
          <div className="sm:w-32 sm:h-32 w-28 h-28 relative rounded-full border-[.2rem] border-black overflow-hidden">
            <Image
              src="https://picsum.photos/id/237/200/300"
              alt="Profile Image"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
    </div>
  );
};

export default profilePage;
