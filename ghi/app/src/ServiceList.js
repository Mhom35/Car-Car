import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let counter = 0;

function ServiceList(){
  const [appt, setAppt] = useState([]);
  const [counterCheck, setCounterCheck] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:8080/api/appointments/')
      .then(response => response.json())
      .then(data => setAppt(data.appointments));
  }, [counterCheck]);

  const getDate = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
  }

  const getTime = (dateTime) => {
    const time = new Date(dateTime);
    return time.toLocaleTimeString();
  }

  async function handleDelete(href) {
    fetch(`http://localhost:8080${href}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        counter++;
        setCounterCheck(counter);
      });
  }

  async function handleFinish(href) {
    fetch(`http://localhost:8080${href}`, {
      method: 'Put',
      body: JSON.stringify({'is_completed': true}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        counter++;
        setCounterCheck(counter);
      });
  }

  return (
    <>
      <h1 className="mt-3">Scheduled Service appointments</h1>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>VIP</th>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appt.map((appt) => {
            if (!(appt.is_completed)) {
              return (
                <tr key={appt.href}>
                  {appt.is_vip ? <td><img style={{height: "25px", width: "25px"}} src="https://cdn-icons-png.flaticon.com/512/4142/4142160.png" alt="oops.." /></td> : <td></td>}
                  <td>{appt.vin}</td>
                  <td>{appt.owner}</td>
                  <td>{getDate(appt.date)}</td>
                  <td>{getTime(appt.date)}</td>
                  <td>{appt.technician.name}</td>
                  <td>{appt.reason}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(appt.href)}> Cancel </button>
                  </td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleFinish(appt.href)}> Finished </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  )

}

export default ServiceList;
