import XSvg from "../svgs/X";

import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
import Link from "next/link";
const SideBar = () => {
  return (
    <div className="h-screen w-[15%] md:w-[19%] sm-md:w-[12%] lg:w-[25%] flex flex-col pt-4 border-r border-slate-800">
      <div className="flex flex-col md:w-[80%] self-center">
        <div className="flex flex-col gap-7">
            <Link href="/" className="self-center lg:self-start cursor-pointer">
            <XSvg className="fill-white h-12 w-12 px-2 hover:bg-stone-800 hover:rounded-full md:self-end " />
            </Link>
         
          <Link href="/" className="self-center lg:self-start p-2  hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center cursor-pointer">
              <GoHome className="h-7 w-7 " />
              <span className="hidden lg:block text-lg ">Home</span>
            </label>
          </Link>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <IoIosSearch className="h-7 w-7" />
              <span className="hidden lg:block text-lg">Search</span>
            </label>
          </div>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <MdNotificationsNone className="h-7 w-7" />
              <span className="hidden lg:block text-lg">Notifications</span>
            </label>
          </div>

          <Link href="/messages" className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center cursor-pointer">
              <HiOutlineEnvelope className="h-7 w-7" />
              <span className="hidden lg:block text-lg">Messages</span>
            </label>
          </Link>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <HiOutlineUser className="h-7 w-7" />
              <span className="hidden lg:block text-lg">Profile</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
