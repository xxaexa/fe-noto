// Layout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/navigation/Sidebar";
import { useMediaQuery } from "../../hook/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isDesktop) {
      navigate("/note");
    }
  }, [isDesktop, navigate]);

  return (
    <div className="flex flex-row max-w-[1250px] mx-auto">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
