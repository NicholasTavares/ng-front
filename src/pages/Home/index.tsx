import { useQuery } from "react-query";
import { useAuth } from "../../hooks/useAuth";
import { loggedUserGet } from "../../api/userAPI";
import logo from "../../assets/logo.svg";
import { Balance } from "../../components/Balance";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Transference } from "../../components/Transference";
import { MyTransfers } from "../../components/ MyTransfers";

const Home = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const { data: user, isFetching } = useQuery(
    ["user", auth?.jwt],
    async () => await loggedUserGet(auth?.jwt)
  );

  const Logout = () => {
    auth?.setJwt(undefined);
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.LogoContainer>
          <S.Logo src={logo} alt="NG.CASH white logo in dark grey background" />
        </S.LogoContainer>
        <S.TitleButtonContainer>
          <S.HeaderTitle>Hello, {user?.username}</S.HeaderTitle>
          <S.SignOutButton onClick={() => Logout()}>SignOut</S.SignOutButton>
        </S.TitleButtonContainer>
      </S.HeaderContainer>
      <S.MainContainer>
        <S.ContainerBalanceTransference>
          <Balance balance={user?.account.balance} />
          <Transference />
        </S.ContainerBalanceTransference>
        <MyTransfers />
      </S.MainContainer>
    </S.Container>
  );
};

export default Home;
