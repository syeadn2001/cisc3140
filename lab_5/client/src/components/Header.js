import React from 'react'
import pic from '../media/mainPic.png'

const Header = ({ data }) => {
    return (
        <header>
            <h1 className='title font-weight-bold'>All About Cars!</h1>
            <img src={pic} alt=" This is a pic of a car" />


        </header>
    )
}

export default Header