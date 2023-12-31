import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import styles from '../components/App.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
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

    dispatch(loginUser(userData));
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form className={styles.register} onSubmit={handleSubmit}>
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
            required
          />
        </label>  
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;


