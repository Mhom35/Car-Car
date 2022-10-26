import React, { useState, useEffect} from "react";
// import { Link } from "react-router-dom";

function VehicleList(props) {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/models/')
        if(response.ok){
            const data = await response.json();
            setListData(data.models)
        }
    }
    getData()
  }, [])

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
      {listData.map( vechicle => {
        return (
          <div className="col" key={vechicle.href}>
            <div className="card shadow h-100" >
              <img src={vechicle.picture_url} className="card-img-top img-fluid" alt="oops.."/>
              <div className="card-body">
                <h5 className="card-title">{vechicle.name}</h5>
                <p className="card-text">Ride in this new {vechicle.manufacturer.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VehicleList;
