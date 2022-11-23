import baseAPI from "./baseAPI";

type TransactionPostProps = {
  jwt?: string;
  value: number;
  destination: {
    id: string;
    username: string;
  };
};

export const transactionPost = async ({
  jwt,
  value,
  destination,
}: TransactionPostProps): Promise<void> => {
  const response = await baseAPI.post(
    "/transactions",
    {
      credited_user_id: destination.id,
      value,
    },
    {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    }
  );

  return response.data;
};
