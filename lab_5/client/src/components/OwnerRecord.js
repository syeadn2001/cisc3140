import React from 'react'

const OwnerRecord = ({ record }) => {
    return (
        <div className="card record" style={{ width: "100%" }}>
            <div className="card-header list-group-item-primary">
                Name: {record.Name}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Car_ID: {record.Car_ID}</li>
                <li className="list-group-item">Email: {record.Email}</li>
            </ul>
        </div>
    )
}

export default OwnerRecord