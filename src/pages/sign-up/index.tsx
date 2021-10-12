import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Text } from "../../components/Inputs/Text";
import { Context } from "../_app";
import {
  Container,
  Form,
  SideBySide,
  PasswordContainer,
  InputContainer,
} from "./styles";
import cities from "../../services/JSON/cities.json";
import states from "../../services/JSON/states.json";
import { Select } from "../../components/Inputs/Select";

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
      name: yup.string().required("Name is a required field"),
      lastName: yup.string().required("Last Name is a required field"),
      email: yup.string().email().required("E-mail is a required field"),
      confirmEmail: yup
        .string()
        .email()
        .oneOf([yup.ref("email")], "E-mails didn't match"),
      password: yup
        .string()
        .min(8, "Password must have at least 8 digits")
        .required("Senha obrigatória!"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password didn't match"),
      phone: yup.string().min(13, "Provide a valid phone"),
      description: yup.string().required("Description is a required field"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container style={{ paddingLeft }}>
      <Form onSubmit={handleSubmit((d) => console.log(d))}>
        <SideBySide>
          <InputContainer>
            <div>
              <label>Name</label>
              {!!errors?.name?.message && (
                <p>
                  <span>-</span>
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <input
              style={{ borderColor: !!errors?.lastName?.message ? "red" : "" }}
              {...register("name")}
              name="name"
              type="text"
            />
          </InputContainer>
          <InputContainer>
            <div>
              <label>Last Name</label>
              {!!errors?.lastName?.message && (
                <p>
                  <span>-</span>
                  {errors?.lastName?.message}
                </p>
              )}
            </div>
            <input {...register("lastName")} name="lastName" type="text" />
          </InputContainer>
        </SideBySide>
        <InputContainer>
          <label>E-mail</label>
          <input {...register("email")} name="email" type="email" />
          {!!errors?.email?.message && (
            <p>
              <span>-</span>
              {errors?.email?.message}
            </p>
          )}
        </InputContainer>
        <InputContainer>
          <div>
            <label>Confirm E-mail</label>
            {!!errors?.confirmEmail?.message && (
              <p>
                <span>-</span>
                {errors?.confirmEmail?.message}
              </p>
            )}
          </div>
          <input
            {...register("confirmEmail")}
            name="confirmEmail"
            type="email"
          />
          {!!errors?.confirmEmail?.message && (
            <p>
              <span>-</span>
              {errors?.confirmEmail?.message}
            </p>
          )}
        </InputContainer>
        <SideBySide>
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
                {...register("password")}
                name="password"
                type="password"
              />
              {showPass.pass ? (
                <FaEyeSlash onClick={() => handleShowPass(false, "password")} />
              ) : (
                <FaEye onClick={() => handleShowPass(true, "password")} />
              )}
            </PasswordContainer>
          </InputContainer>
          <InputContainer>
            <div>
              <label>Confirm Password</label>
              {!!errors?.confirmPassword?.message && (
                <p>
                  <span>-</span>
                  {errors?.confirmPassword?.message}
                </p>
              )}
            </div>
            <PasswordContainer>
              <input
                {...register("confirmPassword")}
                name="confirmPassword"
                type="password"
              />
              {showPass.confirmPass ? (
                <FaEyeSlash
                  onClick={() => handleShowPass(false, "confirmPassword")}
                />
              ) : (
                <FaEye
                  onClick={() => handleShowPass(true, "confirmPassword")}
                />
              )}
            </PasswordContainer>
          </InputContainer>
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
                a.name.toLowerCase().localeCompare(b.name.toLowerCase())
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
              .sort((a, b) => {
                const sorted = a.name
                  .toLowerCase()
                  .localeCompare(b.name.toLowerCase());
                return sorted;
              })
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
        <InputContainer>
          <div>
            <label>Phone</label>
            {!!errors?.phone?.message && (
              <p>
                <span>-</span>
                {errors?.phone?.message}
              </p>
            )}
          </div>
          <input
            {...register("phone")}
            name="phone"
            maxLength={14}
            value={phone}
            onChange={(evt) => handleChangePhone(evt.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <div>
            <label>Description</label>
            {!!errors?.description?.message && (
              <p>
                <span>-</span>
                {errors?.description?.message}
              </p>
            )}
          </div>
          <textarea {...register("description")} name="description" />
        </InputContainer>
        <Button type="submit" label="sign-up" name="sign-up" />
        <p>
          Do not have an account? <Link href="/sign-in">Login here!</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
