import { NavLink } from 'react-router-dom';

function Nav() {
  return (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Car Car</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Inventory
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-toggle bg-secondary">
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="automobiles">Automobiles List</NavLink></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><NavLink className="dropdown-item bg-secondary" to="automobiles/new">Add an automobile</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-toggle bg-secondary">
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/all">Services List</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/byVIN">Service History</NavLink></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/new">Make a service appointment</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/technicians/new">Add a technician</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)}

export default Nav;
