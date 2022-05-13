import React from 'react'

const Record = ({ record }) => {
    return (

        <div className="card record" style={{ width: "100%" }}>
              <div className="card-header list-group-item-primary">
                Name: {record.Name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Timestamp: {record.Timestamp}</li>
                <li className="list-group-item">Email: {record.Email}</li>
                <li className="list-group-item">Year: {record.Year}</li>
                <li className="list-group-item">Make: {record.Make}</li>
                <li className="list-group-item">Model: {record.MCar_ID}</li>
                <li className="list-group-item">Car_ID: {record.Car_ID}</li>
                <li className="list-group-item">Judge_ID: {record.Judge_ID}</li>
                <li className="list-group-item">Judge_Name: {record.Judge_Name}</li>
                <li className="list-group-item">Racer_Turbo: {record.Racer_Turbo}</li>
                <li className="list-group-item">Racer_Supercharged: {record.Racer_Supercharged}</li>
                <li className="list-group-item">Car_Overall: {record.Car_Overall}</li>
                <li className="list-group-item">Engine_Modifications: {record.Engine_Modifications}</li>
                <li className="list-group-item">Engine_Performance: {record.Engine_Performance}</li>
                <li className="list-group-item">Body_Frame_Undercarriage: {record.Body_Frame_Undercarriage}</li>
                <li className="list-group-item">Mods_Paint: {record.Mods_Paint}</li>
                <li className="list-group-item">Mods_Rims: {record.Mods_Rims}</li>
                <li className="list-group-item">Mods_WIP: {record.Mods_WIP}</li>
                <li className="list-group-item">Mods_Overall: {record.Mods_Overall}</li>
              </ul>
        </div>

    )
}

export default Record