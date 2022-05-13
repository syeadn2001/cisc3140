import React from 'react'

const Form = ({ clickedAll, clickedOwners, clickedCars }) => {
    return (
        <form>
            <div className='buttons'>
                <button onClick={clickedAll} type="button"
                    className="topButton btn btn-primary btn-lg  ">
                    See All Data?
                </button>
                <button onClick = {clickedCars} type="button"
                    className="topButton btn btn-success btn-lg  ">
                    See All Cars?
                </button>
                <button onClick={clickedOwners} type="button"
                    className="topButton btn btn-warning btn-lg  ">
                    See All Owners?
                </button>
            </div>
        </form>
    )
}

export default Form