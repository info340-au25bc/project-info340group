import React, { useState } from 'react'
import Header from "./components/Header";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import BusinessForm from "./components/BusinessForm";
import SuccessStories from "./components/SuccessStories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import '../../css/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Hero />
        <BusinessForm />
        <SuccessStories />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
