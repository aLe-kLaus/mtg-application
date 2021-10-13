import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
}

export const Radio = ({
  id,
  name,
  label,
  ...props
}: InputProps): JSX.Element => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <input id={id} name={name} type="radio" {...props} />
    </Container>
  );
};
