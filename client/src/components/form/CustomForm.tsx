import { FormEvent, PropsWithChildren } from "react";

type CustomFormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const CustomForm = ({
  onSubmit,
  children,
}: PropsWithChildren<CustomFormProps>) => {
  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default CustomForm;
