import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    rating: '',
    message: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message || !formData.rating) {
      setError('All fields are required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    navigate('/success');
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      rating: '',
      message: ''
    });
    setError('');
  };

  return (
    <div className="App">
      <h1>Blackwins-Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group half-width">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group half-width">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group half-width">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group half-width">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Rating (1-5):</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
