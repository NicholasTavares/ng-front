import * as S from "./styles";
import logo from "../../assets/logo.svg";

const NotFound = () => {
  return (
    <S.Container>
      <S.MsgContainer>
        <S.MsgTitle>404</S.MsgTitle>
        <S.MsgSubtitle>Page not found</S.MsgSubtitle>
        <S.LogoContainer to="/">
          <S.Logo src={logo} alt="NG.CASH white logo in dark grey background" />
        </S.LogoContainer>
      </S.MsgContainer>
    </S.Container>
  );
};

export default NotFound;
