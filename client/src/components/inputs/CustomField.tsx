type CustomFieldProps<T> = {
  type: string;
  placeholder: string;
  onFocus?: () => void;
  isValid?: boolean | undefined;
  register: T;
};

const CustomField = <T,>({
  type,
  placeholder,
  isValid,
  onFocus,
  register,
}: CustomFieldProps<T>) => {
  const style = `p-2 border ${
    !isValid ? "border-red-400" : "border-gray-300"
  } rounded-md placeholder:text-sm focus:outline-primary`;
  return (
    <input
      {...register}
      className={style}
      type={type}
      placeholder={placeholder}
      onFocus={onFocus}
    />
  );
};

export default CustomField;
