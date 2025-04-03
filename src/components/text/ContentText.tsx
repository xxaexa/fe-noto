import { TextProps } from "./../../types/index";

const ContentText = ({ text }: TextProps) => {
  return <p className="text-xs truncate">{text}</p>;
};

export default ContentText;
