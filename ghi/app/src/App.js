import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './ServiceNav';
import AutosList from './AutosList';
import AutoForm from './AutoForm';
import TechnicianForm from './TechForm';
import AppointmentForm from './ServiceForm';
import ServiceList from './ServiceList';
import VinSearch from './VinSearch';

import ManufacturerList from './Manufacturer'
import ManufacturerForm from './ManufacturerForm'
import VehicleList from './VehicleList'
import VehicleForm from './VehicleForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesList from './SalesList';
import SalesPersonHistoryList from './SalesPersonHistory';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" />
            <Route index element={<MainPage />} />
            <Route path="manufacturer">
              <Route index element={<ManufacturerList manufacturer={props.manufacturers}/>} />
              <Route path="new" element={<ManufacturerForm />}/>
            </Route>
            <Route path="vehicle">
              <Route index element={<VehicleList models={props.models}/>} />
              <Route path="new" element={<VehicleForm />} />
            </Route>
            <Route path="automobiles">
              <Route index element={<AutosList />} />
              <Route path="new" element={<AutoForm />} />
            </Route>
            <Route path="salesperson">
              <Route path="new" element={<SalesPersonForm />} />
              <Route path="history" element={<SalesPersonHistoryList sales={props.sales}/>} />
            </Route>
            <Route path="customer">
              <Route path="new" element={<CustomerForm />} />
            </Route>
            <Route path="salesrecord">
              <Route index element={<SalesList sales={props.sales}/>} />
              <Route path="new" element={<SalesRecordForm />} />
            </Route>
            <Route path="services">
              <Route path="all" element={<ServiceList />} />
              <Route path="new" element={<AppointmentForm />} />
              <Route path="byVIN" element={<VinSearch />} />
              <Route path="technicians">
                <Route path="new" element={<TechnicianForm />} />
              </Route>
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
