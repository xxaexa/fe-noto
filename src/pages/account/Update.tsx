import Content from "../../components/wrapper/Content";
import FormAuth from "../../components/formRow/FormAuth";
import BoxPlaceholder from "../../components/placeholder/BoxPlaceholder";

import {
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../redux/api/userApi";
import { IRegisterRequest } from "../../types";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, isLoading: loadUser } = useGetUserQuery(id);

  const [
    updateUser,
    { isLoading: updating, isError: updateError, isSuccess: updateSuccess },
  ] = useUpdateUserMutation();

  const [
    deleteUser,
    { isLoading: deleting, isError: deleteError, isSuccess: deleteSuccess },
  ] = useDeleteUserMutation();

  const handleSubmit = async (values: IRegisterRequest) => {
    if (
      values.username === "" ||
      values.email === "" ||
      values.password === ""
    ) {
      return toast.error("Username,Name and password cant be empty");
    } else {
      await updateUser(values);
    }
  };

  const handleDelete = async () => {
    if (id) {
      await deleteUser(id);
    } else {
      toast.error("User ID is undefined");
    }
  };

  useEffect(() => {}, [loadUser]);

  // Handle Update Success and Error
  useEffect(() => {
    if (updateSuccess) {
      toast.success("Successfully Updated");
    } else if (updateError) {
      toast.error("Update failed: something went wrong");
    }
  }, [updating]);

  // Handle Delete Success and Error
  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Successfully Deleted");
      if (user?._id != 1) {
        return navigate("/login");
      } else {
        return navigate("/account");
      }
    } else if (deleteError) {
      toast.error("Delete failed: something went wrong");
    }
  }, [deleting]);

  return (
    <Content>
      {loadUser ? (
        <div className="w-full overflow-hidden">
          <BoxPlaceholder />
        </div>
      ) : (
        <FormAuth
          initialState={{
            username: user?.username || "",
            email: user?.email || "",
            _id: user?._id || id,
            password: "",
          }}
          pageType="update"
          handleDelete={handleDelete}
          onSubmit={handleSubmit}
        />
      )}
    </Content>
  );
};

export default Update;
