import ProfileAvatar from "../../../components/avatar/ProfileAvatar";
import CustomIconButton from "../../../components/button/CustomIconButton";
import HeadingSmall from "../../../components/headings/HeadingSmall";
import {
  AiOutlineUser,
  AiOutlineAudioMuted,
  AiOutlineSearch,
} from "react-icons/ai";

type ChatRightProps = {
  data: {
    username: string;
    image: string;
    messages: [];
    time: string;
  };
};

const ChatRight = ({ data }: ChatRightProps) => {
  return (
    <div className="hidden lg:flex xl:flex w-1/4 border-l border-gray-300">
      <div className="flex flex-col gap-4 w-full items-center pt-10">
        <div className="flex flex-col gap-2 items-center">
          <ProfileAvatar image={data.image} />
          <HeadingSmall text={data.username} />
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
