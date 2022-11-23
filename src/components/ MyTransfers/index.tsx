import { useQuery } from "react-query";
import { userTransactions } from "../../api/userAPI";
import { useAuth } from "../../hooks/useAuth";
import { parseJwt } from "../../utils/parseJWT";
import * as S from "./styles";

export const MyTransfers = () => {
  const auth = useAuth();
  const { data: trasnsfers } = useQuery(
    ["userTransfers", auth?.jwt],
    async () => await userTransactions(auth?.jwt)
  );
  const user = parseJwt(auth?.jwt);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>My Transfers</S.Title>
      </S.TitleContainer>
      {trasnsfers?.length ? (
        trasnsfers.map((transaction) => (
          <S.Transfer
            typeTransfer={
              transaction.debitedAccountUser_username === user?.username
            }
            key={transaction.transaction_id}
          >
            <S.DateTitleTopic>
              {new Date(transaction.transaction_created_at).toLocaleString(
                "pt-Br",
                {
                  dateStyle: "short",
                  timeStyle: "short",
                  timeZone: "America/Sao_Paulo",
                }
              )}
            </S.DateTitleTopic>
            <S.ContainerTopic>
              <S.Topic>From:</S.Topic>
              <S.TopicContent>
                {transaction.debitedAccountUser_username}
              </S.TopicContent>
            </S.ContainerTopic>
            <S.ContainerTopic>
              <S.Topic>To:</S.Topic>
              <S.TopicContent>
                {transaction.creditedAccountUser_username}
              </S.TopicContent>
            </S.ContainerTopic>
            <S.ContainerTopic>
              <S.Topic>Value:</S.Topic>
              <S.TopicContent>
                R$ {transaction.transaction_value / 100}
              </S.TopicContent>
            </S.ContainerTopic>
          </S.Transfer>
        ))
      ) : (
        <S.NoTransactionMsg>No transfer at the moment</S.NoTransactionMsg>
      )}
    </S.Container>
  );
};
