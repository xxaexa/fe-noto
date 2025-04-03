import RegularText from "../text/RegularText";
import { NavigateButtonProps } from "../../types";
import { useNavigate, useLocation } from "react-router-dom";

const NavigateButton = ({ text, icon, url }: NavigateButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    navigate(url);
  };

  const pathnameSegments = location.pathname.split("/").filter(Boolean);

  const isActive = pathnameSegments.some(
    (segment) => segment.toLowerCase() === url
  );

  let navigateStyle = isActive ? " bg-black text-white" : "  text-black";

  return (
    <button
      className={`flex items-center gap-3 p-2 duration-500 ease-in-out w-full hover:bg-black hover:text-white ${navigateStyle}`}
      onClick={handleNavigate}
    >
      {icon}
      <RegularText text={text} />
    </button>
  );
};

export default NavigateButton;
