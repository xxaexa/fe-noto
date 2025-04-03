import { TextProps } from "./../../types/index";

const RegularText = ({ text }: TextProps) => {
  return <p className="text-sm">{text}</p>;
};

export default RegularText;
