import Avatar from "../../../components/avatar/Avatar";

import HeadingSmall from "../../../components/headings/HeadingSmall";
import GhostSmall from "../../../components/headings/GhostSmall";

type MessageTileProps = {
  username: string;
  message: string;
  time: string;
  image: string;
  onClick: () => void;
};

const MessageTile = ({
  username,
  message,
  time,
  image,
  onClick,
}: MessageTileProps) => {
  return (
    <div
      className="flex justify-between gap-2  px-5 py-3 border-b  transition-all duration-500 border-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex gap-3 items-center ">
        <Avatar image={image} />
        <div className="flex flex-col gap-1">
          <HeadingSmall text={username} />
          <GhostSmall text={message} />
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-end pr-2">
        <GhostSmall text={time} />
      </div>
    </div>
  );
};

export default MessageTile;
