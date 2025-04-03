import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputRow from "./InputRow";
import { FormAuthProps } from "../../types";
import SubmitButton from "../button/SubmitButton";
import RegularText from "../text/RegularText";
import { MdSave, MdDelete } from "react-icons/md";

const FormAuth = ({
  pageType,
  initialState,
  onSubmit,
  handleDelete,
}: FormAuthProps) => {
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  const handleRoute = () => {
    if (pageType === "login") {
      navigate("/register");
    } else if (pageType === "register") {
      navigate("/login");
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
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
    <form onSubmit={handleSubmit}>
      {pageType === "update" && (
        <div className="flex flex-row">
          <SubmitButton text="SAVE UPDATE" icon={<MdSave />} />
          <button
            type="button"
            className="flex justify-center mx-auto items-center gap-3 p-2 duration-500 ease-in-out w-full hover:bg-black hover:text-white"
            onClick={handleDelete}
          >
            <MdDelete />
            <RegularText text={"DELETE ACCOUNT"} />
          </button>
        </div>
      )}
      {pageType != "login" && (
        <InputRow
          type="text"
          placeholder="Name"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      )}

      <InputRow
        type="text"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <InputRow
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      {pageType != "update" && (
        <div className="text-center  ">
          <SubmitButton text={pageType === "login" ? "Masuk" : "Daftar"} />

          <RegularText text="Tidak punya akun ?" />

          <div onClick={handleRoute} className="cursor-pointer">
            <RegularText text={pageType === "login" ? "Daftar" : "Masuk"} />
          </div>
        </div>
      )}
    </form>
  );
};

export default FormAuth;
