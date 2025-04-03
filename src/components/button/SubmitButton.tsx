import { IconSubmitProps } from "../../types";
import RegularText from "../text/RegularText";

const SubmitButton = ({ text, icon }: IconSubmitProps) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center gap-3 p-2 duration-500 ease-in-out w-full hover:bg-black hover:text-white mx-auto"
    >
      {icon && icon}
      <RegularText text={text} />
    </button>
  );
};

export default SubmitButton;
