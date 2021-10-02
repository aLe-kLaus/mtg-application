import React, { useContext } from "react";
import { Input } from "../../components/Input";
import { Context } from "../_app";
import { Container, Form, SideBySide } from "./styles";

const SignUp = () => {
  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  return (
    <Container style={{ paddingLeft }}>
      <Form>
        <SideBySide>
          <Input label="Name" name="name" type="text" />
          <Input label="Last Name" name="lastName" type="text" />
        </SideBySide>
        <Input label="Email" name="email" type="email" />
        <Input label="Confirm Email" name="confirmEmail" type="email" />
        <SideBySide>
          <Input label="Password" name="password" type="password" />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
        </SideBySide>
      </Form>
    </Container>
  );
};

export default SignUp;
