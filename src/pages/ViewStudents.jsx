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
      const response = await fetch("http://localhost:8080/getstudentdetails");
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
      <h2>View Students</h2>
      <button onClick={handleGetstudnets}>Get All Students</button>
      {loading && <p>Loading students...</p>}
      {error && <p className="error-msg">{error}</p>}
      {studentdetails.map((e) => (
        <div className="student-item" key={e.id}>
          <span>
            {e.firstname} {e.lastname} | {e.phonenumber} | {e.branch} | {e.college} | {e.location} | {e.fees}
          </span>
        </div>
      ))}
    </Layout>
  );
};

export default ViewStudents;