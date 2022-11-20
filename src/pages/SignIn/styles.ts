import { Eye, EyeSlash } from "phosphor-react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

type InputProps = {
  errors: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors["gray/900"]};
  overflow: hidden;
  height: 100vh;
  max-height: 100vh;
`;

export const FormContainer = styled.div`
  transform: translateY(-10%);
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    transform: translateY(0);
  `}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 9rem;
  color: red;

  ${media.greaterThan("medium")`
    width: 10rem;
  `}
`;

export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors["gray/400"]};
  padding: 1.5rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors["gray/200"]};
  width: 28rem;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 100%;
  font-weight: bold;
  border-radius: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  font-size: 1.4rem;
  border: none;
  background-color: ${({ theme, disabled }) =>
    !disabled ? theme.colors["lime/500"] : theme.colors["gray/300"]};
  color: ${({ theme }) => theme.colors["white"]};
  margin-bottom: 1rem;
  transition: all 500ms;

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors["lime/600"]};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      !disabled && theme.colors["lime/700"]};
    transform: scale(1.02);
  }
`;

// FIELD

export const LabelFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(last-child) {
    margin-bottom: 1.5rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["gray/800"]};
  margin-bottom: 0.5rem;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const Field = styled.input<InputProps>`
  text-decoration: none;
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.3rem;
  padding: 0.4rem 0;
  padding-right: 8%;
  border-bottom: 1px solid;
  border-color: ${({ errors, theme }) =>
    errors ? theme.colors["red/700"] : theme.colors.publeNg};
  transition: 500ms border-color;
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  bottom: 50%;
  cursor: pointer;
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

export const ErrorMessage = styled.div`
  margin-top: 0.2rem;
  font-size: 1.2rem;
  max-width: 100%;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;

export const LinkContainer = styled.div`
  color: ${({ theme }) => theme.colors["gray/800"]};
  display: flex;
  font-size: 1.3rem;
`;

export const LinkPage = styled(Link)`
  margin-left: 0.2rem;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors["cyan/700"]};

  &:not(last-child) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
