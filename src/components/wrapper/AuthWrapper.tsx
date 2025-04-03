import { WrapperProps } from "../../types";

const AuthWrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col  p-4 justify-center items-center w-[300px] h-[350px] border-[1px] border-[#171717]">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
