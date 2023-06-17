import { useForm } from "react-hook-form";
import HeadingLarge from "../../components/headings/HeadingLarge";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormType>();
  const submitHandler = (data: LoginFormType) => {
    console.log(data);
    reset();
    clearErrors();
  };
  return (
    <div className="flex flex-col pb-20 flex-grow justify-center">
      <div className="flex w-full pb-10 justify-center ">
        <HeadingLarge text="Sign In" />
      </div>
      <div className="flex w-full justify-center">
        <LoginForm
          errors={errors}
          submitHandler={submitHandler}
          register={register}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;
