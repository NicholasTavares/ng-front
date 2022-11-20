import styled, { keyframes } from "styled-components";

const loadingDots = keyframes`
  from {
    transform: translateY(-10%);
  }

  to {
    transform: translateY(10%);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors["gray/900"]};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 14rem;
  margin-right: 1rem;
  animation: ${loadingDots} 2s infinite ease-in-out alternate-reverse;
`;
