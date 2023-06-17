import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import CustomForm from "../../../components/form/CustomForm";
import CustomField from "../../../components/inputs/CustomField";
import FormLabel from "../../../components/label/FormLabel";
import CustomButton from "../../../components/button/CustomButton";

type RegisterPropsType = {
  onSubmit: () => void;
  register: UseFormRegister<RegisterFormType>;
  handleSubmit: UseFormHandleSubmit<RegisterFormType, undefined>;
  errors: FieldErrors<RegisterFormType>;
};

const RegisterForm = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
}: RegisterPropsType) => {
  return (
    <CustomForm onSubmit={handleSubmit((data: RegisterFormType) => onSubmit())}>
      <div className="flex flex-col gap-2">
        <FormLabel text="Username" />
        <CustomField<UseFormRegisterReturn>
          register={{
            ...register("username", {
              required: true,
              minLength: { value: 5, message: "Invalid Length" },
            }),
          }}
          type="text"
          placeholder="Username"
          isValid={errors.username ? false : true}
        />
        <FormLabel text="Email" />
        <CustomField<UseFormRegisterReturn>
          register={{
            ...register("email", {
              required: true,
              minLength: { value: 5, message: "Invalid Length" },
            }),
          }}
          type="email"
          placeholder="Email"
          isValid={errors.email ? false : true}
        />
        <FormLabel text="Password" />
        <CustomField<UseFormRegisterReturn>
          register={{
            ...register("password", {
              required: true,
              minLength: { value: 8, message: "Invalid Length" },
            }),
          }}
          type="password"
          placeholder="Username"
          isValid={errors.password ? false : true}
        />
      </div>
      <CustomButton text="Register" bg="bg-primary" color="text-white" />
    </CustomForm>
  );
};

export default RegisterForm;
