import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home, BuyCredit, Result } from "./pages/page_index";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
