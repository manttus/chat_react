import { useForm } from "react-hook-form";
import RegisterForm from "./components/RegisterForm";
import HeadingLarge from "../../components/headings/HeadingLarge";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();
  const registerHandler = () => {};
  return (
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="flex w-full pb-10 justify-center ">
        <HeadingLarge text="Register" />
      </div>
      <RegisterForm
        register={register}
        onSubmit={registerHandler}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </div>
  );
};

export default RegisterPage;
