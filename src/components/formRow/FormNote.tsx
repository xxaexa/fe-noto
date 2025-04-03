import { FormNoteProps } from "../../types";
import { MdDeleteOutline, MdSave } from "react-icons/md";
import InputRow from "./InputRow";
import TextArea from "./TextArea";
import SubmitButton from "../button/SubmitButton";
import RegularText from "../text/RegularText";

import { useState, useEffect } from "react";

const FormNote = ({
  initialState,
  pageType,
  onSubmit,
  handleDelete,
}: FormNoteProps) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    setValues(initialState);
  }, [initialState]);

  return (
    <form className="flex flex-col h-full" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        {pageType === "add" ? (
          <SubmitButton text="SAVE" icon={<MdSave />} />
        ) : (
          <>
            <SubmitButton text="UPDATE" icon={<MdSave />} />
            <button
              type="button"
              className="flex justify-center items-center gap-3 p-2 duration-500 ease-in-out w-full hover:bg-black hover:text-white"
              onClick={handleDelete}
            >
              <MdDeleteOutline />
              <RegularText text={"DELETE"} />
            </button>
          </>
        )}
      </div>
      <div className="flex-1 border-[1px] md:border-0 md:border-t-[1px] border-black mt-6 h-screen flex flex-col">
        <InputRow
          type="text"
          placeholder="Type your title..."
          name="title"
          value={values?.title}
          onChange={handleChange}
        />

        <div className="flex-1">
          <TextArea
            name="description"
            value={values?.description}
            placeholder="Type your content..."
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default FormNote;
