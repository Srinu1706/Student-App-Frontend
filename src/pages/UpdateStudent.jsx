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
      const response = await fetch(`http://localhost:8080/update/${id}`, {
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
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Update Student</h2>
      <form onSubmit={handlepatch}>
        <div className="row mb-3">
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Student ID"
              onChange={(e) => setid(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={(e) => setfirstname(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setlastname(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              onChange={(e) => setphonenumber(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="Branch"
              onChange={(e) => setbranch(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="College"
              onChange={(e) => setcollege(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              onChange={(e) => setlocation(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Fees"
              onChange={(e) => setfees(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              Update Student
            </button>
          </div>
        </div>

        {message && <h5 className="text-success">{message}</h5>}
      </form>
    </div>
  );
};

export default UpdateStudent;