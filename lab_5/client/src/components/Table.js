import React from 'react'
import Record from "./Record"
import OwnerRecord from "./OwnerRecord"
import CarRecord from "./CarRecord"


const Table = ({ table }) => {
    return (

        <div>
            {table.map((record) => {
                if ((record).length === 0) {
                    console.log("Hello")
                    return <OwnerRecord key={-1} record={{ Car_ID: -1, Email: "none", Name: "DNE" }} />
                } else if (Object.keys(record).length <= 3) {
                    return <OwnerRecord key={record.Car_ID} record={record} />
                } else if (Object.keys(record).length <= 4) {
                    return <CarRecord key={record.Car_ID} record={record} />
                } else {
                    return (record.Car_ID !== table[0].Car_ID) ? <Record key={record.Car_ID} record={record} ></Record> : null
                }
            })}
        </div>
    )
}

export default Table