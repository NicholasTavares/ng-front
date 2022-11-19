import baseAPI from "./baseAPI";

type SignInPostProps = {
  username: string;
  password: string;
};

type SignInResponse = {
  token: string;
};

export const signInPost = async ({
  username,
  password,
}: SignInPostProps): Promise<SignInResponse> => {
  const response = await baseAPI.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};
