import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';
import Success from './Success';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Feedback Form */}
        <Route path="/" element={<FeedbackForm />} />

        {/* Route for Success Page */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
