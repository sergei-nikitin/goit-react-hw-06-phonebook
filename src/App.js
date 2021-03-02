import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import animation from "./components/contacts/AnimationContacts.module.css";
import PoneBook from "./components/phonebook";
import Form from "./components/form";
import ContactList from "./components/contacts";
import Filter from "./components/filter";

class App extends Component {
  render() {
    return (
      <div>
        <PoneBook />
        <Form />
        <Filter />
        <CSSTransition
          in={true}
          timeout={250}
          unmountOnExit
          classNames={animation}
        >
          <ContactList />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
