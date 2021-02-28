import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import animation from "./components/contacts/AnimationContacts.module.css";
import PoneBook from "./components/phonebook";
// import Alert from "./components/alert";
import Form from "./components/form";
import ContactList from "./components/contacts";
import Filter from "./components/filter";
// import shortid from "shortid";

class App extends Component {
  state = {
    // contacts: [],
    // filter: "",
    // alert: false,
  };

  // changeFilter = (filter) => {
  //   this.setState({ filter });
  // };

  // getFilterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  // includContact = (name) => {
  //   const { contacts } = this.state;
  //   contacts.forEach((contact) => {
  //     if (contact.name === name) {
  //       return (
  //         setTimeout(() => this.setState({ alert: false }), 2000),
  //         this.setState({ alert: true })
  //       );
  //     }
  //   });
  // };

  // addContact = (name, number) => {
  //   const user = {
  //     id: shortid.generate(),
  //     name: "",
  //     number: "",
  //   };

  //   user.name = name;
  //   user.number = Number(number);
  //   this.setState((prevstate) => {
  //     this.includContact(name);
  //     return {
  //       contacts: [...prevstate.contacts, user],
  //     };
  //   });
  // };

  // deleteContact = (name) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.name !== name),
  //   }));
  // };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parseContacts = JSON.parse(contacts);

  //   if (parseContacts) {
  //     this.setState({ contacts: parseContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //     this.setState({ filter: "" });
  //   }
  // }

  render() {
    // const { contacts } = this.state;
    // const visibleContact = this.getFilterContacts();
    return (
      <div>
        <PoneBook />
        {/* 
        <CSSTransition
          in={this.state.alert}
          timeout={250}
          unmountOnExit
          classNames={animation}
        >
          <Alert />
        </CSSTransition> */}
        <Form />
        {/* <Form onAddContact={this.addContact} /> */}
        {/* <Filter value={this.state.filter} onChangeFilter={this.changeFilter} /> */}
        <Filter />
        <CSSTransition
          // in={this.state.contacts.length > 0}
          in={true}
          timeout={250}
          unmountOnExit
          classNames={animation}
        >
          <ContactList
          // contacts={visibleContact.length > 0 ? visibleContact : contacts}
          // onDeleteContact={this.deleteContact}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
