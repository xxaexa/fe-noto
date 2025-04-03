import ContentShared from "../shared/ContentShared";
import { useAppSelector } from "../../redux/store";

const Menu = () => {
  const menu = useAppSelector((state) => state.toggleState.toggle);

  return (
    <div
      className={`fixed md:hidden bg-primary text-tertiary bg-gray-100 w-screen h-screen z-20 duration-500 ease-in-out py-3 ${
        menu ? "left-0" : "left-[1000px]"
      }`}
    >
      <ContentShared />
    </div>
  );
};

export default Menu;
