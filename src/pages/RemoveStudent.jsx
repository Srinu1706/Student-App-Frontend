import React, { useState } from 'react'

const RemoveStudent = () => {
    
    const [studentdetails,setstudentdetails]=useState([]);
    const [loading,setloading]=useState(false);
    const [error,seterror]=useState(null);

    const handledelete=async()=>{
        try{
            const response=await fetch(`http://localhost:8080/delete/${id}`,{
                method: "DELETE"
            })
            if(!response.ok){
                alert("failed to fetch");
            }
            else{
                alert("sucessfully delted");
            }   
            // const studentdetails=studentdetails.filter((e)=>{
            //     e.id=!id;
             setstudentdetails(prev => prev.filter(e => e.id !== id));
            
        }
        catch(error){
            seterror(error.message)
        }
        
    }
  return (
    <div>
      {studentdetails.length === 0 ? (
        <p>No students found</p>
      ) : (
        studentdetails.map((student) => (
          <div key={student.id}>
            <span>
              ID: {student.id} - Name: {student.firstname} {student.lastname}
            </span>
            <button onClick={() => handledelete(student.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default RemoveStudent
