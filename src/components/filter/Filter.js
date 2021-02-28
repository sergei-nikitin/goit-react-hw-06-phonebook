import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import phoneBookActions from "../../redux/pb-actions";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <input
        className={styles.input}
        placeholder="Filter"
        name="filter"
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.phoneBook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (event) =>
    dispatch(phoneBookActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
