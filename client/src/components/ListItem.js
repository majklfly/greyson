import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

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
import EditIcon from "@material-ui/icons/Edit";

import Modal from "@material-ui/core/Modal";
import { ConfirmDelete } from "./ConfirmDelete";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomListItem = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const RedirectToDetail = () => {
    dispatch(addCurrentUser({ data: data }));
    history.push("/userDetails");
  };

  const EditUser = () => {
    dispatch(addCurrentUser({ data: data }));
    history.push("/edit");
  };

  return (
    <>
      <ListItem button onClick={() => RedirectToDetail()}>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.surname} secondary={data.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="edit">
            <EditIcon onClick={() => EditUser()} />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => setOpenModal((prev) => !prev)} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <StyledModal
        open={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
      >
        <ConfirmDelete data={data} setOpenModal={setOpenModal} />
      </StyledModal>
    </>
  );
};
