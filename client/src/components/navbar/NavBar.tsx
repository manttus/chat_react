import { Outlet } from "react-router-dom";
import CustomIconButton from "../button/CustomIconButton";
import { FiBell } from "react-icons/fi";
import Avatar from "../avatar/Avatar";
import HeadingSmall from "../headings/HeadingSmall";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state: any) => state.auth);
  return (
    <div className="flex flex-col flex-grow w-full h-screen">
      <div className="flex h-16 border border-gray-100 items-center justify-end">
        <div className="flex justify-between w-full md:justify-end lg:justify-end xl:justify-end items-center gap-2 px-5">
          <CustomIconButton Icon={FiBell} />
          <div className="flex items-center gap-2">
            <Avatar image={user.image} />
            <div className="hidden sm:block md:block lg:block">
              <HeadingSmall text={user.username} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow border">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
