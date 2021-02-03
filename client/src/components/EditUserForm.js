import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/slices/usersSlice";

const Form = styled.form`
  width: 30%;
  min-width: 200px;
  height: fit-content;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 2px 2px darkgrey;
`;

const StyledTextField = styled(TextField)`
  width: 90%;
  margin-top: 15px !important;
`;

const StyledButton = styled(Button)`
  margin-top: 15px !important;
`;

export const EditUserForm = () => {
  const state = useSelector((state) => state.currentUserReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(state.data.name);
  const [lastName, setLastName] = useState(state.data.surname);

  const updateInfo = async () => {
    console.log(firstName);
    dispatch(
      updateUser({ id: state.data.id, name: firstName, surname: lastName })
    );
    history.push("/");
    await axios.request({
      method: "POST",
      url: `/user/${state.data.id}`,
      data: {
        id: state.data.id,
        name: firstName,
        surname: lastName,
      },
    });
  };

  return (
    <Form>
      <h1>Update User</h1>
      <StyledTextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <StyledTextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <StyledButton size="large" onClick={() => updateInfo()}>
        Update
      </StyledButton>
    </Form>
  );
};
