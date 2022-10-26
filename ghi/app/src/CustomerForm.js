import React, { useState, useEffect } from 'react';

function CustomerForm(props){
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhone] = useState("");

    const handleSubmit = async (sumbit) => {
        sumbit.preventDefault()
        const phone_num = phoneNumber
        const data  = {name, address, phone_num}
        const CustomerUrl = "http://localhost:8090/api/customer/";
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(CustomerUrl, fetchConfig);
        if (response.ok){
            const newCustomer = await response.json();
            clearState()

        }
    }
    const clearState = () => {
        setName("")
        setAddress("")
        setPhone("")
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
                  <div className="form-floating mb-3">
                    <input placeholder="address" value={address} onChange={(event) => setAddress(event.target.value)} required type="text" name="address" id="address" className="form-control"/>
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input placeholder="Format: 123-45-678" value={phoneNumber} onChange={(event) => setPhone(event.target.value)} required type="tel" name="phoneNumber" id="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control"/>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <small style={{padding:"3px",fontSize:"3px"}}>Format: 123-45-678</small>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
                </div>
            </div>
        </div>
)}


export default CustomerForm
