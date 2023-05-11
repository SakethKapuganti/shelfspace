/*import React, { useState } from 'react';
import './Contact.css';

const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="form-container">
      <h1>Contact <span>Here</span></h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Enter name"
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          value={data.email}
          placeholder="example@gmail.com"
          required
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          onChange={handleChange}
          value={data.phone}
          placeholder="+91"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          onChange={handleChange}
          value={data.message}
          placeholder="Type your message here..."
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form

*/

import React from 'react'
import { useState } from 'react'
import './Contact.css';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(data)
  }

  return (
    <section className='contact'>
      <div className='container'>
        <h1 className='contact-title'>Contact <span>Here</span></h1>
        <form className='contact-form' method='post' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' onChange={handleChange} value={data.name} placeholder='Enter name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' onChange={handleChange} value={data.email} placeholder='example@gmail.com' />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone</label>
            <input type='phone' name='phone' id='phone' onChange={handleChange} value={data.phone} placeholder='+91' />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='10' rows='2' onChange={handleChange} value={data.message} placeholder='Type your message here...'></textarea>
          </div>
          <button type='submit' className='btn-submit'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
