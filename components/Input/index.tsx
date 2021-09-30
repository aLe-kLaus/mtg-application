import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input = ({ label, name, ...props }: InputProps): JSX.Element => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...props} />
    </Container>
  );
};
