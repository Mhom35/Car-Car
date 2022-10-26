import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

async function loadManufacturerVehicle() {
  const manufacturerResponse = await fetch('http://localhost:8100/api/manufacturers/');
  let manufacturerData = null;
  let vehicle = null;
  let sales_record = null;
  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();

  } else (
    console.error(manufacturerResponse)
  )

  const vehicleResponse = await fetch('http://localhost:8100/api/models/')
  if (vehicleResponse.ok) {
    vehicle = await vehicleResponse.json();
  } else (
    console.error(vehicleResponse)
  )
  const salesResponse = await fetch('http://localhost:8090/api/sales/')
  if (salesResponse.ok) {
    sales_record = await salesResponse.json()
  } else{
    console.error(salesResponse)
  }


  root.render(
    <React.StrictMode>
      <App
      manufacturers={manufacturerData.manufacturers}
      models={vehicle.models}
      sales={sales_record.sales_record}
      />
    </React.StrictMode>
  );
}

loadManufacturerVehicle()
