import React from "react";
import { useState } from "react";

function TechnicianForm() {
  const [formInput, setFormInput] = useState({
    name: '',
    employee_number: '',
  });

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.id]: e.target.value
    })
  }

  const clearState = () => {
    setFormInput({
      name: '',
      employee_number: '',
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = {...formInput};
    const response = await fetch('http://localhost:8080/api/technicians/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      const newTechnician = await response.json();
      clearState();
    }
  }

  return (
    <div className="my-5 container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new technician</h1>
            <form onSubmit={handleFormSubmit} id="create-hat-form">
              <div className="form-floating mb-3">
                <input value={formInput.name} onChange={handleInputChange} placeholder="Name" required type="text" id="name" name="name" className="form-control"/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={formInput.employee_number} onChange={handleInputChange} placeholder="Employee Number" required type="number" id="employee_number" name="employee_number" className="form-control"/>
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnicianForm;
