import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';
import { handleFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(handleFilter(evt.target.value.toString()));
  };

  return (
    <label className={styles.label}>
      Find contacts by Name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
