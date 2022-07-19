import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CriticalPatients from './components/CriticalPatients';
import MidcriticalPatients from './components/MidcriticalPatients';
import PeriodicPatients from './components/PeriodicPatients';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Navbar />
        <Routes>
          <Route path="/Critical" element={<CriticalPatients />} />
          <Route path="/Midcritical" element={<MidcriticalPatients />} />
          <Route path="/Periodic" element={<PeriodicPatients />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
