import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./pb-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
  [actions.deleteContact]: (state, action) => (action.payload = ""),
});

export default combineReducers({
  contacts,
  filter,
});
