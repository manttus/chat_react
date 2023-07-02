import { FormEvent, PropsWithChildren } from "react";

type CustomFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  width?: string;
};

const CustomForm = ({
  onSubmit,
  width,
  children,
}: PropsWithChildren<CustomFormProps>) => {
  const style = `flex flex-col ${width ? width : "w-full"} gap-4`;
  return (
    <form className={style} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default CustomForm;
