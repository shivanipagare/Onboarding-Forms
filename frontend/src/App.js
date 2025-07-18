import React from 'react';
import InvestorForm from './Components/InvestorForm';
import StartupForm from './Components/StartupForm';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <h1>Onboarding Portal</h1>
      <div className='form'>
      <div className="form-section">
        <InvestorForm />
      </div>
      <div className="form-section">
        <StartupForm />
      </div>
      </div>
    </div>
  );
}

export default App;
