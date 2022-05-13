import { useState } from 'react'

const SubmitForm = ({searchForOwner, clicked }) => {
    const [userID, setuserID] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!userID) {
            alert("Please input an ID")
            return
        }

        searchForOwner({userID})

        setuserID("")

    }

    return (
        <form onSubmit={onSubmit} >
            <h3>Search Owners via Car_ID</h3>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Car_ID:</label>
                <input type="text" className="form-control" id="formGroupExampleInput"
                    placeholder="id?" value = {userID} onChange = {(e) => setuserID(e.target.value)} />
            </div>

            <input onClick={clicked} type='submit' value='Search' className='search btn btn-sm btn-danger' />
        </form>
    )
}

export default SubmitForm