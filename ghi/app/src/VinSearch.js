import React, { useEffect, useState, useSyncExternalStore } from "react";

function VinSearch(){
  const [appt, setAppt] = useState([]);
  const [vin, setVin] = useState('');
  const [formInput, setFormInput] = useState('');


  useEffect(() => {
    fetch('http://localhost:8080/api/appointments/')
      .then(response => response.json())
      .then(data => setAppt(data.appointments));
  }, []);

  const getDate = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
  }

  const getTime = (dateTime) => {
    const time = new Date(dateTime);
    return time.toLocaleTimeString();
  }

  const handleInput = (e) => {
    setFormInput(e.target.value);
  }

  function clearState() {
    setFormInput('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setVin(formInput);
    clearState();
  }

  var found = false;

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="input-group m-3">
        <input value={formInput} onChange={handleInput} type="text" className="form-control" placeholder="VIN"/>
        <button className="btn btn-secondary">Search VIN</button>
      </div>
      </form>
      <h1 className="mt-3">Service appointments history</h1>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>VIP</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appt.map((appt) => {
            if ((appt.vin == vin)) {
              found = true;
              return (
                <tr key={appt.href}>
                  {appt.is_vip ? <td><img style={{height: "25px", width: "25px"}} src="https://cdn-icons-png.flaticon.com/512/4142/4142160.png" alt="oops.." /></td> : <td></td>}

                  <td>{appt.owner}</td>
                  <td>{getDate(appt.date)}</td>
                  <td>{getTime(appt.date)}</td>
                  <td>{appt.technician.name}</td>
                  <td>{appt.reason}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      { found ? <h2></h2> : <h2 className="text-muted">No appointment found!</h2>}
    </>
  );

}

export default VinSearch;
