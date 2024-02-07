import { apiInstance } from "@/lib/axiosClient";
import { ISignInError, IUser } from "@/types/auth";
import envVars from "@/utils/env";

export const postSignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUser | ISignInError> => {
  const response = await apiInstance.post(`${envVars.apiUri}/v1/sign-in`, {
    email,
    password,
  });
  return response.data;
};
