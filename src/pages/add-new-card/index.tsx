import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Title } from "../../components/Title";
import { Context } from "../_app";
import { Container, Form, SideBySide, InputContainer } from "./styles";
import * as yup from "yup";
import { Select } from "../../components/Inputs/Select";
import userServices from "../../services/userServices";
import { ErrorModal } from "../../components/Modals/Error";
import { SucessModal } from "../../components/Modals/Success";
import { Button } from "../../components/Button";

const AddNewCard = () => {
  const { userID } = useContext(Context);
  const [name, setName] = useState("");
  const [cardSet, setCardSet] = useState("");
  const [condition, setCondtion] = useState("Near Mint");
  const [price, setPrice] = useState("");
  const [complement, setComplement] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const successMessage = "Card Created Successfully";

  const conditions = [
    "Near Mint",
    "Slightly Played",
    "Medium Played",
    "Heavy Played",
    "Damaged",
  ];

  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Name is a required field"),
      set: yup.string().required("Set is a required field"),
      price: yup.number().required("Price is a required field"),
      complement: yup.string().required("Interests is a required field"),
    })
    .required();

  const handleRegister = async () => {
    const data: any = {
      id: userID,
      name: name,
      condition: condition,
      set: cardSet,
      price: price,
      complement: complement,
    };
    try {
      const response = await userServices.createUserCard(data);
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

  return (
    <Container>
      <Title title="Add a card to Sell/Trade" color="#000" />
      <Form onSubmit={handleSubmit(handleRegister)}>
        <InputContainer>
          <div>
            <label>Card Name</label>
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
            placeholder="Case Sensitive"
          />
        </InputContainer>
        <SideBySide>
          <Select
            onChange={(evt) => setCondtion(evt.target.value)}
            id="state"
            name="state"
            label="Select Your State"
          >
            {conditions.map((c) => {
              return (
                <option id={c} value={c} key={c}>
                  {c}
                </option>
              );
            })}
          </Select>
          <InputContainer>
            <div>
              <label>Set</label>
              {!!errors?.set?.message && (
                <p>
                  <span>-</span>
                  {errors?.set?.message}
                </p>
              )}
            </div>
            <input
              {...register("set")}
              value={cardSet}
              onChange={(evt) => setCardSet(evt.target.value)}
              style={{
                borderColor: !!errors?.set?.message ? "red" : "",
                outline: !!errors?.set?.message ? "red" : "#6200ff",
              }}
              name="set"
              type="text"
            />
          </InputContainer>
        </SideBySide>
        <InputContainer>
          <div>
            <label>Price</label>
            {!!errors?.price?.message && (
              <p>
                <span>-</span>
                {errors?.price?.message}
              </p>
            )}
          </div>
          <input
            {...register("price")}
            value={price}
            onChange={(evt) => setPrice(evt.target.value)}
            style={{
              borderColor: !!errors?.price?.message ? "red" : "",
              outline: !!errors?.price?.message ? "red" : "#6200ff",
            }}
            name="price"
            type="text"
            placeholder="R$"
          />
        </InputContainer>
        <InputContainer>
          <div>
            <label>Complement</label>
            {!!errors?.complement?.message && (
              <p>
                <span>-</span>
                {errors?.complement?.message}
              </p>
            )}
          </div>
          <input
            {...register("complement")}
            value={complement}
            onChange={(evt) => setComplement(evt.target.value)}
            style={{
              borderColor: !!errors?.complement?.message ? "red" : "",
              outline: !!errors?.complement?.message ? "red" : "#6200ff",
            }}
            name="complement"
            type="text"
          />
        </InputContainer>
        <Button label="Add Card" name="addCard" />
      </Form>
      <ErrorModal
        error={errorMessage}
        show={showErrorModal}
        setShow={setShowErrorModal}
      />
      <SucessModal
        success={successMessage}
        path="/my-profile"
        pathText="Go to my Profile"
        show={showSuccessModal}
      />
    </Container>
  );
};

export default AddNewCard;
