import XSvg from "../svgs/X";

import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdNotificationsNone } from "react-icons/md";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi";
const SideBar = () => {
  return (
    <div className="h-screen w-[15%] md:w-[19%] sm-md:w-[12%] lg:w-[25%] flex flex-col pt-4 border-r border-slate-800">
      <div className="flex flex-col md:w-[80%] self-center">
        <div className="flex flex-col gap-7">
            <div className="self-center lg:self-start">
            <XSvg className="fill-white h-12 w-12 px-2 hover:bg-stone-800 hover:rounded-full md:self-end " />
            </div>
         
          <div className="self-center lg:self-start p-2  hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <GoHome className="h-7 w-7 " />
              <span className="hidden lg:block ">Home</span>
            </label>
          </div>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <IoIosSearch className="h-7 w-7" />
              <span className="hidden lg:block">Search</span>
            </label>
          </div>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <MdNotificationsNone className="h-7 w-7" />
              <span className="hidden lg:block">Notifications</span>
            </label>
          </div>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <HiOutlineEnvelope className="h-7 w-7" />
              <span className="hidden lg:block">Messages</span>
            </label>
          </div>

          <div className="self-center lg:self-start p-2 hover:bg-stone-800 hover:rounded-full">
            <label className="flex gap-2 items-center">
              <HiOutlineUser className="h-7 w-7" />
              <span className="hidden lg:block">Profile</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
