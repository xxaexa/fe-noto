import { TitleText, ContentText } from "..";
import { useNavigate, useLocation } from "react-router-dom";
import { BoxProps } from "../../types";

const AccountBox = ({ title, content, id }: BoxProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const lastPathname = location.pathname.split("/").pop();
  const handleNavigate = () => {
    navigate(`update/${id}`);
  };

  const boxStyle = lastPathname == id ? " bg-black text-white" : "text-black";
  return (
    <div
      className={`p-3 cursor-pointer border-[1px] md:border-0 border-black md:border-t-[1px] md:border-b-[1px] duration-500 ease-in-out ${boxStyle}`}
      onClick={handleNavigate}
    >
      <TitleText text={title} />
      <div>
        <ContentText text={content} />
      </div>
    </div>
  );
};

export default AccountBox;
