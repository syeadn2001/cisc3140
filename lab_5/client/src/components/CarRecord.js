import React from 'react'

const CarRecord = ({ record }) => {
    return (
        <div className="card record" style={{ width: "100%" }}>
            <div className="card-header list-group-item-primary">
                Car_ID: {record.Car_ID}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Make: {record.Make}</li>
                <li className="list-group-item">Model: {record.Model}</li>
                <li className="list-group-item">Year: {record.Year}</li>
            </ul>
        </div>
    )
}

export default CarRecord