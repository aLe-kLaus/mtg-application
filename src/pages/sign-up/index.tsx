import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Text } from "../../components/Inputs/Text";
import { Context } from "../_app";
import { Container, Form, SideBySide, PasswordContainer } from "./styles";
import cities from "../../services/JSON/cities.json";
import states from "../../services/JSON/states.json";
import { Select } from "../../components/Inputs/Select";
import { TextArea } from "../../components/Inputs/TextArea";

const SignUp = () => {
  const [showPass, setShowPass] = useState({ pass: false, confirmPass: false });
  const [phone, setPhone] = useState("");
  const [currentState, setCurrentState] = useState({
    id: "1",
    initials: "AC",
    name: "Acre",
  });
  const [currentCity, setCurrentCity] = useState({
    id: "79",
    name: "Acrelândia",
    state: "1",
  });

  const { isSidebarOpen } = useContext(Context);
  const paddingLeft = isSidebarOpen ? "250px" : "0px";

  const handleShowPass = (value: boolean, input: string) => {
    if (input === "password") {
      if (value) {
        document.getElementById("password")?.setAttribute("type", "text");
        setShowPass({ pass: true, confirmPass: showPass.confirmPass });
      } else {
        document.getElementById("password")?.setAttribute("type", "password");
        setShowPass({ pass: false, confirmPass: showPass.confirmPass });
      }
    } else {
      if (value) {
        document
          .getElementById("confirmPassword")
          ?.setAttribute("type", "text");
        setShowPass({ pass: showPass.pass, confirmPass: true });
      } else {
        document
          .getElementById("confirmPassword")
          ?.setAttribute("type", "password");
        setShowPass({ pass: showPass.pass, confirmPass: false });
      }
    }
  };

  const handleState = (id: string) => {
    const currentState = states.find((state) => state.id == id);
    const newCity = cities.find((city) => city.state == id);
    setCurrentState(currentState ?? { name: "Acre", initials: "AC", id: "1" });
    setCurrentCity(newCity ?? { id: "79", name: "Acrelândia", state: "1" });
  };

  const handleCity = (id: string) => {
    const currentCity = cities.find((city) => city.id == id);
    setCurrentCity(currentCity ?? { id: "79", name: "Acrelândia", state: "1" });
  };

  const handleChangePhone = (value: string) => {
    const phoneNumbers = value.replace(/\D/g, "");

    const ddd = phoneNumbers.slice(0, 2);
    let firstField;
    let secondField;
    let maskedPhone;

    if (phoneNumbers.length === 0) {
      return setPhone("");
    }

    if (phoneNumbers.length === 11) {
      firstField = phoneNumbers.slice(2, 7);
      secondField = phoneNumbers.slice(7, 11);
    } else {
      firstField = phoneNumbers.slice(2, 6);
      secondField = phoneNumbers.slice(6, 10);
    }

    switch (true) {
      case !firstField:
        maskedPhone = `(${ddd}`;
        break;
      case !secondField:
        maskedPhone = `(${ddd})${firstField}`;
        break;
      default:
        maskedPhone = `(${ddd})${firstField}-${secondField}`;
    }
    setPhone(maskedPhone);
  };

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Nome obrigatório!"),
      lastName: yup.string().required("Nome obrigatório!"),
      email: yup
        .string()
        .email("Digite um e-mail válido!")
        .required("E-mail obrigatório!"),
      confirmEmail: yup
        .string()
        .email("Digite um e-mail válido")
        .oneOf([yup.ref("email")], "Os e-mails não coincidem!"),
      password: yup
        .string()
        .min(8, "A senha deve ter no mínimo 8 digitos")
        .required("Senha obrigatória!"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas não coincidem!"),
      phone: yup.string().min(13, "Digite um telefone válido!"),
      description: yup.string().required("Digite a sua cidade!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignUp = () => {};

  return (
    <Container style={{ paddingLeft }}>
      <Form onSubmit={handleSubmit((d) => console.log(d))}>
        <SideBySide>
          <Text {...register("name")} label="Name" name="name" type="text" />
          {!!errors?.name?.message && <p>{errors?.name?.message}</p>}
          <Text
            {...register("lastName")}
            label="Last Name"
            name="lastName"
            type="text"
          />
        </SideBySide>
        <Text {...register("email")} label="Email" name="email" type="email" />
        <Text
          {...register("confirmEmail")}
          label="Confirm Email"
          name="confirmEmail"
          type="email"
        />
        <SideBySide>
          <PasswordContainer>
            <Text
              {...register("password")}
              label="Password"
              name="password"
              type="password"
            />
            {showPass.pass ? (
              <FaEyeSlash onClick={() => handleShowPass(false, "password")} />
            ) : (
              <FaEye onClick={() => handleShowPass(true, "password")} />
            )}
          </PasswordContainer>
          <PasswordContainer>
            <Text
              {...register("confirmPassword")}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            {showPass.confirmPass ? (
              <FaEyeSlash
                onClick={() => handleShowPass(false, "confirmPassword")}
              />
            ) : (
              <FaEye onClick={() => handleShowPass(true, "confirmPassword")} />
            )}
          </PasswordContainer>
        </SideBySide>
        <SideBySide>
          <Select
            onChange={(evt) => handleState(evt.target.value)}
            id="state"
            name="state"
            label="Select Your State"
          >
            {states
              .sort((a, b) =>
                a.name.toLowerCase() !== b.name.toLowerCase()
                  ? a.name.toLowerCase() < b.name.toLowerCase()
                    ? -1
                    : 1
                  : 0
              )
              .map((s) => {
                return (
                  <option id={s.id} value={s.id} key={s.id}>
                    {s.name}
                  </option>
                );
              })}
          </Select>
          <Select
            onChange={(evt) => handleCity(evt.target.value)}
            id="city"
            name="city"
            label="Select Your City"
          >
            {cities
              .sort((a, b) =>
                a.name.toLowerCase() !== b.name.toLowerCase()
                  ? a.name.toLowerCase() < b.name.toLowerCase()
                    ? -1
                    : 1
                  : 0
              )
              .map((c) => {
                if (c.state !== currentState.id) return;
                return (
                  <option id={c.id} value={c.id} key={c.id}>
                    {c.name}
                  </option>
                );
              })}
          </Select>
        </SideBySide>
        <Text
          {...register("phone")}
          label="Phone"
          name="phone"
          maxLength={14}
          value={phone}
          onChange={(evt) => handleChangePhone(evt.target.value)}
        />
        <TextArea
          {...register("description")}
          label="Description"
          name="description"
        />
        <Button type="submit" label="Sign Up" name="sign-up" />
        <p>
          Do not have an account? <Link href="/sign-in">Login here!</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
