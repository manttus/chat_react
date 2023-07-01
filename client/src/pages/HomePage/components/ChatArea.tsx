import ChatRight from "../components/ChatRight";
import MessageBox from "../components/MessageBox";
import GhostSmall from "../../../components/headings/GhostSmall";
import Avatar from "../../../components/avatar/Avatar";
import HeadingSmall from "../../../components/headings/HeadingSmall";
import MessageBubble from "../components/MessageBubble";
import { UseFormRegister } from "react-hook-form";

type ChatAreaProps = {
  register: UseFormRegister<{ message: string }>;
  data: {
    username: string;
    image: string;
    message: string;
    time: string;
  };
};

const ChatArea = ({ register, data }: ChatAreaProps) => {
  return (
    <div className="hidden md:flex lg:flex w-3/4 md:w-full min-w-[150px]">
      <div className="flex flex-col justify-between w-3/4 flex-grow bg-gray-200 ">
        <div className="flex bg-white h-16 w-full border-b border-gray-300 items-center px-4 gap-2">
          <Avatar image={data.image} />
          <div>
            <HeadingSmall text={data.username} />
            <GhostSmall text="Online" />
          </div>
        </div>
        <div className="flex flex-col flex-grow justify-end py-5 gap-2 overflow-y-scroll no-scrollbar">
          {/* <MessageBubble message="Hello" sender={true} />
          <MessageBubble message="Hi" sender={false} />
          <MessageBubble message="How are you ?" sender={false} />
          <MessageBubble message="Fine. How about you ?" sender={true} />
          <MessageBubble message="Brrrrrrrr" sender={false} />
          <MessageBubble message="Idiot Dog" sender={true} />
          <MessageBubble
            message="Brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr"
            sender={true}
          />
          <MessageBubble message="u are Idiot dog" sender={false} /> */}
        </div>
        <MessageBox register={register} />
      </div>
      <ChatRight />
    </div>
  );
};

export default ChatArea;
