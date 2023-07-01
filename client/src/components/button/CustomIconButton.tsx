import { IconType } from "react-icons";

type CustomIconButtonProps = {
  Icon: IconType;
  onClick?: () => void;
  bg?: string;
  color?: string;
};

const CustomIconButton = ({
  Icon,
  onClick,
  color,
  bg,
}: CustomIconButtonProps) => {
  const style = `flex justify-center items-center border border-gray-300 bg-gray-100 p-3 transition-all duration-500 rounded-full hover:scale-105 cursor-pointer text-lg bg-${bg} text-${color}`;
  return (
    <div className={style} onClick={onClick}>
      <Icon />
    </div>
  );
};

export default CustomIconButton;
