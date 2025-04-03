import { WrapperProps } from "../../types";
import { Outlet } from "react-router-dom";

const SubSidebar = ({ children }: WrapperProps) => {
  return (
    <div className="flex flex-row  md:px-0  w-full">
      <div className="flex flex-col space-y-6 w-screen md:w-[220px] h-screen px-4 md:px-0 py-12 md:py-8 md:border-r-[1px] border-[#171717]">
        {children}
      </div>
      <Outlet />
    </div>
  );
};

export default SubSidebar;
