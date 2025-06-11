import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Entradas from './pages/Entradas';
import Saidas from './pages/Saidas';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/entradas">Entradas</Link>
        <Link to="/saidas">Saídas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/saidas" element={<Saidas />} />
      </Routes>
    </div>
  );
}