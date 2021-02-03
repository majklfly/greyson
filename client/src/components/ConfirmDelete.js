import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/usersSlice";

export const ConfirmDelete = ({ data, setOpenModal }) => {
  const dispatch = useDispatch();

  const deleteUser = () => {
    axios.delete(`/user/${data.id}`);
    dispatch(removeUser({ data: data }));
    setOpenModal((prev) => !prev);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Would you like to really delete {data.name} {data.surname} ?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={() => deleteUser()}>
          Yes
        </Button>
        <Button size="large" onClick={() => setOpenModal((prev) => !prev)}>
          No
        </Button>
      </CardActions>
    </Card>
  );
};
