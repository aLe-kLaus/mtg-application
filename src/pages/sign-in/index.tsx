import Link from "next/link";
import React, { useContext } from "react";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";
import { Context } from "../_app";
import { Container, Form } from "./styles";

const SignIn = (): JSX.Element => {
  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  return (
    <Container style={{ paddingLeft }}>
      <Form>
        <TextInput label="E-mail" name="name" type="email" />
        <TextInput label="Password" name="password" type="password" />
        <Button label="Login" name="login" />
        <p>
          Do not have an account? <Link href="/sign-up">Sign Up here!</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignIn;
