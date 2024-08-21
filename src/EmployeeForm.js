import React, { useState } from "react";
import "./App.css"; 

function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    email: "",
    phoneNumber: "",
    gender: "",
    startTime: "",
    endTime: "",
    jobPosition: "",
    teams: "",
    designation: "",
    billableHours: "",
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.dob) tempErrors.dob = "Date is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber) tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.gender) tempErrors.gender = "Gender is required";
    if (!formData.startTime) tempErrors.startTime = "Start Time is required";
    if (!formData.endTime) tempErrors.endTime = "End Time is required";
    if (!formData.jobPosition) tempErrors.jobPosition = "Job Position is required";
    if (!formData.teams) tempErrors.teams = "Team selection is required";
    if (!formData.designation) tempErrors.designation = "Designation is required";
    if (!formData.billableHours || formData.billableHours <= 0) tempErrors.billableHours = "Billable Hours is required and must be a positive number";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      </div>

      <div>
        <label>Select Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value=""> Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Dont Want to disclose</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>

      <div>
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
        />
        {errors.startTime && <p className="error">{errors.startTime}</p>}
      </div>

      <div>
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
        />
        {errors.endTime && <p className="error">{errors.endTime}</p>}
      </div>

      <div>
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
        />
        {errors.jobPosition && <p className="error">{errors.jobPosition}</p>}
      </div>

      <div>
        <label>Select Teams</label>
        <select
          name="teams"
          value={formData.teams}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="teamA">Team A</option>
          <option value="teamB">Team B</option>
          <option value="teamC">Team C</option>
          <option value="teamD">Team D</option>

        </select>
        {errors.teams && <p className="error">{errors.teams}</p>}
      </div>

      <div>
        <label>Select Designation</label>
        <select
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="Intern">Intern</option>
          <option value="Teamleader">Team Leader</option>
          <option value="DevOps">DevOps Manager</option>
          <option value="seniorEXE">Senior Executive</option>

        </select>
        {errors.designation && <p className="error">{errors.designation}</p>}
      </div>

      <div>
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formData.billableHours}
          onChange={handleChange}
        />
        {errors.billableHours && <p className="error">{errors.billableHours}</p>}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
  <label style={{ marginRight: '10px' }}>Is Billable</label>
<input
    type="checkbox"
    name="isBillable"
    checked={formData.isBillable}
    onChange={handleChange}
    style={{ margin: 0, padding: 0 }}
  />
</div>


      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
