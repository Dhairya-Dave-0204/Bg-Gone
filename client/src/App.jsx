import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Home, BuyCredit, Result } from "./pages/page_index";
import { Navbar, Footer } from './components/component_index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='min-h-screen bg-slate-50'>
    <ToastContainer position='bottom-right'/>
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
