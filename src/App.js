import Data from './Data.js';
import { useState } from 'react';
import Form from './Form.js';
import Parlour from './Parlour';
import Contact from './Contact.jsx';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import LoginForm from './LoginForm.jsx'
import SignupPage from './SignupPage.jsx';

function App() {
  const [parlour, setParlour] = useState(Data);

  function removeParlour(id) {
    const newParlour = parlour.filter(parlours => parlours.id !== id);
    setParlour(newParlour);
  }

  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/SignupPage"> Signup </Link>
        <Link to="/LoginForm"> Login </Link>

      </nav>

      {/* Routes */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Parlour parlour={parlour} removeParlour={removeParlour} />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>

      {/* If all parlours are removed, show the Refresh Button */}
      {parlour.length === 0 ? (
        <div className="refresh">
          <h1>NO FACILITY LEFT</h1>
          <button onClick={() => setParlour(Data)}> Refresh</button>
        </div>
      ) : (
        <Form />
      )}
    </div>
  );
}

export default App;
