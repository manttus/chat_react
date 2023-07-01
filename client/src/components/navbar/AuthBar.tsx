import { Outlet, useLocation } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const AuthBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" flex flex-col w-full h-screen">
      <div className="flex w-full justify-between items-center p-5 border shadow-sm">
        <div>
          <img className="h-10" src={logo} />
        </div>
        <div className="flex justify-end">
          <CustomButton
            text={
              location.pathname === "/login" ? "Create an Account" : "Log In"
            }
            onClick={() => {
              location.pathname === "/login"
                ? navigate("/register")
                : navigate("/login");
            }}
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthBar;
