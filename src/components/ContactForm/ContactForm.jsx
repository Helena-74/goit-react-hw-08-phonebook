import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { addContacts } from 'redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContacts(contact));
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
      <input className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        value={contact.name}
        onChange={handleChange}
      />
      </label>
      <label className={styles.label}>
        Number
      <input className={styles.input}
        type="text"
        name="number"
        placeholder="Phone"
        value={contact.number}
        onChange={handleChange}
      />
      </label>
      <button  className={styles.button} type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;



