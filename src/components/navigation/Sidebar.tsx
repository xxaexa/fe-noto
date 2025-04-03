import ContentShared from "../shared/ContentShared";

const Sidebar = () => {
  return (
    <div className="flex flex-col md:justify-between min-w-[160px] h-screen py-8 md:border-l-[1px] md:border-r-[1px] md:border-black">
      <ContentShared />
    </div>
  );
};

export default Sidebar;
