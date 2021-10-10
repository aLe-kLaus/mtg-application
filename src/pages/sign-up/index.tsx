import React, { useContext } from "react";
import { TextInput } from "../../components/TextInput";
import { Context } from "../_app";
import { Container, Form, SideBySide } from "./styles";

const SignUp = () => {
  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  return (
    <Container style={{ paddingLeft }}>
      <Form>
        <SideBySide>
          <TextInput label="Name" name="name" type="text" />
          <TextInput label="Last Name" name="lastName" type="text" />
        </SideBySide>
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Confirm Email" name="confirmEmail" type="email" />
        <SideBySide>
          <TextInput label="Password" name="password" type="password" />
          <TextInput
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
