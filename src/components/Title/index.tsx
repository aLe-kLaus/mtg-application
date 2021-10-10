import React, { LabelHTMLAttributes } from "react";
import { Container } from "./styles";

interface TitleProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string;
  color: string;
}

export const Title = ({ title, color }: TitleProps) => {
  return (
    <Container>
      <label style={{ color: color }}>{title}</label>
    </Container>
  );
};
