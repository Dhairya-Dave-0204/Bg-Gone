import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home, BuyCredit, Result } from "./pages/page_index";
import { Navbar, Footer } from './components/component_index';

function App() {

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
