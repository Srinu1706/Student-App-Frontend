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
      const response = await fetch(`http://localhost:8080/students/${branch}`);
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
      <h2>Get Students By Branch</h2>
      <input type="text" placeholder="Enter branch" value={branch} onChange={(e) => setbranch(e.target.value)} />
      <button onClick={getByBranch}>Search</button>
      {loading && <p>Loading students...</p>}
      {error && <p className="error-msg">{error}</p>}
      {search && !loading && studentdetails.length === 0 && <p>No students found</p>}
      {studentdetails.map(e => (
        <div className="student-item" key={e.id}>
          {e.firstname} {e.lastname} | {e.phonenumber} | {e.branch} | {e.college} | {e.location} | {e.fees}
        </div>
      ))}
    </Layout>
  );
};

export default GetbyBranch;