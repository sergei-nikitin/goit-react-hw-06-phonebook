import shortid from "shortid";
import types from "./pb-types";

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: Number(number),
  },
});

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});

const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
