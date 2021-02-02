import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useSelector } from "react-redux";

const CustomCard = styled(Card)`
  margin-top: 15%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const DetailScreen = () => {
  let history = useHistory();
  const state = useSelector((state) => state.currentUserReducer);

  console.log(state);

  return (
    <CustomCard>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          User Details:
        </Typography>
        <Typography variant="h5" component="h2">
          {state.data.surname}
        </Typography>
        <Typography color="textSecondary">{state.data.name}</Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => history.push("/")}>
          Return
        </Button>
      </CardActions>
    </CustomCard>
  );
};
