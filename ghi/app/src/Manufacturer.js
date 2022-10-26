function ManfacturerList(props) {
    const manufacturer = props.manufacturer
    // console.log("this prints an array", Array.isArray(manufacturer))
    // console.log("this shows an array", manufacturer)

    return (
    <>
    <h1 className="p-2 text-center">Manufacturer</h1>
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
