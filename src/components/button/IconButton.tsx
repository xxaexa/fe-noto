import { IconButtonProps } from "../../types";

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button className="text-xl p-1 text-black" onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
