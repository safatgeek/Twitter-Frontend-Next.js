"use client";

import { usePathname } from "next/navigation";
import RightPannel from "../common/RightPannel";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex w-full max-h-screen overflow-auto no-scrollbar">
      {/* Main Content Area */}
      <div className={`w-full sm-md-md:w-[85%] sm-md:w-full ${pathname == "/messages" ? "lg:w-full h-screen" : ""} lg:w-[59%]`}>{children}</div>
      
      {/* RightPannel - Sticky Sidebar */}
      {pathname !== "/messages" && (
        <div className="hidden lg:block lg:w-[41%] max-h-screen sticky top-0 overflow-y-auto no-scrollbar">
          <RightPannel />
        </div>
      )}
    </div>
  );
};

export default ClientLayout;
