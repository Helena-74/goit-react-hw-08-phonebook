import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

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

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const userData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
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


