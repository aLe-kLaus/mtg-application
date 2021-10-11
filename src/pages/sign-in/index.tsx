import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Text } from "../../components/Inputs/Text";
import { Context } from "../_app";
import { Container, Form, PasswordContainer } from "./styles";

const SignIn = (): JSX.Element => {
  const [showPass, setShowPass] = useState(false);
  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  const handleShowPass = (value: boolean) => {
    if (value) {
      document.getElementById("password")?.setAttribute("type", "text");
      setShowPass(true);
    } else {
      document.getElementById("password")?.setAttribute("type", "password");
      setShowPass(false);
    }
  };

  return (
    <Container style={{ paddingLeft }}>
      <Form>
        <Text label="E-mail" name="name" type="email" />
        <PasswordContainer>
          <Text
            label="Password"
            name="password"
            type="password"
            id="password"
          />
          {showPass ? (
            <FaEyeSlash onClick={() => handleShowPass(false)} />
          ) : (
            <FaEye onClick={() => handleShowPass(true)} />
          )}
        </PasswordContainer>
        <Button label="Login" name="login" type="submit" />
        <p>
          Do not have an account? <Link href="/sign-up">Sign Up here!</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignIn;
