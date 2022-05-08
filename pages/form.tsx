import React, { useState } from 'react';

export default function Forms() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState('');
  const [emailError, setEmailError] = useState('');
  const onUsernameChanege = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUsername(value);
  };
  const onEmailChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setEmail(value);
  };
  const onPasswordChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPassword(value);
  };
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === '' || email === '' || password === '') {
      setFormErrors('All fields are required');
    }
    if (!email.includes('@')) {
      setEmailError('~~');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChanege}
        type="text"
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        placeholder="Email"
        required
      />
      <input
        value={password}
        onChange={onPasswordChange}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
