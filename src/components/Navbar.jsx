import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const token = sessionStorage.getItem('Auth Token');

    // const [authedtoken, setAuthedToken] = useState('');
    
    // useEffect(() => {
    //     let authToken = sessionStorage.getItem('Auth Token')
    //     setAuthedToken(authToken)
    // }, []);

    const state = useSelector(state => state.handleCart)

    console.log("token =", token);

    const logout = () => {
        sessionStorage.removeItem('Auth Token')
        // setAuthedToken('')
    }
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Bukapedia</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {token === '1' ? (
                        <div className="buttons text-center">
                            <NavLink to="/" className="btn btn-outline-dark m-2">Home</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark m-2">Cart ({state.length}) </NavLink>
                            <NavLink to="/login" className="btn btn-outline-dark m-2" onClick={logout}>Logout</NavLink>
                            {/* <p>ini client</p> */}
                        </div>
                    ) : token === '2' ? (
                        <div className="buttons text-center">
                            <NavLink to="/" className="btn btn-outline-dark m-2">Home</NavLink>
                            <NavLink to="/cart" className="btn btn-outline-dark m-2">Rekap Penjualan </NavLink>
                            <NavLink to="/login" className="btn btn-outline-dark m-2" onClick={logout}>Logout</NavLink>
                            {/* <p>ini admin</p> */}
                        </div>
                    )
                    :   (
                        <div className="buttons text-center">
                            <NavLink to="/" className="btn btn-outline-dark m-2">Home</NavLink>
                            <NavLink to="/login" className="btn btn-outline-dark m-2">Login</NavLink>
                            {/* <p>belum login</p> */}
                        </div>
                    )}
                    
                </div>


            </div>
        </nav>
    )
}

export default Navbar