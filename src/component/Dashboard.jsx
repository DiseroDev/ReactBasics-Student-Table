import React from "react";
import Student from "./Student";
import students from "../data/students";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Students List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Major</th>
            <th>University</th>
            <th>Average Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <Student
              key={student.id}
              id={student.id}
              name={student.name}
              age={student.age}
              major={student.major}
              university={student.university}
              averageGrade={student.averageGrade}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
