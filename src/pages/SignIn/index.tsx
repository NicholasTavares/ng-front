import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { signInPost } from "../../api/signInAPI";
import logo from "../../assets/logo.svg";
import * as ERRORS from "../../helpers/errorsMessages.helper";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";

type SignInPost = {
  username: string;
  password: string;
};

const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState(false);
  const {
    handleSubmit,
    register,
    setError,
    formState: { isValid, errors },
  } = useForm<SignInPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<SignInPost> = ({ username, password }) => {
    mutate({ username, password });
  };
  const { mutate, isLoading } = useMutation(signInPost, {
    onSuccess: ({ token }) => {
      localStorage.setItem("jwt", token);
      auth?.setJwt(token);
      navigate("/");
    },
    onError: () => {
      setError("password", {
        message: ERRORS.INVALID_SIGNIN,
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
                  required: "Username is required",
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
                {...register("password", { required: "Password is required" })}
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

          <S.SubmitButton disabled={!isValid || isLoading}>
            SignIn
          </S.SubmitButton>

          <S.LinkContainer>
            New to NG Cash?
            <S.LinkPage to="/signup">Sign up</S.LinkPage>
          </S.LinkContainer>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
};

export default SignIn;
