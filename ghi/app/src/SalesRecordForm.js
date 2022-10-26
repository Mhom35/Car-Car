import React, { useState, useEffect } from 'react';

function SalesRecordForm(props){
    const [ price, setPrice ] = useState('')
    const [ salesPerson, setSalesPerson] = useState('')
    const [ salesPeople, setSalesPeople] = useState([])
    const [ customer, setCustomer] = useState('')
    const [ customers, setCustomers] = useState([])
    const [ automobile, setAutomobile] = useState('')
    const [ automobiles, setAutombiles] = useState([])

    const handleSubmit = async (sumbit) => {
        sumbit.preventDefault()
        const SalesPerson_id = salesPerson
        const customer_id = customer
        //autos.vin was the value passed into form
        const vin = automobile
        const data  = {SalesPerson_id, customer_id, price}
        const SalesRecordUrl = `http://localhost:8090/api/${vin}/sales/`;
        const fetchConfig = {
            method:"post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const response = await fetch(SalesRecordUrl, fetchConfig);
        if (response.ok){
            const newSalesRecord = await response.json();
            clearState()

        }
    }
    const clearState = () => {
        setPrice('')
        setSalesPerson('')
        setCustomer('')
        setAutomobile('')

    }
    useEffect(() => {
        const fetchBins = async () => {
            const SalesPeopleUrl = 'http://localhost:8090/api/sales_person/'
            const CustomerUrl = 'http://localhost:8090/api/customer/'
            const AutomobileUrl = 'http://localhost:8100/api/automobiles/'
            const response1 = await fetch(SalesPeopleUrl)
            const response2 = await fetch(CustomerUrl)
            const response3 = await fetch(AutomobileUrl)
            const data = await response1.json()
            const data2 = await response2.json()
            const data3 = await response3.json()
            setSalesPeople(data.salesPerson)
            setCustomers(data2.customers)
            setAutombiles(data3.autos)
        }

        fetchBins()
    }, [])




    return(
        <div className="my-5 container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new sales record</h1>
            <form onSubmit={handleSubmit} id="create-hat-form">
              <div className="form-floating mb-3">
                <input value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Price of car" required type="number" id="price" name="price" className="form-control"/>
                <label htmlFor="price">Price</label>
              </div>
              <div className="mb-3">
                <select value={salesPerson} onChange={(event) => setSalesPerson(event.target.value)} required id="salesPerson" className="form-select" name="salesPerson">
                  <option>Select Sales Rep</option>
                  {salesPeople.map( salesPer =>
                  <option key={salesPer.employeeID} value={salesPer.employeeID}>{salesPer.name}</option>
                  )}
                </select>
              </div>
              <div className="mb-3">
                <select value={customer} onChange={(event) => setCustomer(event.target.value)} required id="customer" className="form-select" name="customer">
                  <option>Select Customer</option>
                  {customers.map( c =>
                  <option key={c.id} value={c.id}>{c.name}</option>
                  )}
                </select>
              </div>
              <div className="mb-3">
                <select value={automobile} onChange={(event) => setAutomobile(event.target.value)} required id="automobile" className="form-select" name="automobile">
                  <option>Car purchased</option>
                  {automobiles.map( car =>
                  <option key={car.id} value={car.vin}>{car.vin} - {car.model.name}</option>
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

export default SalesRecordForm
