import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors["gray/900"]};
  overflow: hidden;
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 7rem;
`;

export const TitleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors["gray/50"]};
`;

export const SignOutButton = styled.div`
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 0.7rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/300"]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors["gray/50"]};
  font-size: 1.3rem;
  transition: all 500ms;
  margin-left: 1.5rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors["red/700"]};
    color: ${({ theme }) => theme.colors["red/700"]};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors["red/800"]};
    color: ${({ theme }) => theme.colors["red/800"]};
    transform: scale(1.05);
  }
`;

export const MainContainer = styled.main`
  border-radius: 3rem 3rem 0 0;
  flex: 1;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors["gray/50"]};
  box-shadow: 0px -4px 29px 10px rgba(116, 49, 244, 0.19);
  border: 1px solid ${({ theme }) => theme.colors["gray/400"]};

  ${media.greaterThan("medium")`
    display: flex;
  `}
`;

export const ContainerBalanceTransference = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    width: 50rem;
    margin-right: 2rem;
  `}
`;
