import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
  );
};

export default ContactsPage;

