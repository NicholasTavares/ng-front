import baseAPI from "./baseAPI";

type SignInPost = {
  username: string;
  password: string;
};

type SignInResponse = {
  token: string;
};

export const signInPost = async ({
  username,
  password,
}: SignInPost): Promise<SignInResponse> => {
  const response = await baseAPI.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};
