import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Context } from "../_app";
import { Container, Form, InputContainer, PasswordContainer } from "./styles";
import userServices from "../../services/userServices";

const SignIn = (): JSX.Element => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email("E-mail must be a valid e-mail")
        .required("E-mail is a required field"),
      password: yup
        .string()
        .min(8, "Password must have at least 8 digits")
        .required("Password is a required field"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleShowPass = (value: boolean) => {
    if (value) {
      document.getElementById("password")?.setAttribute("type", "text");
      setShowPass(true);
    } else {
      document.getElementById("password")?.setAttribute("type", "password");
      setShowPass(false);
    }
  };

  const handleFormSubmit = async () => {
    const data = { email: email, password: password };
    try {
      const response = await userServices.signIn(data);
      console.log("🚀 ~ response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={{ paddingLeft }}>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputContainer>
          <div>
            <label>E-mail</label>
            {!!errors?.email?.message && (
              <p>
                <span>-</span>
                {errors?.email?.message}
              </p>
            )}
          </div>
          <input
            style={{
              borderColor: !!errors?.email?.message ? "red" : "",
              outline: !!errors?.email?.message ? "red" : "#6200ff",
            }}
            {...register("email")}
            name="email"
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <div>
            <label>Password</label>
            {!!errors?.password?.message && (
              <p>
                <span>-</span>
                {errors?.password?.message}
              </p>
            )}
          </div>
          <PasswordContainer>
            <input
              style={{
                borderColor: !!errors?.password?.message ? "red" : "",
                outline: !!errors?.password?.message ? "red" : "#6200ff",
              }}
              {...register("password")}
              name="password"
              type="password"
              id="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
            {showPass ? (
              <FaEyeSlash onClick={() => handleShowPass(false)} />
            ) : (
              <FaEye onClick={() => handleShowPass(true)} />
            )}
          </PasswordContainer>
        </InputContainer>
        <Button label="Login" name="login" type="submit" />
        <p>
          Do not have an account? <Link href="/sign-up">Sign Up here!</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignIn;
