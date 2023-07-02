import {
  UseFormRegisterReturn,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import CustomButton from "../../../components/button/CustomButton";
import CustomForm from "../../../components/form/CustomForm";
import CustomField from "../../../components/inputs/CustomField";
import FormLabel from "../../../components/label/FormLabel";
import CustomLink from "../../../components/links/CustomLink";

type LoginFormProps = {
  submitHandler: (data: LoginFormType) => void;
  register: UseFormRegister<LoginFormType>;
  handleSubmit: UseFormHandleSubmit<LoginFormType, undefined>;
  errors: FieldErrors<LoginFormType>;
};

const LoginForm = ({
  submitHandler,
  register,
  handleSubmit,
  errors,
}: LoginFormProps) => {
  return (
    <CustomForm
      width="w-1/4"
      onSubmit={handleSubmit((data: LoginFormType) => {
        submitHandler(data);
      })}
    >
      <div className="flex flex-col gap-2">
        <FormLabel text="Email Address" />
        <CustomField<UseFormRegisterReturn>
          register={{
            ...register("email", {
              required: true,
              minLength: { value: 8, message: "Invalid Length" },
            }),
          }}
          type="email"
          placeholder="Email"
          isValid={errors.email ? false : true}
        />
        <div className="flex justify-between items-center">
          <FormLabel text="Password" />
          <CustomLink onClick={() => {}} text="Forgot Password" />
        </div>
        <CustomField<UseFormRegisterReturn>
          register={{
            ...register("password", {
              required: true,
              minLength: { value: 8, message: "Invalid Length" },
            }),
          }}
          type="password"
          placeholder="Password"
          isValid={errors.password ? false : true}
        />
      </div>
      <CustomButton text="Sign In" bg="bg-primary" color="text-white" />
    </CustomForm>
  );
};

export default LoginForm;
