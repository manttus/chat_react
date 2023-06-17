type LabelProps = {
  text: string;
};

const FormLabel = ({ text }: LabelProps) => {
  return <p className="text-sm">{text}</p>;
};

export default FormLabel;
