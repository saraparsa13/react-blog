import React , { Component } from 'react'
import { Link } from 'react-router-dom'

const SignOut = (props) => {

    const clickHandler = (e) => {
        // e.preventDefault()

        if(localStorage.getItem('token')){
            localStorage.removeItem('token')
        }
    }

    return(
        <Link to="/login" onClick={clickHandler}>
            <i className="fas fa-book"></i>
        </Link>
    )
}

export default SignOut