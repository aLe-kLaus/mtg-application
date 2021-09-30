import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  name: string;
}

export const Button = ({ label, name, ...props }: ButtonProps) => {
  return (
    <Container>
      <button name={name} {...props}>
        {label}
      </button>
    </Container>
  );
};
