import React, { useDebugValue, useEffect } from "react";
import { useState } from "react";

function AppointmentForm() {
  const [techs, setTechs] = useState([]);
  const [formInput, setFormInput] = useState({
    vin: '',
    owner: '',
    date: '',
    technician: '',
    reason: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/technicians/')
      .then(response => response.json())
      .then(data => setTechs(data.technicians));
  }, []);

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.id]: e.target.value
    })
  }

  const clearState = () => {
    setFormInput({
      vin: '',
      owner: '',
      date: '',
      technician: '',
      reason: '',
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = {...formInput};
    const response = await fetch('http://localhost:8080/api/appointments/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      const newAppt = await response.json();
      console.log(newAppt);
      clearState();
    }
  }

  return (
    <div className="my-5 container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a service appointment</h1>
            <form onSubmit={handleFormSubmit} id="create-hat-form">
              <div className="form-floating mb-3">
                <input value={formInput.vin} onChange={handleInputChange} placeholder="VIN" required type="text" id="vin" name="vin" className="form-control"/>
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input value={formInput.owner} onChange={handleInputChange} placeholder="Owner name" required type="text" id="owner" name="owner" className="form-control"/>
                <label htmlFor="owner">Owner name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={formInput.date} onChange={handleInputChange} required type="datetime-local" id="date" name="date" className="form-control"/>
                <label htmlFor="date">Date and Time</label>
              </div>
              <div className="form-floating mb-3">
                <textarea value={formInput.reason} placeholder="Reason" onChange={handleInputChange} required type="text" id="reason" name="reason" className="form-control"></textarea>
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="mb-3">
                <select value={formInput.technician} onChange={handleInputChange} required id="technician" className="form-select" name="technician">
                  <option>Choose a technician</option>
                  {techs.map(techs => <option key={techs.id} value={techs.id}>{techs.name}</option>
                  )}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
