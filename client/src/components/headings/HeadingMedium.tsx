type HeadingProps = {
  text: string;
};

const HeadingMedium = ({ text }: HeadingProps) => {
  return <p className="text-lg font-semibold">{text}</p>;
};

export default HeadingMedium;
