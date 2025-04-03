import { WrapperProps } from "../../types";

const Content = ({ children }: WrapperProps) => {
  return (
    <div className="flex-1 overflow-hidden px-4 py-12 md:px-0 md:py-8 md:border-black md:border-r-[1px]">
      {children}
    </div>
  );
};

export default Content;

// md:ml-[222px]
