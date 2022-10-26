import React, { useState, useEffect } from 'react';

function SalesPersonForm(props){
    const [name, setName] = useState('');
    const [employeeID, setEmployeeID] = useState('');

    const handleSubmit = async (submit) => {
        submit.preventDefault();
        const data = {name, employeeID};
        const url = "http://localhost:8090/api/sales_person/"
        const fetchConfig = {
            method:"post",
            body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok){
            const newEmployee = await response.json();
            //get rid of warning message
            const EmployeeIDexist = document.getElementById('alert')
            EmployeeIDexist.classList.add("d-none")
            //clear form after 200 post
            clearState()
        }else{
            // if employee already exist then we alert the user
            const EmployeeIDexist = document.getElementById('alert')
            EmployeeIDexist.classList.remove("d-none")

        }
    }

    const clearState = () => {
        setName("")
        setEmployeeID("")
    }

    return (
    <div className="container p-5">
        <div className="row">
            <div className="offset-3 col-6 p-3">
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <div className="alert alert-danger d-flex align-items-center d-flex p-2 d-none"  id="alert" style={{height:"60px"}} role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" style={{height:"50px", color:"red"}} viewBox="0 0 16 16" role="img" aria-label="Warning:">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                        Employee already exists please select another ID
                    </div>
                    </div>
                    <h1>Create a new Sales Person</h1>
                    <form id="create-shoe-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input placeholder="name" value={name} onChange={(event) => setName(event.target.value)} required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="name" value={employeeID} onChange={(event) => setEmployeeID(event.target.value)} required type="number" name="employeeID" id="employeeID" className="form-control"/>
                            <label htmlFor="employeeID">EmployeeID</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SalesPersonForm
