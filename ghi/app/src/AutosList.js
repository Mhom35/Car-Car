import React, { useEffect, useState } from "react";

function AutosList(){
  const [autos, setAutos] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:8100/api/automobiles/');
      if (response.ok) {
        const data = await response.json();
        setAutos(data.autos)
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="mt-3">Vehicles</h1>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Picture</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => {
            return (
              <tr key={auto.vin}>
                <td>
                  <img className="img-fluid w-100" src={auto.model.picture_url} alt="oops.."/>
                </td>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  )

}

export default AutosList;
