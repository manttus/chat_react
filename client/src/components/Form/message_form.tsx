import { ChangeEvent } from "react";

type MessageFormProps = {
  setMessage: (message: string) => void;
  submitHandler: () => void;
};

const MessageForm = ({ setMessage, submitHandler }: MessageFormProps) => {
  return (
    <form
      onSubmit={(e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <input
        type="text"
        placeholder="Message"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
