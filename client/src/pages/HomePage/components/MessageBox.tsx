import CustomIconButton from "../../../components/button/CustomIconButton";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import CustomField from "../../../components/inputs/CustomField";
import { UseFormRegister } from "react-hook-form";

type MessageBoxProps = {
  register: UseFormRegister<MessageFormType>;
};

const MessageBox = ({ register }: MessageBoxProps) => {
  return (
    <div className="flex bg-white h-20 w-full border-y border-gray-300 justify-around items-center px-2 gap-2">
      <CustomIconButton Icon={GrGallery} />
      <form className="w-[580px]">
        <CustomField
          type="text"
          placeholder="Write Something"
          register={{
            ...register("message"),
            required: false,
          }}
          isValid={true}
        />
      </form>
      <div className="flex gap-2">
        <CustomIconButton Icon={MdOutlineKeyboardVoice} />
        <CustomIconButton Icon={AiOutlineSend} bg="primary" color="white" />
      </div>
    </div>
  );
};
export default MessageBox;
