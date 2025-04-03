import { TextAreaProps } from "../../types";

const InputRow = ({ value, name, placeholder, onChange }: TextAreaProps) => {
  return (
    <div className=" my-5">
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="resize-none min-h-[55vh]  md:min-h-[64vh] w-full outline-none px-2 pt-1 bg-[#f2f2f2] border-[#171717] border-t-[1px] md:border-b-[1px] text-sm scrollbar-track-gray-100 scrollbar-thumb-black hover:scrollbar-thumb-gray-500 scrollbar-thin"
        value={value}
      ></textarea>
    </div>
  );
};

export default InputRow;
