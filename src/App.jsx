import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import CustomerPage from "./components/CustomerPage";
import BusinessPage from "./components/BusinessPage";
import FavoritesPage from './components/FavoritesPage';
import Signup from './components/Signup';
import Login from './components/Login';
import './style.css';
import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

/* https://stackoverflow.com/questions/57156433/navigating-to-different-views-screens-in-reactjs-onclick */
function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  console.log("Firebase services loaded:", auth, db);

    // favorites, and heres is a reminder on ?
    // https://www.freecodecamp.org/news/
    // how-the-question-mark-works-in-javascript/
    const [favorites, setFavorites] = useState(() => {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (business) => {
      setFavorites(prev => {
        const exists = prev.find(item => item.id === business.id);
        return exists
          ? prev.filter(item => item.id !== business.id)
          : [...prev, business];
    });
  };

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<CustomerPage
          favorites={favorites}
          toggleFavorite={toggleFavorite} currentUser={currentUser}/>} />
          <Route path="/business" element={<BusinessPage currentUser={currentUser} />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites}
          toggleFavorite={toggleFavorite} currentUser={currentUser} /> } />
        </Routes>
      </main>
    </Router>
  )
}

export default App
