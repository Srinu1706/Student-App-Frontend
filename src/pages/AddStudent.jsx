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
      <h2>Add Student</h2>
      <form onSubmit={studenthandler}>
        <label>First Name</label>
        <input type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} />
        <label>Last Name</label>
        <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} />
        <label>Phone Number</label>
        <input type="text" value={phonenumber} onChange={(e) => setphonenumber(e.target.value)} />
        <label>Branch</label>
        <input type="text" value={branch} onChange={(e) => setbranch(e.target.value)} />
        <label>College</label>
        <input type="text" value={college} onChange={(e) => setcollege(e.target.value)} />
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} />
        <label>Fees</label>
        <input type="text" value={fees} onChange={(e) => setfees(e.target.value)} />
        <button type="submit">Submit Student</button>
      </form>
      {message && <p className={message.includes("success") ? "success-msg" : "error-msg"}>{message}</p>}
    </Layout>
  );
};

export default AddStudent;