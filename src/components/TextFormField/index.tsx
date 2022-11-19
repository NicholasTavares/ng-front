import { forwardRef, useState } from "react";
import * as S from "./styles";

type TextFormFieldProps = {
  name: string;
  type: "text" | "password" | "email";
  placeholder: string;
  required: boolean;
  errorMsg: string;
};

type Ref = HTMLInputElement;

export const TextFormField = forwardRef<Ref, TextFormFieldProps>(
  (props, ref) => {
    const [seePassword, setSeePassword] = useState(false);
    return (
      <S.Container>
        <S.FieldLabelContainer>
          <S.Label htmlFor={props.name}>{props.name}</S.Label>
          <S.FieldContainer>
            <S.Input
              ref={ref}
              name={props.name}
              type={!seePassword ? props.type : "text"}
              placeholder={props.placeholder}
              required={props.required}
            />
            {props.type === "password" && (
              <S.IconContainer onClick={() => setSeePassword(!seePassword)}>
                {seePassword ? (
                  <S.SeePasswordIcon />
                ) : (
                  <S.DontSeePasswordIcon />
                )}
              </S.IconContainer> // TODO: perdendo foco do formulário ao clicar no icone
            )}
          </S.FieldContainer>
          <S.ErrorMsg>{props.errorMsg}</S.ErrorMsg>
        </S.FieldLabelContainer>
      </S.Container>
    );
  }
);
