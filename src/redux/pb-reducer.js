import { combineReducers } from "redux";
import types from "./pb-types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    case types.DELETE:
      return (payload = "");

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
