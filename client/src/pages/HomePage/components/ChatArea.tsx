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
    time: string;
    messages: [];
  };
};

const ChatArea = ({ register, data }: ChatAreaProps) => {
  return (
    <div className="hidden md:flex lg:flex w-3/4 md:w-full min-w-[150px] ">
      <div className="flex flex-col justify-between w-3/4 flex-grow bg-gray-200 ">
        <div className="flex bg-white h-16 w-full border-b border-gray-300 items-center px-4 gap-2">
          <Avatar image={data.image} />
          <div>
            <HeadingSmall text={data.username} />
            <GhostSmall text="Online" />
          </div>
        </div>
        <div className="flex-grow h-96 overflow-y-scroll justify-end py-5 gap-2 no-scrollbar">
          <div className="flex flex-col flex-grow gap-2 items-center justify-center">
            {data.messages.length === 0 && (
              <div className="flex flex-col flex-grow justify-center items-center">
                <div className="bg-white w-full px-5 py-2 shadow-sm border border-gray-300 rounded-md cursor-pointer">
                  Start Messaging
                </div>
              </div>
            )}
          </div>
        </div>
        <MessageBox register={register} />
      </div>
      <ChatRight data={data} />
    </div>
  );
};

export default ChatArea;
