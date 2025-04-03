import Content from "../../components/wrapper/Content";
import TitleText from "../../components/text/TitleText";
import RegularText from "../../components/text/RegularText";

import { getUserFromLocalStorage } from "../../utils/localStorage";

const Information = () => {
  const localUser = getUserFromLocalStorage();
  // const { data: user } = useGetUserQuery(localUser?.user.user._id);
  console.log(localUser?.user.data.user);
  const user = localUser?.user.data.user;
  return (
    <Content>
      <div className="p-1.5 w-full mb-6 bg-black">&nbsp;</div>
      <div className="px-4">
        <div className="flex flex-row gap-4">
          <TitleText text={"Email"} />
          <TitleText text={user?.email} />
        </div>
        <div className="flex flex-row gap-4">
          <RegularText text={"Username"} />
          <RegularText text={user?.username} />
        </div>
      </div>
    </Content>
  );
};

export default Information;
