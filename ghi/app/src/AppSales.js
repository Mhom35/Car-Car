import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './Manufacturer'
import ManufacturerForm from './ManufacturerForm'
import VehicleList from './VehicleList'
import VehicleForm from './VehicleForm';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
