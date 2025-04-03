import { FaArrowLeft } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import RegularText from "../text/RegularText";
import { useNavigate, useLocation } from "react-router-dom";
import { setToggle } from "../../redux/features/toggleSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate(-1);
  };

  const handleMenu = () => {
    dispatch(setToggle());
  };
  type StaticPathActions = {
    [key: string]: JSX.Element;
  };

  const renderContent = () => {
    const location = useLocation();

    const staticPathActions: StaticPathActions = {
      "/note": <RegularText text="NOTE" />,
      "/account": (
        <>
          <div>&nbsp;</div>
          <RegularText text="ACCOUNT" />
        </>
      ),
    };

    let dynamicElement: JSX.Element | null = null;
    const isAccountUpdatePath = /\/account\/update\/[^/]+/.test(
      location.pathname
    );
    const isNoteUpdatePath = /\/note\/update\/[^/]+/.test(location.pathname);

    if (isAccountUpdatePath || location.pathname === "/account/information") {
      dynamicElement = (
        <FaArrowLeft
          className="text-xl cursor-pointer"
          onClick={handleNavigate}
        />
      );
    } else if (location.pathname === "/note/add" || isNoteUpdatePath) {
      dynamicElement = (
        <FaArrowLeft
          className="text-xl cursor-pointer"
          onClick={handleNavigate}
        />
      );
    }

    return staticPathActions[location.pathname] || dynamicElement;
  };

  return (
    <nav
      className={`fixed w-full h-12 justify-between items-center px-4 text-primary text-3xl bg-transparent ${
        location.pathname === "/login" || location.pathname === "/register"
          ? "hidden"
          : "flex"
      }`}
    >
      {renderContent()}
      <div className="cursor-pointer text-3xl" onClick={handleMenu}>
        <FiMenu />
      </div>
    </nav>
  );
};

export default Navbar;
