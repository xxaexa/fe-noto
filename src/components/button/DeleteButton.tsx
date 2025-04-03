import { MdDelete } from "react-icons/md";
import { RegularText } from "..";
import { DeleteButtonProps } from "../../types";

const DeleteButton = ({ handleDelete }: DeleteButtonProps) => {
  return (
    <button
      type="button"
      className="flex justify-center mx-auto items-center gap-3 p-2 duration-500 ease-in-out w-full hover:bg-black hover:text-white"
      onClick={handleDelete}
    >
      <MdDelete />
      <RegularText text={"DELETE ACCOUNT"} />
    </button>
  );
};

export default DeleteButton;
