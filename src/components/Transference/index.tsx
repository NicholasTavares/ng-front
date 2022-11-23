import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { transactionPost } from "../../api/transactionAPI";
import { useAuth } from "../../hooks/useAuth";
import { stringToCurrenty } from "../../utils/stringToCurrency";
import { AutoComplete } from "../AutoComplete";
import { useState } from "react";
import { CurrencyToValidNumber } from "../../utils/CurrencyToValidNumber";
import * as ERRORS from "../../helpers/errorsMessages.helper";
import * as VF from "../../utils/validationFunctions.util";
import * as S from "./styles";

export type TransactionPost = {
  value: string;
  destination: string;
};

export const Transference = () => {
  const [searchUser, setSearchUser] = useState("");
  const [userDestiny, setUserDestiny] = useState({ id: "", username: "" });
  const queryClient = useQueryClient();
  const auth = useAuth();
  const {
    handleSubmit,
    register,
    setError,
    setValue,
    reset,
    formState: { isValid, errors },
  } = useForm<TransactionPost>({ mode: "onChange" });
  const onSubmit: SubmitHandler<TransactionPost> = ({ value }) => {
    mutate({
      jwt: auth?.jwt,
      value: CurrencyToValidNumber(value),
      destination: userDestiny,
    });
  };
  const { mutate, isLoading, isSuccess } = useMutation(transactionPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      reset();
    },
    onError: () => {
      setError("destination", {
        message: ERRORS.INVALID_TRANSACTION,
      });
    },
  });

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.LabelFieldContainer>
          <S.Label htmlFor="value">Value</S.Label>
          <S.FieldContainer>
            <S.Field
              type="text"
              placeholder="R$"
              autoComplete="off"
              errors={Boolean(errors.value)}
              {...register("value", {
                required: true,
                onChange: (event) => {
                  const { value } = event.target;
                  event.target.value = stringToCurrenty(value);
                },
                validate: {
                  checkValue: (v) => {
                    console.log(VF.isValidValue(v));
                    return VF.isValidValue(v) || ERRORS.INVALID_VALUE;
                  },
                },
              })}
            />
          </S.FieldContainer>
          <S.ErrorMessage>{errors.value?.message}</S.ErrorMessage>
        </S.LabelFieldContainer>
        <S.LabelFieldContainer>
          <S.Label htmlFor="destination">Destination</S.Label>
          <S.FieldContainer>
            <S.Field
              type="text"
              placeholder="Maria"
              autoComplete="off"
              errors={Boolean(errors.value)}
              {...register("destination", {
                required: true,
              })}
              onChange={(e) => setSearchUser(e.target.value)}
            />
            <AutoComplete
              searchUser={searchUser}
              setSearchUser={setSearchUser}
              setValue={setValue}
              setUserDestiny={setUserDestiny}
            />
          </S.FieldContainer>
          <S.ErrorMessage>{errors.destination?.message}</S.ErrorMessage>
          {isSuccess && (
            <S.SuccessMessage>Transação concluida!</S.SuccessMessage>
          )}
        </S.LabelFieldContainer>

        <S.SubmitButton disabled={!isValid || isLoading}>Send</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};
