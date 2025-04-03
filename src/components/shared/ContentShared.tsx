import NavigateButton from "../button/NavigateButton";
import IconButton from "../button/IconButton";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { FaRegNoteSticky } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setToggle } from "../../redux/features/toggleSlice";
import { logout } from "../../redux/features/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContentShared = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setToggle());
  };

  const handleLogout = async () => {
    dispatch(logout());
    toast.success("Successfully logout");
    navigate("/login");
  };

  return (
    <>
      <div className="md:hidden flex justify-end px-3">
        <IconButton icon={<FaX />} onClick={handleClick} />
      </div>
      <NavigateButton icon={<FaRegNoteSticky />} text="NOTE" url="note" />
      <div className="md:space-y-6 w-full">
        <NavigateButton
          icon={<MdOutlineAccountCircle />}
          text="ACCOUNT"
          url="account"
        />
        <div onClick={handleLogout}>
          <NavigateButton icon={<BiLogOutCircle />} text="LOGOUT" url="" />
        </div>
      </div>
    </>
  );
};

export default ContentShared;
