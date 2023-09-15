import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError); 

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









// import { Loader } from 'components/Loader/Loader';
// import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { useDispatch, useSelector } from 'react-redux';
// import imgFavicon from '../images/favicon-32x32.png';
// import {
//   addContact,
//   deleteContact,
//   requestContacts,
//   selectContacts,
//   selectContactsError,
//   selectContactsIsLoading,
// } from 'redux/contactsReducer';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const isLoading = useSelector(selectContactsIsLoading);
//   const error = useSelector(selectContactsError);

//   useEffect(() => {
//     dispatch(requestContacts());
//   }, [dispatch]);

//   const handleSubmit = event => {
//     event.preventDefault();

//     const name = event.currentTarget.elements.contactName.value;
//     const number = event.currentTarget.elements.contactNumber.value;

//     const formData = {
//       name,
//       number,
//     };

//     dispatch(addContact(formData));
//     event.currentTarget.reset();
//   };

//   const handleDeleteContact = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   const showContacts = Array.isArray(contacts) && contacts.length > 0;
//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <link rel="icon" type="image/x-icon" href={imgFavicon}></link>
//         <title>Contacts</title>
//       </Helmet>
//       <h1>Phonebook</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Name:</p>
//           <input type="text" name="contactName" required minLength={2} />
//         </label>
//         <label>
//           <p>Number:</p>
//           <input type="text" name="contactNumber" required minLength={6} />
//         </label>
//         <div>
//           <button type="submit">Add contact</button>
//         </div>
//       </form>
//       {error !== null && (
//         <p className="c-error">
//           Oops, some error occured. Please, try again later. Error: {error}
//         </p>
//       )}
//       {isLoading && <Loader />}
//       <ul>
//         {showContacts &&
//           contacts.map(({ id, name, number }) => (
//             <li key={id}>
//               <h3>
//                 Name: {name}{' '}
//                 <button onClick={() => handleDeleteContact(id)}>&times;</button>
//               </h3>
//               <p>
//                 Phone number: <b>{number}</b>
//               </p>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactsPage;