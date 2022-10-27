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
              <span style={{color:"#99ff99"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list m-2" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                Inventory List
                <hr className="dropdown-divider" />
              </span>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="automobiles">Automobiles</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/manufacturer">Manufacturer</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/vehicle">Vehicle Model</NavLink></li>
              <li>
                <hr className="dropdown-divider" />
                <span style={{color:"#99ff99"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  Create Inventory
                  <hr className="dropdown-divider" />
                </span>
              </li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/manufacturer/new">Register Manufacturer</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/vehicle/new">Create Vehicle Model</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="automobiles/new">Add Automobile</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-toggle bg-secondary">
              <span style={{color:"#99ff99"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list m-2" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                Services List
                <hr className="dropdown-divider" />
              </span>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/all">Services List</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/byVIN">Service History</NavLink></li>
              <li>
                <hr className="dropdown-divider" />
                <span style={{color:"#99ff99"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  Create Service Appointment
                  <hr className="dropdown-divider" />
                </span>
              </li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/new">Create Appointment</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="services/technicians/new">Add Technician</NavLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sales
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-toggle bg-secondary">
              <span style={{color:"#99ff99"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list m-2" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                Sales List
                <hr className="dropdown-divider" />
              </span>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/salesrecord">Sale Records</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/salesperson/history">Salesman History</NavLink></li>
              <li>
                <hr className="dropdown-divider" />
                <span style={{color:"#99ff99"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  Create Sales
                  <hr className="dropdown-divider" />
                </span>
              </li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/customer/new">Customer Sign Up</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/salesperson/new">Create Sales Rep</NavLink></li>
              <li><NavLink style={({isActive}) =>{return {color:isActive ? "#ff9966":""}}} className="dropdown-item bg-secondary" to="/salesrecord/new">Create Sales Record</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)}

export default Nav;
