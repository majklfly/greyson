import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [occupation, setOccupation] = useState();
  let history = useHistory();

  const updateDatabase = () => {
    const id = Date.now();
    axios.post("/user", {
      id: id,
      name: firstName,
      surname: lastName,
      job: occupation,
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
        <StyledTextField
          id="standard-basic"
          label="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <Button onClick={() => updateDatabase()}>Add The User</Button>
      </Form>
    </Container>
  );
};
