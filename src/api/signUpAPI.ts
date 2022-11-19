import baseAPI from "./baseAPI";

type SignUpPostProps = {
  username: string;
  password: string;
  passwordConfirm: string;
};

export const signUpPost = async ({
  username,
  password,
  passwordConfirm,
}: SignUpPostProps): Promise<void> => {
  const response = await baseAPI.post("/users", {
    username,
    password,
    passwordConfirm,
  });

  return response.data;
};
