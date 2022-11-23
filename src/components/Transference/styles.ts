import styled from "styled-components";

type InputProps = {
  errors: boolean;
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.publeNg};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

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

export const ErrorMessage = styled.div`
  margin-top: 0.2rem;
  font-size: 1.2rem;
  max-width: 100%;
  color: ${({ theme }) => theme.colors["gray/700"]};
`;

export const SuccessMessage = styled.div`
  margin-top: 0.2rem;
  font-size: 1.2rem;
  max-width: 100%;
  color: ${({ theme }) => theme.colors["lime/700"]};
`;
