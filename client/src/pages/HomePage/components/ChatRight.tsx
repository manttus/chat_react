import ProfileAvatar from "../../../components/avatar/ProfileAvatar";
import CustomIconButton from "../../../components/button/CustomIconButton";
import HeadingSmall from "../../../components/headings/HeadingSmall";
import mantuu from "../../../assets/mantuu.jpeg";
import {
  AiOutlineUser,
  AiOutlineAudioMuted,
  AiOutlineSearch,
} from "react-icons/ai";

const ChatRight = () => {
  return (
    <div className="hidden lg:flex xl:flex w-1/4 border-l border-gray-300">
      <div className="flex flex-col gap-4 w-full items-center pt-10">
        <div className="flex flex-col gap-2 items-center">
          <ProfileAvatar image={mantuu} />
          <HeadingSmall text="Raymon Basnet" />
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-2">
            <CustomIconButton Icon={AiOutlineUser} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <CustomIconButton Icon={AiOutlineAudioMuted} />
          </div>
          <div className="flex flex-col items-center gap-2">
            <CustomIconButton Icon={AiOutlineSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatRight;
