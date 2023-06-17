type HeadingProps = {
  text: string;
};

const HeadingLarge = ({ text }: HeadingProps) => {
  return <p className="text-2xl">{text}</p>;
};

export default HeadingLarge;
