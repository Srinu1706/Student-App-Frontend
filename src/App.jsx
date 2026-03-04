import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import ViewStudents from './pages/ViewStudents';
import UpdateStudent from './pages/UpdateStudent';
import DeleteStudent from './pages/DeleteStudent';
import GetbyBranch from './pages/GetbyBranch';
import './App.css'; // Ensure CSS is imported here!
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">View Students</Link>
        <Link to="/add" className="nav-link">Add Student</Link>
        <Link to="/update" className="nav-link">Update</Link>
        <Link to="/delete" className="nav-link">Delete</Link>
        <Link to="/branch" className="nav-link">By Branch</Link>
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




//  