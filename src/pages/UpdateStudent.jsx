import { useState } from "react";

const UpdateStudent = () => {
  const [id, setid] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [branch, setbranch] = useState("");
  const [college, setcollege] = useState("");
  const [location, setlocation] = useState("");
  const [fees, setfees] = useState("");
  const [message, setMessage] = useState("");

  const handlepatch = async (e) => {
    e.preventDefault();
    const studentspatch = {};
    if (firstname) studentspatch.firstname = firstname;
    if (lastname) studentspatch.lastname = lastname;
    if (phonenumber) studentspatch.phonenumber = phonenumber;
    if (branch) studentspatch.branch = branch;
    if (college) studentspatch.college = college;
    if (location) studentspatch.location = location;
    if (fees) studentspatch.fees = fees;

    if (!id) {
      alert("Please enter Student ID");
      return;
    }

    try {
      const response = await fetch(`https://student-crud-operations-with-springboot.onrender.com/update/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentspatch),
      });
      const data = await response.json();
      setMessage("Student updated successfully!");
      console.log(data);
    } catch (error) {
      setMessage("Update failed!");
    }
  };

return (
  <div className="container">
    <div className="card">
      <h2>Update Student</h2>

      <form onSubmit={handlepatch}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Student ID (Required)"
            onChange={(e) => setid(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setfirstname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setlastname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setphonenumber(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Branch"
            onChange={(e) => setbranch(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="College"
            onChange={(e) => setcollege(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setlocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Fees"
            onChange={(e) => setfees(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-blue">
          Update Student
        </button>

        {message && (
          <p className="success-msg" style={{ marginTop: "15px" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  </div>
);
};

export default UpdateStudent;