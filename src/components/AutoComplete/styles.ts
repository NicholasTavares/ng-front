import styled from "styled-components";
import { User as UserSVG } from "phosphor-react";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 120%;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.publeNg};
  max-height: 12rem;
  overflow-y: auto;
`;

export const User = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 4rem;
  border-radius: 1rem;
  align-items: center;
  padding-left: 1rem;
  border: 1px solid ${({ theme }) => theme.colors["gray/900"]};
  transition: 500ms background-color;

  &:not(last-child) {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.publeNgDarker};
  }
`;

export const UserName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.2rem;
`;

export const UserIcon = styled(UserSVG)`
  font-size: 2rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;
