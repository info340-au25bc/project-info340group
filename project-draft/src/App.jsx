import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import CustomerPage from "./components/CustomerPage";
import BusinessPage from "./components/BusinessPage";
import './style.css';

/* https://stackoverflow.com/questions/57156433/navigating-to-different-views-screens-in-reactjs-onclick */
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/business" element={<BusinessPage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
