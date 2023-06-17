type CustomLinkProps = {
  text: string;
  onClick: () => void;
};

const CustomLink = ({ text, onClick }: CustomLinkProps) => {
  return (
    <p className="text-xs text-blue-600 cursor-pointer" onClick={onClick}>
      {text}
    </p>
  );
};
export default CustomLink;
