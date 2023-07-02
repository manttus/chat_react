import { useForm } from "react-hook-form";
import HeadingLarge from "../../components/headings/HeadingLarge";
import LoginForm from "./components/LoginForm";
import { useMutation } from "@tanstack/react-query";
import { useLogin } from "../../features/endpoints/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormType>();

  const navigate = useNavigate();
  const { mutateAsync: loginMutation } = useMutation({
    mutationFn: (data: LoginFormType) => useLogin(data),
  });

  const submitHandler = async (data: LoginFormType) => {
    const response = await loginMutation(data);
    if (response) {
      navigate("/");
      reset();
      clearErrors();
    }
  };

  return (
    <div className="flex flex-col pb-20 flex-grow justify-center">
      <div className="flex w-full pb-10 justify-center ">
        <HeadingLarge text="Sign In" />
      </div>
      <div className="flex w-full justify-center items-center">
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
