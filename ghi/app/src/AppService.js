import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './ServiceNav';
import AutosList from './AutosList';
import AutoForm from './AutoForm';
import TechnicianForm from './TechForm';
import AppointmentForm from './ServiceForm';
import ServiceList from './ServiceList';
import VinSearch from './VinSearch';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" />
            <Route index element={<MainPage />} />
            <Route path="automobiles">
                <Route index element={<AutosList />} />
                <Route path="new" element={<AutoForm />} />
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
