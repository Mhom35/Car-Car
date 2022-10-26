import React, { useEffect, useState } from "react";

function AutoForm() {

  const [models, setModels] = useState([]);
  const [formInput, setFormInput] = useState({
    vin: '',
    color: '',
    year: '',
    model_id: '',
  });

  useEffect(() => {
    fetch('http://localhost:8100/api/models/')
      .then(response => response.json())
      .then(data => setModels(data.models));
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
      color: '',
      year: '',
      model_id: '',
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let data = {...formInput};
    const response = await fetch('http://localhost:8100/api/automobiles/', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.ok) {
      const newAuto = await response.json();
      clearState();
    }
  }

  return (
    <div className="my-5 container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form onSubmit={handleFormSubmit} id="create-hat-form">
              <div className="form-floating mb-3">
                <input value={formInput.color} onChange={handleInputChange} placeholder="Color" required type="text" id="color" name="color" className="form-control"/>
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input value={formInput.year} onChange={handleInputChange} placeholder="Year" required type="text" id="year" name="year" className="form-control"/>
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input value={formInput.vin} onChange={handleInputChange} placeholder="VIN" type="text" id="vin" name="vin" className="form-control"/>
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="mb-3">
                <select value={formInput.model_id} onChange={handleInputChange} required id="model_id" className="form-select" name="model_id">
                  <option>Choose a model</option>
                  {models.map(model => <option key={model.href} value={model.id}>{model.manufacturer.name} {model.name}</option>
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

export default AutoForm;
