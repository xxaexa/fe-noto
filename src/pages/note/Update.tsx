import Content from "../../components/wrapper/Content";
import FormNote from "../../components/formRow/FormNote";
import {
  useUpdateNoteMutation,
  useGetNoteQuery,
  useDeleteNoteMutation,
} from "../../redux/api/noteApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { INoteRequest } from "../../types";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [
    updateNote,
    {
      isLoading: updating,
      isError: updateError,
      isSuccess: updateSuccess,
      error,
    },
  ] = useUpdateNoteMutation();

  const [deleteNote, { isLoading: deleting, isSuccess: deleteSuccess }] =
    useDeleteNoteMutation();

  const { data: note, isLoading: loadNote } = useGetNoteQuery(id);

  const handleUpdateSubmit = async (values: INoteRequest) => {
    await updateNote(values);
  };

  const handleDelete = async () => {
    await deleteNote(id!);
  };

  // Handle Update Success and Error
  useEffect(() => {
    if (updateSuccess) {
      toast.success("Successfully update note");
    } else if (updateError) {
      toast.error("something error");
      console.log(error as any);
    }
  }, [updating]);

  // Handle Delete Success and Error
  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Successfully delete note");
      navigate("/note");
    }
  }, [deleting]);

  if (loadNote) {
    return <Content>loading..</Content>;
  }

  return (
    <Content>
      <FormNote
        initialState={{
          title: note?.title,
          description: note?.description,
          _id: note?._id,
        }}
        pageType="update"
        onSubmit={handleUpdateSubmit}
        handleDelete={handleDelete}
      />
    </Content>
  );
};

export default Update;
