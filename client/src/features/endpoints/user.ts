import { api } from "../apiService/api";

const userURL: string = `${import.meta.env.VITE_BASE_URL}/user`;

type UserDataType = {
  username: string;
  email: string;
};

type UsersDataType = {
  _id: string;
  username: string;
  email: string;
  image: string;
}
export const getProfile = async (): Promise<UserDataType> => {
  const response = await api.get<UserDataType>(userURL + "/profile");
  const user: UserDataType = response.data;
  return user;
};

export const getSearchedUser = async (text: string): Promise<UsersDataType[]> => {
  const response = await api.get<{ data: UsersDataType[] }>(`${import.meta.env.VITE_BASE_URL}/search/${text}`);
  return response.data.data;
}
