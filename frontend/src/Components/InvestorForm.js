import React, { useState } from 'react';
import axios from 'axios';

export default function InvestorForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', investmentRange: '', sectorInterest: ''
  });
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/investors`, {
      ...formData,
      sectorInterest: formData.sectorInterest.split(','),
    });
    alert('Investor Onboarding Successful');
    setFormData({ name: '', email: '', company: '', investmentRange: '', sectorInterest: '' });
  };

  return (
    <div className="form-container">
      <h2>Investor Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        <input type="text" name="investmentRange" placeholder="Investment Range" value={formData.investmentRange} onChange={handleChange} />
        <input type="text" name="sectorInterest" placeholder="Sector Interest (comma separated)" value={formData.sectorInterest} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
