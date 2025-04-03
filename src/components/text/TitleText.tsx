import { TextProps } from "./../../types/index";

const TitleText = ({ text }: TextProps) => {
  return <h2 className="text-sm mb-2">{text}</h2>;
};

export default TitleText;
