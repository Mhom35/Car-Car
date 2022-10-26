import React, { useState, useEffect } from 'react';

function VehicleForm(props){
    const [ name, setName ] = useState('');
    const [ picture, setPicture ] = useState('');
    const [ manufacturer, setManufacturer] = useState('')
    const [ manufacturers, fetchManufacturer ] = useState([]);

    const handleSubmit = async (sumbit) => {
        sumbit.preventDefault()
        const manufacturer_id = manufacturer
        const picture_url = picture
        const data  = {name, picture_url, manufacturer_id}
        const VehicleUrl = "http://localhost:8100/api/models/";
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(VehicleUrl, fetchConfig);
        if (response.ok){
            const newVehicle = await response.json();
            clearState()

        }
    }
    const clearState = () => {
        setName("")
        setPicture("")
        setManufacturer("")
    }

    useEffect(() => {
        const fetchManufacturers = async () => {
            //get the bins data to map to later
            const url = 'http://localhost:8100/api/manufacturers/'
            const response = await fetch(url)
            const data = await response.json()
            fetchManufacturer(data.manufacturers)
        }

        fetchManufacturers()
    }, [])

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                <h1>Create a new Vehicle</h1>
                <form id="create-shoe-form" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)} required type="text" name="name" id="name" className="form-control"/>
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input placeholder="picture" value={picture} onChange={(event) => setPicture(event.target.value)} required type="text" name="picture" id="picture" className="form-control"/>
                    <label htmlFor="name">Picture</label>
                  </div>
                  <div className="mb-3">
                    <select required id="Manufacturer" value={manufacturer} onChange={(event) => setManufacturer(event.target.value)} name="manufacturer" className="form-select">
                        <option>Choose a manufacturer</option>
                        {manufacturers.map(manuf => (
                            <option key={manuf.id} value={manuf.id}>{manuf.name}</option>
                        ))}
                    </select>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
        </div>
)}

export default (VehicleForm)
