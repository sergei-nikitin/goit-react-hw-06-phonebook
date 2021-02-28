import React from "react";
import { CSSTransition } from "react-transition-group";
import phoneBookStyles from "./PhoneBook.module.css";

const PhoneBook = () => {
  return (
    <CSSTransition
      appear={true}
      in={true}
      classNames={phoneBookStyles}
      timeout={500}
      unmountOnExit
    >
      <h2 className={phoneBookStyles.title}>Phonebook</h2>
    </CSSTransition>
  );
};

export default PhoneBook;
