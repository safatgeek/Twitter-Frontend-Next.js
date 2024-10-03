"use client";

import { usePathname } from "next/navigation";
import RightPannel from "../common/RightPannel";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex w-full">
      {children}
      {pathname !== "/messages" && <RightPannel />}
    </div>
  );
};

export default ClientLayout;
