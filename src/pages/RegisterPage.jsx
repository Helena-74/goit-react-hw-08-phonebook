import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';
import styles from '../components/App.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form className={styles.register} onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userData.name}
            onChange={handleChange}
            required
        />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userData.password}
            onChange={handleChange}
            minLength={8}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;



// import React from 'react';
// import { useDispatch } from 'react-redux';

// const RegisterPage = () => {
// const dispatch = useDispatch();
  
// const handleSubmit = (event) =>{
//   event.preventDefault();

//   const name = event.currentTarget.elements.userName.value;
//   const email = event.currentTarget.elements.userEmail.value;
//   const password = event.currentTarget.elements.userPassword.value;

//   console.log(name, email, password);
//   const contact = {
//     name,
//     email,
//     password,
//   };
//   dispatch(registerUser(contact));
// };

//   return (
//     <div>
//       <h1>RegisterPage</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <span>Username</span>
//           <input type='text' 
//           name='userName' 
//           placeholder='Enter your name...' 
//           required/>
//         </label>
//         <label>
//           <span>Email</span>
//           <input type='email' 
//           name='userEmail' 
//           placeholder='Enter your email...' 
//           required/>
//         </label>
//         <label>
//           <span>Password</span>
//           <input type='password' 
//           name='userPassword' 
//           placeholder='Enter your password...' 
//           minLength={8}
//           required/>
//         </label>
//         <button type='submit'>Register</button>
//       </form> 
//     </div>
//   );
// };

// export default RegisterPage;