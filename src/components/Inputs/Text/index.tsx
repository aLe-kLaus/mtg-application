import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Text = ({ label, name, ...props }: InputProps): JSX.Element => {
  return (
    <Container>
      <label>{label}</label>
      <input id={name} {...props} />
    </Container>
  );
};
