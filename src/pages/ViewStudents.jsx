import React, { useState } from "react";
import Layout from "./Layout";

const ViewStudents = () => {
  const [studentdetails, setstudentdetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");

  const handleGetstudnets = async () => {
    try {
      setLoading(true);
      seterror("");
      const response = await fetch("https://student-crud-operations-with-springboot.onrender.com/getstudentdetails");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setstudentdetails(data);
    } catch (err) {
      seterror(err.message);
    } finally {
      setLoading(false);
    }
  };

 return (
  <Layout>
    <div className="card">
      <h2 className="text-center mb-4" style={{ color: "#0d3b66" }}>
        View Students
      </h2>

      <div className="text-center mb-3">
        <button className="btn-blue" onClick={handleGetstudnets}>
          Get All Students
        </button>
      </div>

      {loading && <p className="text-center">Loading students...</p>}
      {error && <p className="error-msg text-center">{error}</p>}

      {studentdetails.length > 0 && (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Phone</th>
                <th>Branch</th>
                <th>College</th>
                <th>Location</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              {studentdetails.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.firstname}</td>
                  <td>{e.lastname}</td>
                  <td>{e.phonenumber}</td>
                  <td>{e.branch}</td>
                  <td>{e.college}</td>
                  <td>{e.location}</td>
                  <td>{e.fees}</td>
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

export default ViewStudents;