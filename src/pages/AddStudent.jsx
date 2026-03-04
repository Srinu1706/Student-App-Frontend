import React, { useState } from "react";
import Layout from "./Layout";

const AddStudent = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [branch, setbranch] = useState("");
  const [college, setcollege] = useState("");
  const [location, setlocation] = useState("");
  const [fees, setfees] = useState("");
  const [message, setMessage] = useState("");

  const studentDetails = { firstname, lastname, phonenumber, branch, college, location, fees };

  const studenthandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentDetails),
      });
      if (response.ok) setMessage("Student added successfully!");
      else setMessage("Failed to add student.");
    } catch {
      setMessage("Server error!");
    }
  };

  return (
  <Layout>
    <div className="card">
      <h2 style={{ textAlign: "center", color: "#0d3b66" }}>
        Add Student
      </h2>

      <form onSubmit={studenthandler}>
        <div className="form-group">
          <input type="text" placeholder="First Name" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setlastname(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Phone Number" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Branch" value={branch} onChange={(e) => setbranch(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="College" value={college} onChange={(e) => setcollege(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Location" value={location} onChange={(e) => setlocation(e.target.value)} />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Fees" value={fees} onChange={(e) => setfees(e.target.value)} />
        </div>

        <button type="submit" className="btn-blue">
          Submit Student
        </button>
      </form>

      {message && (
        <p className={message.includes("success") ? "success-msg" : "error-msg"}>
          {message}
        </p>
      )}
    </div>
  </Layout>
);
};

export default AddStudent;