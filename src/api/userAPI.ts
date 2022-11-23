import baseAPI from "./baseAPI";

type LoggedUserGetResponse = {
  id: string;
  username: string;
  account: {
    balance: number;
  };
};

export const loggedUserGet = async (
  jwt?: string
): Promise<LoggedUserGetResponse> => {
  const response = await baseAPI.get("/users", {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });
  // convert cents to reais
  response.data.account.balance = response.data.account.balance / 100;

  return response.data;
};
