import React, { useContext, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../../components/Button";
import { Context } from "../_app";
import {
  Container,
  Form,
  SideBySide,
  PasswordContainer,
  InputContainer,
} from "./styles";
import cities from "../../JSON/cities.json";
import states from "../../JSON/states.json";
import { Select } from "../../components/Inputs/Select";
import userServices from "../../services/userServices";
import { ErrorModal } from "../../components/Modals/Error";
import { SucessModal } from "../../components/Modals/Success";

const SignUp = () => {
  const { paddingLeft, setIsUserLogged, setUserID } = useContext(Context);

  const [showPass, setShowPass] = useState({ pass: false, confirmPass: false });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

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

  const [favoriteCards, setFavoriteCards] = useState("");
  const [interests, setInterests] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const successMessage = "User Created Successfully";

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
      email: yup
        .string()
        .email("E-mail must be a valid e-mail")
        .required("E-mail is a required field"),
      confirmEmail: yup
        .string()
        .email()
        .oneOf([yup.ref("email")], "E-mails didn't match"),
      password: yup
        .string()
        .min(8, "Password must have at least 8 digits")
        .required("Password is a required field"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password didn't match"),
      age: yup
        .string()
        .max(2, "Insert a valid Age")
        .required("Age is a required field"),
      phone: yup.string().min(13, "Phone must be a valid phone"),
      favoriteCards: yup
        .string()
        .required("You must provide at least one card"),
      interests: yup.string().required("Interests is a required field"),
    })
    .required();

  const handleRegister = async () => {
    const data: any = {
      name: name,
      city: currentCity.name,
      state: currentState.name,
      age: age,
      email: email,
      password: password,
      cellphone: phone,
      interests: interests,
      favorite_cards: favoriteCards,
    };
    try {
      const response = await userServices.signUp(data);
      setShowSuccessModal(true);
    } catch (error: any) {
      setShowErrorModal(true);
      setErrorMessage(error?.response.data.error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    localStorage.removeItem("mtg-user-token");
    setUserID("");
    setIsUserLogged(false);
  }, []);

  return (
    <Container style={{ paddingLeft }}>
      <Form onSubmit={handleSubmit(handleRegister)}>
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
            {...register("name")}
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            style={{
              borderColor: !!errors?.name?.message ? "red" : "",
              outline: !!errors?.name?.message ? "red" : "#6200ff",
            }}
            name="name"
            type="text"
          />
        </InputContainer>
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
            {...register("email")}
            style={{
              borderColor: !!errors?.email?.message ? "red" : "",
              outline: !!errors?.email?.message ? "red" : "#6200ff",
            }}
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            name="email"
            type="email"
          />
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
            style={{
              borderColor: !!errors?.confimEmail?.message ? "red" : "",
              outline: !!errors?.confirmEmail?.message ? "red" : "#6200ff",
            }}
            value={confirmEmail}
            onChange={(evt) => setConfirmEmail(evt.target.value)}
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
                style={{
                  borderColor: !!errors?.password?.message ? "red" : "",
                  outline: !!errors?.password?.message ? "red" : "#6200ff",
                }}
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                name="password"
                id="password"
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
                style={{
                  borderColor: !!errors?.confimPassword?.message ? "red" : "",
                  outline: !!errors?.confirmPassword?.message
                    ? "red"
                    : "#6200ff",
                }}
                value={confirmPassword}
                onChange={(evt) => setConfirmPassword(evt.target.value)}
                name="confirmPassword"
                id="confirmPassword"
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
            <label>Age</label>
            {!!errors?.age?.message && (
              <p>
                <span>-</span>
                {errors?.age?.message}
              </p>
            )}
          </div>
          <input
            {...register("age")}
            style={{
              borderColor: !!errors?.age?.message ? "red" : "",
              outline: !!errors?.age?.message ? "red" : "#6200ff",
            }}
            name="age"
            maxLength={14}
            value={age}
            onChange={(evt) => setAge(evt.target.value)}
          />
        </InputContainer>
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
            style={{
              borderColor: !!errors?.phone?.message ? "red" : "",
              outline: !!errors?.phone?.message ? "red" : "#6200ff",
            }}
            name="phone"
            maxLength={14}
            value={phone}
            onChange={(evt) => handleChangePhone(evt.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <div>
            <label>Favorite Cards</label>
            {!!errors?.favoriteCards?.message && (
              <p>
                <span>-</span>
                {errors?.favoriteCards?.message}
              </p>
            )}
          </div>
          <input
            {...register("favoriteCards")}
            style={{
              borderColor: !!errors?.favoriteCards?.message ? "red" : "",
              outline: !!errors?.favoriteCards?.message ? "red" : "#6200ff",
            }}
            value={favoriteCards}
            onChange={(evt) => setFavoriteCards(evt.target.value)}
            name="favoriteCards"
          />
          <h3>
            Use ";" to divide the cards eg.: 'Black Lotus;Nicol Bolas,
            God-Pharaoh - max of 6 cards'
          </h3>
        </InputContainer>

        <InputContainer>
          <div>
            <label>Interests</label>
            {!!errors?.interests?.message && (
              <p>
                <span>-</span>
                {errors?.interests?.message}
              </p>
            )}
          </div>
          <textarea
            {...register("interests")}
            style={{
              borderColor: !!errors?.interests?.message ? "red" : "",
              outline: !!errors?.interests?.message ? "red" : "#6200ff",
            }}
            value={interests}
            onChange={(evt) => setInterests(evt.target.value)}
            name="interests"
          />
        </InputContainer>
        <Button type="submit" label="Sign-up" name="sign-up" />
        <p>
          Do not have an account? <Link href="/sign-in">Login here!</Link>
        </p>
      </Form>
      <ErrorModal
        error={errorMessage}
        show={showErrorModal}
        setShow={setShowErrorModal}
      />
      <SucessModal
        success={successMessage}
        path="/sign-in"
        pathText="Login Here"
        show={showSuccessModal}
      />
    </Container>
  );
};

export default SignUp;
