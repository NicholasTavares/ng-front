import { Eye, EyeSlash } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.section`
  border-radius: 1rem;
  width: 100%;
  min-height: 8rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors["gray/200"]};
  box-shadow: 1px 3px 15px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Balance = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.publeNg};
  margin-right: 1rem;
`;

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeePasswordIcon = styled(Eye)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;

export const DontSeePasswordIcon = styled(EyeSlash)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;
