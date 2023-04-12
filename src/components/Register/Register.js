import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitted: ${firstName} ${lastName}, ${email}, ${password}`);
  };

  return (
    <div className="register-container">
      
      <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="firstName" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="lastName" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <button type="submit">Register</button>
        <p><small>Have an account? Please <Link to={'/login'}>Login</Link></small></p>
      </form>
      
    </div>
  );
};

export default Register;
