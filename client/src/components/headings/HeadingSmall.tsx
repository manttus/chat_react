type HeadingProps = {
  text: string;
};

const HeadingSmall = ({ text }: HeadingProps) => {
  return <p className="text-sm font-medium">{text}</p>;
};

export default HeadingSmall;
