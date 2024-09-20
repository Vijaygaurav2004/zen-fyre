import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AIWorkplace from './ai';
// import SignIn from './SignIn';
// import SignUp from './SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AIWorkplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
