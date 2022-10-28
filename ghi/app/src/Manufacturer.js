import React, {useEffect, useState} from 'react';

function ManfacturerList(props) {
    const [manufacturer, setManufacturer] = useState([]);

    useEffect(() => {
    const getData = async () => {
        const response = await fetch('http://localhost:8100/api/manufacturers/')
        if(response.ok){
            const data = await response.json();
            setManufacturer(data.manufacturers)
            }
        }
        getData()
    }, [])

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
