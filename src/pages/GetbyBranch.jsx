import React, { useState } from "react";
import Layout from "./Layout";

const GetbyBranch = () => {
  const [studentdetails, setstudentdetails] = useState([]);
  const [branch, setbranch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");
  const [search, setsearch] = useState(false);

  const getByBranch = async () => {
    setsearch(true);
    setLoading(true);
    seterror("");
    try {
      const response = await fetch(`https://student-crud-operations-with-springboot.onrender.com/students/${branch}`);
      if (!response.ok) throw new Error("Failed to fetch students");
      const data = await response.json();
      setstudentdetails(data);
    } catch (err) {
      seterror(err.message);
      setstudentdetails([]);
    } finally {
      setLoading(false);
    }
  };

  return (
  <Layout>
    <div className="card">
      <h2 className="text-center mb-4" style={{ color: "#0d3b66" }}>
        Get Students By Branch
      </h2>

      <div className="d-flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter branch"
          value={branch}
          onChange={(e) => setbranch(e.target.value)}
        />
        <button className="btn-blue" onClick={getByBranch}>
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading students...</p>}
      {error && <p className="error-msg text-center">{error}</p>}
      {search && !loading && studentdetails.length === 0 && (
        <p className="text-center">No students found</p>
      )}

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

export default GetbyBranch;