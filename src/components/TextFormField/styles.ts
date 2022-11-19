import { Eye, EyeSlash } from "phosphor-react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  &:not(last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const FieldLabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors["gray/700"]};
  margin-bottom: 0.2rem;
`;

export const ErrorMsg = styled.div`
  margin-top: 0.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors["red/700"]};
`;

export const Input = styled.input`
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.3rem;
  padding: 0.4rem 0;
  padding-right: 8%;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.publeNg};
  transition: 500ms border-color;

  &:not(:focus):invalid {
    border-color: ${({ theme }) => theme.colors["red/700"]};
  }

  &:valid {
    border-color: ${({ theme }) => theme.colors["lime/700"]};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  bottom: 50%;
  cursor: pointer;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SeePasswordIcon = styled(Eye)`
  font-size: 1.5rem;
`;

export const DontSeePasswordIcon = styled(EyeSlash)`
  font-size: 1.5rem;
`;
