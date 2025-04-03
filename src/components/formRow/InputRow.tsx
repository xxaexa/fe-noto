import { InputProps } from "../../types";

const InputRow = ({ type, name, value, placeholder, onChange }: InputProps) => {
  return (
    <div className=" my-5">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full outline-none px-2 py-1  bg-[#f2f2f2] border-black border-b-[1px] text-sm"
      />
    </div>
  );
};

export default InputRow;
