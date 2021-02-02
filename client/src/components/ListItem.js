import React from "react";
import { useHistory } from "react-router";

import { useDispatch } from "react-redux";
import { addCurrentUser } from "../redux/slices/currentUserSlice";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconButton from "@material-ui/core/IconButton";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";

export const CustomListItem = ({ data }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const RedirectToDetail = () => {
    dispatch(addCurrentUser({ data: data }));
    history.push("/userDetails");
  };

  return (
    <ListItem button onClick={() => RedirectToDetail()}>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={data.surname} secondary={data.name} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
