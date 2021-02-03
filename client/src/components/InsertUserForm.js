import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/usersSlice";

const Container = styled.section`
  width: 100vw;
  position: fixed;
  top: 0;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 10px;
  background-color: #c4c8d4;
`;

const Logo = styled.h1`
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  flex-wrap: wrap;
`;

const StyledTextField = styled(TextField)`
  min-width: 150px;
`;

export const InsertUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const updateDatabase = async () => {
    const id = Date.now();
    dispatch(
      addUser({
        id: id,
        name: firstName,
        surname: lastName,
      })
    );
    history.push("/");
    setFirstName("");
    setLastName("");
    await axios.post("/user", {
      id: id,
      name: firstName,
      surname: lastName,
    });
  };

  return (
    <Container>
      <Logo onClick={() => history.push("/")}>Home</Logo>
      <Form>
        <StyledTextField
          id="standard-basic"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <StyledTextField
          id="standard-basic"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Button
          onClick={() => updateDatabase()}
          disabled={firstName && lastName ? false : true}
        >
          Add The User
        </Button>
      </Form>
    </Container>
  );
};
