import React, { useContext } from "react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { Context } from "../_app";
import { Container, Form } from "./styles";

const SignIn = (): JSX.Element => {
  const { paddingLeft } = useContext(Context);

  return (
    <Container style={{ paddingLeft }}>
      <Form>
        <TextInput label="E-mail" name="name" type="email" />
        <TextInput label="Password" name="password" type="password" />
        <Button label="Login" name="login" />
      </Form>
    </Container>
  );
};

export default SignIn;
