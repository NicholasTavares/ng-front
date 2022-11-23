import { useState } from "react";
import * as S from "./styles";

type BalanceProps = {
  balance?: number;
};

export const Balance = ({ balance }: BalanceProps) => {
  const [showBalance, setShowBalance] = useState(true);
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Balance</S.Title>
      </S.TitleContainer>
      <S.BalanceContainer>
        <S.Balance>R$ {showBalance ? balance : "******"}</S.Balance>
        <S.IconContainer onClick={() => setShowBalance(!showBalance)}>
          {showBalance ? <S.SeePasswordIcon /> : <S.DontSeePasswordIcon />}
        </S.IconContainer>
      </S.BalanceContainer>
    </S.Container>
  );
};
