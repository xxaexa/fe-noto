import {
  SubSidebar,
  NavigateButton,
  Box,
  BoxPlaceholder,
} from "../../components/";

import { BiPlus } from "react-icons/bi";
import { useGetNotesQuery } from "../../redux/api/noteApi";

const Note = () => {
  const { data: notes = [], isError, isLoading } = useGetNotesQuery();

  if (isError) {
    return (
      <SubSidebar>
        <p className="text-red-500">Failed to load notes</p>
      </SubSidebar>
    );
  }
  return (
    <SubSidebar>
      <NavigateButton icon={<BiPlus />} url="add" text="ADD NOTE" />
      <div className="border-[1px] border-black block md:hidden"></div>
      <div className="flex flex-col space-y-2 md:space-y-9 overflow-y-scroll  scrollbar-track-gray-100 scrollbar-thumb-black hover:scrollbar-thumb-gray-500 scrollbar-thin ">
        {isLoading ? (
          <BoxPlaceholder />
        ) : (
          notes.map((note) => (
            <div key={note._id}>
              <Box
                id={note._id}
                title={note.title}
                content={note.description}
              />
            </div>
          ))
        )}
      </div>
    </SubSidebar>
  );
};

export default Note;
