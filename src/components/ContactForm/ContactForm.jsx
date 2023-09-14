import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';
import { addContacts } from 'redux/operations';


const ContactForm = () => {
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    phone: '',
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
      phone: '',
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
        name="phone"
        placeholder="Phone"
        value={contact.phone}
        onChange={handleChange}
      />
      </label>
      <button  className={styles.button} type="submit">Add contact</button>
      {/* {error && <p className={styles.error}>{error}</p>} */}
    </form>
  );
};

export default ContactForm;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import styles from './ContactForm.module.css';
// import { addContacts } from 'redux/operations';
// import { getContacts } from 'redux/selectors';

// function ContactForm() {
//   const dispatch = useDispatch();
//   const allContacts = useSelector(getContacts);
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!name || !number) {
//       setError('Please fill in both name and number.');
//       return;
//     }

//     const isContactExists = allContacts.some(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
//     );

//     if (isContactExists) {
//       setError('This contact already exists.');

//       return;
//     }
//     try {
//       await dispatch(addContacts({ name, number }));
//       setName('');
//       setNumber('');
//       setError('');
//     } catch (error) {
//       setError('An error occurred while adding the contact.');
//     }
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <label className={styles.label}>
//         Name
//         <input
//           className={styles.input}
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={styles.label}>
//         Number
//         <input
//           className={styles.input}
//           type="tel"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button  className={styles.button} type="submit">Add contact</button>
//       {error && <p className={styles.error}>{error}</p>}
//     </form>
//   );
// }

// export default ContactForm;
