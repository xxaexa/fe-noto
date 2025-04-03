import { LuUser2, LuUserCog2 } from "react-icons/lu";
import { getUserFromLocalStorage } from "../../utils/localStorage";

import { NavigateButton, SubSidebar } from "../../components/";

const Account = () => {
  const user = getUserFromLocalStorage();

  return (
    <SubSidebar>
      <NavigateButton icon={<LuUser2 />} text="INFORMATION" url="information" />

      <NavigateButton
        icon={<LuUserCog2 />}
        text="UPDATE"
        url={`update/${user?.user._id}`}
      />
    </SubSidebar>
  );
};

export default Account;
