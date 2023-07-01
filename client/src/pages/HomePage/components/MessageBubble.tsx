import HeadingSmall from "../../../components/headings/HeadingSmall";

type MessageBubbleProps = {
  sender: boolean;
  message: string;
};

const MessageBubble = ({ sender, message }: MessageBubbleProps) => {
  const style = `flex w-full justify-${sender ? "end" : "start"} px-6`;
  const bubbleStyle = `px-2 py-2 rounded-md bg-${
    sender ? "primary" : "white"
  } text-${sender ? "white" : "black"}`;
  return (
    <div className={style}>
      <div className={bubbleStyle}>
        <HeadingSmall text={message} />
      </div>
    </div>
  );
};

export default MessageBubble;
