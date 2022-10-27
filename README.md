# CarCar
an application for managing aspects of an automobile dealership, specifically its inventory, service center, and sales.

Team:

* Tony Nguyen - Service microservice
* Mitchell Hom - Sales microservice

## Installation

1. Fork the repository at https://gitlab.com/Mhom35/project-beta
2. Select clone with HTTPS, and copy the link
3. Clone the repo using Terminal: `git clone repo-link`
4. Change your working directory to the new cloned repo: `cd repo-name`
5. Run the following commands:
    ```
    docker volume create beta-data
    docker-compose build
    docker-compose up
    ```
6. When you run docker-compose up and if you're on macOS, you will see a warning about an environment variable named OS being missing. You can safely ignore this
7. Read the project design and each microservices details below to understand how everything works

## Design

![alt text](assets/DesignProjectBetaHR.png)

## Service microservice

![alt text](assets/Full-Service-model.png)

Service Api keep track of service appointments for automobiles and their owners.

* A technician have:
    - name
    - employee number
    - You can create a Technician via the link "Enter a technician" in navbar.

* A service appointment have:
    - VIN of the vehicle
    - name of the person to whom the vehicle belongs
    - the date and time of the appointment
    - the assigned technician
    - a reason for the service appointment
    - You can create an appointment via the link "Enter a service appointment" in navbar.

* List of appointments:
    - show a list of scheduled appointments contain all the details (cancelled  - and finished appointment not shown)
    - If the VIN of an automobile was at one time in Inventory, that appointment will be marked for "VIP treatment"
    - Each appointment in the list have a button that allows a service concierge to cancel the appointment, or to show that the service appointment has been finished
    - You can access the list of appointments via the link "Appointments" in navbar.

* Service history:
    - show a list of service appointments for a specific VIN
    - You can access this via the link "Service history" in navbar. Then enter a VIN into the search box to show list of service appointments for that VIN.


## Sales microservice
![alt text](assets/sales_microservice.png)

Sales microservice keeps track of customers, sales reps, and sales record


* Creation/list of a SalesRep
    - Requires input of name and a unique employeeID to create
    - Get request will send back name and employeeID
    - To access SalesRep information send a get request to "http://localhost:8090/api/sales_person/"

* Creation/list of Customers
    - Requires input of name, address, and phone_num (formatting is handled in the frontend)
    - Get request will list an array of objects that contains name, address, phone_num, and customer id
    - To access Customer information send a get request to "http://localhost:8090/api/customer/"

* List of Sales Record / Creation of Sales Record
    - Requires: An automobile(with associated vin) , customer, sales person to be made before creating a sales record
    - Creation of a sales record requires employeeID (coming from SalesPerson model), customer (customer id from customer model) and vin number(from AutoMobile VO that comes from our poller)
    - A record will send back price, id(of sales record), SalesPerson object model, automobile vin, customer name, and sales person name and employee ID (for ease of use)
    - To access sales record send a get request to "http://localhost:8090/api/sales"
