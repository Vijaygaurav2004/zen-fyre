import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainApp from './ai';
import Auth from './Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;