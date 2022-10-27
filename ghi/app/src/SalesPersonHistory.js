import React, {useEffect, useState} from 'react';

function SalesPersonHistoryList(props) {
    const sales = props.sales

    let [salesRep, setSalesPerson ] = useState('')
    let [salesReps, setSalesReps ] = useState([])

    useEffect(() => {
        const getSalesReps = async () => {
            const SalesPeopleUrl = 'http://localhost:8090/api/sales_person/'
            const response = await fetch(SalesPeopleUrl)
            const data = await response.json()
            setSalesReps(data.salesPerson)
        }
        getSalesReps()
    }, [])

    //get user selected value from dropdown list to compare to
    const filteredEmployeeID = parseInt(salesRep)
    //check to see if employee even has sales
    var hadSales = false

    return (
    <>
    <h1 className="p-2 text-center mt-5 p-3">Sales Person History</h1>
    <div className="mb-3">
        <select required id="salesRep" value={salesRep} onChange={(event) => setSalesPerson(event.target.value)} name="salesRep" className="form-select">
            <option>Choose a sales rep</option>
            {salesReps.map(rep => (
            <option key={rep.employeeID} value={rep.employeeID}>{rep.name}</option>))}
        </select>
    </div>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Sales Rep's Name</th>
            <th>Purchaser Name</th>
            <th>VIN ID</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {/* ?((ternary) operator) first asks if any salesrecords actually exists */}
        {sales?.map(sale => {
            if(sale.employeeID === filteredEmployeeID){
                hadSales = true
                return(
                    <tr key={sale.id}>
                    <td>{ sale.SalesPerson.name}</td>
                    <td>{ sale.customer_name}</td>
                    <td>{ sale.vin}</td>
                    <td>${ sale.price}</td>
                    </tr>
                );
            }
        })}
        </tbody>
    </table>
    {/* if employee has no sales show that  */}
    {(!hadSales)? <h2 className="text-center"><b>This employee has no sales...</b></h2>:<p></p>}
    </>
)}

export default SalesPersonHistoryList
