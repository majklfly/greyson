import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/slices/usersSlice";
import { UsersList } from "../components/UsersList.js";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  async function fetchData() {
    // fetching data from backend and serving to the store
    setLoading(true);
    const response = await axios.get("/user");
    dispatch(addUsers({ data: response.data }));
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Container>
          <h1>Loading...</h1>
        </Container>
      ) : (
        <Container>
          <UsersList />
        </Container>
      )}
    </>
  );
};
