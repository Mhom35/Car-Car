import React, { useState, useEffect } from 'react';

function ManufacturerForm(props){
    const [ name, setName ] = useState('');

    const handleSubmit = async (sumbit) => {
        sumbit.preventDefault()
        //note* if you want to have consistent naming convetion we would use camelCasing
        // and pass that into our body "{max_attendees: maxAttendee}"
        const data  = {name}
        const ManufacturerUrl = "http://localhost:8100/api/manufacturers/";
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(ManufacturerUrl, fetchConfig);
        if (response.ok){
            const newManufacturer = await response.json();
            clearState()

        }
    }
    const clearState = () => {
        setName("")
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Create a new Manufacturer</h1>
                <form id="create-shoe-form" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)} required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                  </div>
                </form>
                </div>
            </div>
        </div>
)}

export default (ManufacturerForm)
