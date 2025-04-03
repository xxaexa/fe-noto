import FormAuth from "../../components/formRow/FormAuth";
import AuthWrapper from "../../components/wrapper/AuthWrapper";
import TitleText from "../../components/text/TitleText";
import { useRegisterUserMutation } from "../../redux/api/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { IRegisterRequest } from "../../types";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const handleSubmit = async (values: IRegisterRequest) => {
    if (
      values.email === "" ||
      values.username === "" ||
      values.password === ""
    ) {
      return toast.error("Username or Name or Password cannot be empty");
    } else {
      await registerUser(values);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Register Success");
      navigate("/login");
    } else if (isError) {
      toast.error("Something wrong");
    }
  }, [isLoading]);

  return (
    <AuthWrapper>
      <TitleText text={"REGISTER"} />
      <FormAuth
        initialState={{ username: "", email: "", password: "" }}
        pageType="register"
        onSubmit={handleSubmit}
      />
    </AuthWrapper>
  );
};

export default Register;
