import baseAPI from "./baseAPI";

type LoggedUserGetResponse = {
  id: string;
  username: string;
  account: {
    balance: number;
  };
};

type UsersGetProps = {
  id: string;
  username: string;
};

type UserTransactionResponse = {
  transaction_id: string;
  transaction_value: number;
  transaction_created_at: string;
  debitedAccountUser_username: string;
  creditedAccountUser_username: string;
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

export const usersGet = async (): Promise<UsersGetProps[]> => {
  const response = await baseAPI.get("/users/all");

  return response.data;
};

export const userTransactions = async (
  jwt?: string
): Promise<UserTransactionResponse[]> => {
  const response = await baseAPI.get("/transactions", {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });

  return response.data;
};
