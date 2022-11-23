import { CurrencyToValidNumber } from "./CurrencyToValidNumber";

export const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
export const isValidName = (name: string) => name.length >= 3;
export const isValidPassword = (password: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/.test(
    password
  );
export const isValidValue = (value: string) =>
  CurrencyToValidNumber(value) !== 0 && CurrencyToValidNumber(value) > 0;
