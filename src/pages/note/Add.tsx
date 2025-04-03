import Content from "../../components/wrapper/Content";
import FormNote from "../../components/formRow/FormNote";
import { useCreateNoteMutation } from "../../redux/api/noteApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { INoteRequest } from "../../types";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [createNote, { isLoading, isError, isSuccess, error }] =
    useCreateNoteMutation();

  const navigate = useNavigate();

  const handleCreateSubmit = async (values: INoteRequest) => {
    await createNote(values);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully save note");
      navigate("/note");
    } else if (isError) {
      toast.error("Something error");
      console.log(error as any);
    }
  }, [isLoading]);

  return (
    <Content>
      <FormNote
        initialState={{ title: "", description: "" }}
        pageType="add"
        onSubmit={handleCreateSubmit}
      />
    </Content>
  );
};

export default Add;
