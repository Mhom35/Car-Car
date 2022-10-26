function ManfacturerList(props) {
    const manufacturer = props.manufacturer

    return (
    <>
    <h1 className="text-center mt-5 p-3">Manufacturers</h1>
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {/* ?((ternary) operator) first asks if the manufacturer actually exists */}
        {manufacturer?.map(manuf => {
            return(
                <tr key={manuf.href}>
                <td>{ manuf.name}</td>
                </tr>
            );
        })}
        </tbody>
    </table>
    </>
)}

export default ManfacturerList
