import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/userOperation';
export default function Register() {
  const dispatch = useDispatch();
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleInputChange = evt => {
    const inputName = evt.currentTarget.name;
    const inputValue = evt.currentTarget.value;
    switch (inputName) {
      case 'name':
        setRegisterName(inputValue);
        break;
      case 'email':
        setRegisterEmail(inputValue);
        break;
      case 'password':
        setRegisterPassword(inputValue);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const user = {
      name: registerName,
      email: registerEmail,
      password: registerPassword,
    };
    dispatch(operations.register(user));
    setRegisterName('');
    setRegisterEmail('');
    setRegisterPassword('');
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <h2>Register</h2>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          value={registerName}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="">
        E-mail
        <input
          type="mail"
          name="email"
          value={registerEmail}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="">
        Password
        <input
          type="password"
          name="password"
          value={registerPassword}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}
