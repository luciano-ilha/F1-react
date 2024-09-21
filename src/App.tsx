import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Drivers from './pages/Drivers'
import Circuits from './pages/Circuits'
import Home from './pages/Home'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Teams from './pages/Teams'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/circuits" element={<Circuits />} />
      </Routes>
    </Router>
  )
}

export default App
