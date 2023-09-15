import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input className={styles.input} type="text" placeholder="Filter by name" value={filter} onChange={handleChange} />
    </label>
  );
}

export default Filter;



