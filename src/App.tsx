import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Drivers from './pages/Drivers';
import Teams from './pages/Teams';
import Circuits from './pages/Circuits';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/circuits" element={<Circuits />} />
      </Routes>
    </Router>
  );
}

export default App;
