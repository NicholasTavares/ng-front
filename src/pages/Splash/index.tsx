import * as S from "./styles";
import logo from "../../assets/logo.svg";

const Splash = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo
          src={logo}
          alt="NG.CASH white logo in dark grey background with floating loading animation."
        />
      </S.LogoContainer>
    </S.Container>
  );
};

export default Splash;
