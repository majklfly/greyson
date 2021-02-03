import React from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import { CustomListItem } from "./ListItem";

import { useSelector } from "react-redux";

const CustomList = styled(List)`
  width: 50vw;
  min-width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px darkgrey;
`;

export const UsersList = () => {
  const state = useSelector((state) => state.usersReducer);

  return (
    <CustomList>
      {Object.keys(state).map((key, index) => {
        return <CustomListItem data={state[key]} key={index} />;
      })}
    </CustomList>
  );
};
