import React, { InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { Container } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  label: string;
}

export const Select = ({
  id,
  name,
  label,
  children,
  ...props
}: SelectProps): JSX.Element => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select id={id} name={name} {...props}>
        {children}
      </select>
    </Container>
  );
};
