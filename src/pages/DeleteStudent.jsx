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
      const response = await fetch(`https://student-crud-operations-with-springboot.onrender.com/delete/delete/${id}`, { method: "DELETE" });
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
    <div className="card">
      <h2 className="text-center mb-4" style={{ color: "#0d3b66" }}>
        Delete Students
      </h2>

      {error && <p className="error-msg text-center">{error}</p>}
      {loading && <p className="text-center">Loading students...</p>}

      {studentdetails.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentdetails.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>
                    <button
                      className="btn-blue"
                      onClick={() => handledelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </Layout>
);
};

export default DeleteStudent;