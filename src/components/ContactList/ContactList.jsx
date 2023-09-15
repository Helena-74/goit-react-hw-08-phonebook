import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ContactList.module.css';
import { deleteContacts } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
    {contacts.map((contact) => (
      <li className={styles.li} key={contact.id}>
        {contact.name}: {contact.phone}
        <button onClick={() => dispatch(deleteContacts(contact.id))}>
          Delete
        </button>
      </li>
    ))}
  </ul>
  );
}

export default ContactList;



  // const contacts = useSelector(selectFilteredContacts);