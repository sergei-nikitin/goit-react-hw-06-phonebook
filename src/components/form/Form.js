import React, { Component } from "react";
import styles from "./Form.module.css";
import shortid from "shortid";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/pb-actions";
import Alert from "../alert";

import { CSSTransition } from "react-transition-group";
import animation from "../contacts/AnimationContacts.module.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
    alert: false,
    alertField: false,
  };

  inputNameId = shortid.generate();
  inputNumberId = shortid.generate();

  handleCenge = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  includeContact = (name) => {
    const contacts = this.props.contacts;

    if (contacts.some((contact) => contact.name === name)) {
      return (
        setTimeout(() => this.setState({ alert: false }), 2000),
        this.setState({ alert: true })
      );
    } else {
      return this.props.onAddContact(this.state.name, this.state.number);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.includeContact(this.state.name);
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.alert}
          timeout={250}
          unmountOnExit
          classNames={animation}
        >
          <Alert />
        </CSSTransition>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label
            className={styles.label}
            htmlFor={this.inputNameId}
            name="name"
          >
            Name
          </label>
          <input
            className={styles.input}
            id={this.inputNameId}
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter Name"
            onChange={this.handleCenge}
          ></input>

          <label
            className={styles.label}
            htmlFor={this.inputNumberId}
            name="number"
          >
            Number
          </label>
          <input
            className={styles.input}
            id={this.inputNumberId}
            type="phone"
            value={this.state.number}
            name="number"
            placeholder="Enter Number"
            onChange={this.handleCenge}
          ></input>

          <button className={styles.addBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.phoneBook.contacts,
});

const mapDispatchToprops = (dispatch) => ({
  onAddContact: (name, number) =>
    dispatch(phoneBookActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToprops)(Form);
