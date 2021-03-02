import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/Add", (name, number) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: Number(number),
  },
}));
const deleteContact = createAction("contact/Delete");
const changeFilter = createAction("contact/Change_Filter");

const actions = { addContact, deleteContact, changeFilter };

export default actions;
