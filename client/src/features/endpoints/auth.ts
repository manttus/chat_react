import { api } from "../apiService/api";

const authURL: string = `${import.meta.env.VITE_BASE_URL}/auth`;

type Tokens = {
  access: string;
  refresh: string;
};

export const useLogin = async (data: LoginFormType): Promise<Tokens> => {
  const response = await api.post<LoginFormType, any>(
    authURL + "/login",
    data,
    { "Content-Type": "application/json; charset=UTF-8" }
  );
  const tokens: Tokens = await response.data;
  return tokens;
};
