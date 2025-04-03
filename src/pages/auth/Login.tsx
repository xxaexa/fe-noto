import FormAuth from "../../components/formRow/FormAuth";
import AuthWrapper from "../../components/wrapper/AuthWrapper";
import TitleText from "../../components/text/TitleText";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ILoginRequest } from "../../types";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isError, isSuccess, error }] =
    useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: ILoginRequest) => {
    if (values.email === "" || values.password === "") {
      return toast.error("Email or Password don't be empty");
    } else {
      const user = await loginUser(values).unwrap();
      dispatch(setUser(user));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully");
    } else if (isError) {
      toast.error("something wrong");
    }
  }, [isLoading, isSuccess, isError, navigate, error]);

  return (
    <AuthWrapper>
      <TitleText text={"MASUK"} />
      <FormAuth
        initialState={{ email: "", password: "" }}
        pageType="login"
        onSubmit={handleSubmit}
      />
    </AuthWrapper>
  );
};

export default Login;
