import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { signUpPost } from "../../api/signUpAPI";
import logo from "../../assets/logo.svg";
import * as ERRORS from "../../helpers/errorsMessages.helper";
import * as VF from "../../utils/validationFunctions.util";
import * as S from "./styles";

type SignUpPost = {
  username: string;
  password: string;
  passwordConfirm: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    watch,
    formState: { isValid, errors },
  } = useForm<SignUpPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<SignUpPost> = ({
    username,
    password,
    passwordConfirm,
  }) => {
    mutate({ username, password, passwordConfirm });
  };
  const { mutate, isLoading } = useMutation(signUpPost, {
    onSuccess: () => navigate("/"),
    onError: () => {
      setError("username", {
        message: ERRORS.USERNAME_EXISTS,
      });
    },
  });

  return (
    <S.Container>
      <S.FormContainer>
        <S.LogoContainer>
          <S.Logo
            src={logo}
            alt="Logo of the company in black and initials NG.CASH"
          />
        </S.LogoContainer>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.LabelFieldContainer>
            <S.Label htmlFor="username">Username</S.Label>
            <S.FieldContainer>
              <S.Field
                type="text"
                placeholder="maria"
                autoComplete="off"
                errors={Boolean(errors.username)}
                {...register("username", {
                  required: true,
                  validate: {
                    checkName: (v) =>
                      VF.isValidName(v) || ERRORS.INVALID_USERNAME,
                  },
                })}
              />
            </S.FieldContainer>
            <S.ErrorMessage>{errors.username?.message}</S.ErrorMessage>
          </S.LabelFieldContainer>

          <S.LabelFieldContainer>
            <S.Label htmlFor="password">Password</S.Label>
            <S.FieldContainer>
              <S.Field
                type={seePassword ? "text" : "password"}
                placeholder="*********"
                autoComplete="off"
                errors={Boolean(errors.password)}
                {...register("password", {
                  required: true,
                  validate: {
                    checkPassword: (v) =>
                      VF.isValidPassword(v) || ERRORS.INVALID_PASSWORD,
                  },
                })}
              />
              <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? (
                  <S.SeePasswordIcon />
                ) : (
                  <S.DontSeePasswordIcon />
                )}
              </S.IconContainer>
            </S.FieldContainer>
            <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          </S.LabelFieldContainer>

          <S.LabelFieldContainer>
            <S.Label htmlFor="passwordConfirm">Password confirmation</S.Label>
            <S.FieldContainer>
              <S.Field
                type="password"
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
                placeholder="*********"
                errors={Boolean(errors.password)}
                {...register("passwordConfirm", {
                  required: true,
                  validate: (passwordConfirm: string) => {
                    if (watch("password") !== passwordConfirm) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
            </S.FieldContainer>
            <S.ErrorMessage>{errors.passwordConfirm?.message}</S.ErrorMessage>
          </S.LabelFieldContainer>

          <S.SubmitButton disabled={!isValid || isLoading}>
            SignUp
          </S.SubmitButton>

          <S.LinkContainer>
            <S.LinkPage to="/signin">Already have an account?</S.LinkPage>
          </S.LinkContainer>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignUp;
