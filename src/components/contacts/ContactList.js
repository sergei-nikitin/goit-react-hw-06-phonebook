import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import animation from "./AnimationContacts.module.css";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/pb-actions";

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  let list = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (!list.length) {
    list = contacts;
    filter = "";
  }

  return (
    <div className={styles.divContactList}>
      <h2 className={styles.title}>Contact list</h2>
      <TransitionGroup component="ul" className={styles}>
        {list.map((contact) => (
          <CSSTransition key={contact.id} timeout={250} classNames={animation}>
            <li className={styles.item}>
              {contact.name}: {contact.number}
              <button
                className={styles.deleteBtn}
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  contacts: state.phoneBook.contacts,
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(phoneBookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
