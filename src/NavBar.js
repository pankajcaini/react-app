import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NavBar({ is_logged_in }) {
    return <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className='nav-link fs-6 fw-bold text-light' to="/">Home</NavLink>
                    </li>

                    {
                        !is_logged_in && <li className="nav-item">
                            <NavLink className='nav-link fs-6 fw-bold text-light' to="/login">Login</NavLink>
                        </li>
                    }


                    {
                        !is_logged_in && <li className="nav-item">
                            <NavLink className='nav-link fs-6 fw-bold text-light' to="/sigin">Register</NavLink>
                        </li>
                    }


                    {
                        is_logged_in && <li className="nav-item">
                            <NavLink className='nav-link fs-6 fw-bold text-light' to="/logout">Logout</NavLink>
                        </li>
                    }


                    {
                        is_logged_in && <li className="nav-item">
                            <NavLink className='nav-link fs-6 fw-bold text-light' to="/cart">Cart</NavLink>
                        </li>
                    }


                    {
                        is_logged_in && <li className="nav-item">
                            <NavLink className='nav-link fs-6 fw-bold text-light' to="/orders">Orders</NavLink>
                        </li>
                    }




                </ul>
            </div>
        </div>
    </nav>
}
