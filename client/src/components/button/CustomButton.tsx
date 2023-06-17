type ButtonProps = {
  text: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
};

const CustomButton = ({ text, onClick, bg, color }: ButtonProps) => {
  const style = `border py-2 px-3 rounded-md transition ease-in-out duration-700 shadow-sm text-sm ${bg} ${color} hover:scale-105`;
  return (
    <button type="submit" className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
