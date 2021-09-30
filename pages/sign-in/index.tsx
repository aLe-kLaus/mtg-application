import React, { useContext } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Context } from "../_app";
import { Container, Form } from "./styles";

const SignIn = (): JSX.Element => {
  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "125px" : "0px";

  return (
    <Container style={{ paddingLeft }}>
      <Form>
        <Input label="E-mail" name="name" type="email" />
        <Input label="Password" name="password" type="password" />
        <Button label="Login" name="login" />
      </Form>
    </Container>
  );
};

export default SignIn;
