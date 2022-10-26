import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppSales';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

async function loadManufacturerVehicle() {
  const response1 = await fetch('http://localhost:8100/api/manufacturers/');
  let manufacturerData = null;
  let vehicle = null;
  if (response1.ok) {
    manufacturerData = await response1.json();

  } else (
    console.error(response1)
  )

  const response2 = await fetch('http://localhost:8100/api/models/')
  if (response2.ok) {
    vehicle = await response2.json();
  } else (
    console.error(response2)
  )


  root.render(
    <React.StrictMode>
      <App
      manufacturers={manufacturerData.manufacturers}
      models={vehicle.models}
      />
    </React.StrictMode>
  );
}

loadManufacturerVehicle()
