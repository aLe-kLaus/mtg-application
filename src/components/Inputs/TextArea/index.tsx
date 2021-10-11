import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export const TextArea = ({
  label,
  name,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...props} />
    </Container>
  );
};
