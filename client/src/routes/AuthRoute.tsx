import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../features/endpoints/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../features/slices/authSlice/authSlice";
import { useEffect } from "react";

type AuthRouteProps = {
  Page: JSX.Element;
};

const AuthRoute = ({ Page }: AuthRouteProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getProfile,
    refetchOnWindowFocus: true,
    retry: false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        navigate("/login");
      } else {
        dispatch(setUser(user));
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return;
  }
  return Page;
};
export default AuthRoute;
