function SalesList(props) {
    const sales = props.sales
    return (
    <>
    <h1 className="p-2 text-center p-3 mt-5">Sales Record</h1>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Sales Rep's Name</th>
            <th>Employee ID</th>
            <th>Purchaser Name</th>
            <th>VIN ID</th>
            <th>Price</th>
        </tr>
        </thead>
        <tbody>
        {/* ?((ternary) operator) first asks if any salesrecords actually exists */}
        {sales?.map(sale => {
            return(
                <tr key={sale.id}>
                <td>{ sale.SalesPerson.name}</td>
                <td>{ sale.SalesPerson.employeeID}</td>
                <td>{ sale.customer_name}</td>
                <td>{ sale.vin}</td>
                <td>${ sale.price}</td>
                </tr>
            );
        })}
        </tbody>
    </table>
    </>
)}

export default SalesList
