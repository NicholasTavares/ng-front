import { UseFormSetValue } from "react-hook-form";
import { useQuery } from "react-query";
import { usersGet } from "../../api/userAPI";
import { TransactionPost } from "../Transference";
import * as S from "./styles";

type UserDestinyProps = {
  id: string;
  username: string;
};

type AutoCompleteProps = {
  searchUser?: string;
  setValue: UseFormSetValue<TransactionPost>;
  setSearchUser: (text: string) => void;
  setUserDestiny: ({ id, username }: UserDestinyProps) => void;
};

export const AutoComplete = ({
  searchUser,
  setValue,
  setSearchUser,
  setUserDestiny,
}: AutoCompleteProps) => {
  const { data: users } = useQuery(["users"], async () => await usersGet(), {
    staleTime: 5000 * 60, // 5 minutes
  });

  const filteredUsers =
    searchUser &&
    users?.filter((user) =>
      user.username.toLowerCase().includes(searchUser.toLowerCase())
    );

  return (
    <S.Container>
      {filteredUsers &&
        filteredUsers.map((user) => (
          <S.User
            key={user.id}
            onClick={() => {
              setValue("destination", user.username);
              setSearchUser("");
              setUserDestiny({ id: user.id, username: user.username });
            }}
          >
            <S.UserIcon />
            <S.UserName>{user.username}</S.UserName>
          </S.User>
        ))}
    </S.Container>
  );
};
