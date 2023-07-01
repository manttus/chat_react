type HeadingProps = {
  text: string;
};

const GhostSmall = ({ text }: HeadingProps) => {
  return <p className="text-xs text-gray-500">{text}</p>;
};

export default GhostSmall;
