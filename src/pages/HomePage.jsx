import React from 'react';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    minHeight: 'calc(100vh - 50px)',
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  paragraph: {
    fontWeight: 300,
    fontSize: 24,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Phonebook App</h1>
      <p style={styles.paragraph}>This is the home page of the Phonebook App. Please log in to access your contacts.</p>
    </div>
  );
};

export default HomePage;


// const HomePage = () => {
//   return (
//     <div style={styles.container}>
//       <h1>Welcome to Phonebook App</h1>
//       <p >This is the home page of the Phonebook App. Please log in to access your contacts.</p>
//     </div>
//   );
// };

// export default HomePage;