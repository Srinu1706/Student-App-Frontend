import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import ViewStudents from './pages/ViewStudents';
import UpdateStudent from './pages/UpdateStudent';
import DeleteStudent from './pages/DeleteStudent';
import GetbyBranch from './pages/GetbyBranch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>

      <nav className="navbar">

      
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

    
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>View Students</Link>
          <Link to="/add" className="nav-link" onClick={() => setMenuOpen(false)}>Add Student</Link>
          <Link to="/update" className="nav-link" onClick={() => setMenuOpen(false)}>Update</Link>
          <Link to="/delete" className="nav-link" onClick={() => setMenuOpen(false)}>Delete</Link>
          <Link to="/branch" className="nav-link" onClick={() => setMenuOpen(false)}>By Branch</Link>
        </div>

      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<ViewStudents />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/update" element={<UpdateStudent />} />
          <Route path="/delete" element={<DeleteStudent />} />
          <Route path="/branch" element={<GetbyBranch />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;