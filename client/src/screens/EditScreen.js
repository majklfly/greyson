import React from "react";
import styled from "styled-components";

import { EditUserForm } from "../components/EditUserForm";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const EditScreen = () => {
  return (
    <Container>
      <EditUserForm />
    </Container>
  );
};
