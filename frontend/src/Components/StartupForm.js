import React, { useState } from 'react';
import axios from 'axios';

export default function StartupForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', industry: '', fundingRequired: '', stage: ''
  });
  
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/startups`, formData);
    alert('Startup Onboarding Successful');
    setFormData({ name: '', email: '', industry: '', fundingRequired: '', stage: '' });
  };

  return (
    <div className="form-container">
      <h2>Startup Onboarding</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} />
        <input type="text" name="fundingRequired" placeholder="Funding Required" value={formData.fundingRequired} onChange={handleChange} />
        <input type="text" name="stage" placeholder="Stage (e.g., Seed, Series A)" value={formData.stage} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
