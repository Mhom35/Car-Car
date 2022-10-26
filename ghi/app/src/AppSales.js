import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './Manufacturer'
import ManufacturerForm from './ManufacturerForm'
import VehicleList from './VehicleList'
import VehicleForm from './VehicleForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
            <Route path="manufacturer">
                <Route path="" element={<ManufacturerList manufacturer={props.manufacturers}/>} />
                <Route path="new" element={<ManufacturerForm />}/>
            </Route>
            <Route path="vehicle">
                <Route path="" element={<VehicleList models={props.models}/>} />
                <Route path="new" element={<VehicleForm />} />
            </Route>
            <Route path="salesperson">
                <Route path="new" element={<SalesPersonForm />} />
            </Route>
            <Route path="customer">
                <Route path="new" element={<CustomerForm />} />
            </Route>
            <Route path="salesrecord">
                <Route path="new" element={<SalesRecordForm />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
