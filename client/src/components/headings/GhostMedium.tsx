type HeadingProps = {
  text: string;
};

const GhostMedium = ({ text }: HeadingProps) => {
  return <p className="text-md text-gray-500">{text}</p>;
};

export default GhostMedium;
