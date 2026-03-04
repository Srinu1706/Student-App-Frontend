import React, { useState, useEffect } from "react";
import Layout from "./Layout";

const DeleteStudent = () => {
  const [studentdetails, setstudentdetails] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const fetchStudents = async () => {
    setloading(true);
    try {
      const response = await fetch("http://localhost:8080/getstudentdetails");
      if (!response.ok) throw new Error("Failed to fetch students");
      const data = await response.json();
      setstudentdetails(data);
    } catch (err) {
      seterror(err.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handledelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/delete/${id}`, { method: "DELETE" });
      if (!response.ok) alert("Failed to delete student");
      else {
        alert("Student deleted successfully");
        setstudentdetails(prev => prev.filter(e => e.id !== id));
      }
    } catch (err) { seterror(err.message); }
  };

  if (loading) return <p>Loading students...</p>;

  return (
    <Layout>
      <h2>Delete Students</h2>
      {error && <p className="error-msg">{error}</p>}
      {studentdetails.map(student => (
        <div className="student-item" key={student.id}>
          <span>{student.id} - {student.firstname} {student.lastname}</span>
          <button onClick={() => handledelete(student.id)}>Delete</button>
        </div>
      ))}
    </Layout>
  );
};

export default DeleteStudent;