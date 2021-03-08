import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
const Navbar = () => {
    return (
        <>
            <div style={{textAlign:"center"}}>
            <img style={{width:"12rem"}} src={logo} alt=""/>
            </div>
            <div className="bg-dark p-3 text-center">
            <Link className="p-3 m-3 text-light" to="/home">Home</Link>
            <Link className="p-3 m-3 text-light" to="/review">Review-Order</Link>
            <Link className="p-3 m-3 text-light" to="/inventory">Inventory</Link>
        </div>
        <div className="text-center p-3 bg-secondary">
        <input className=" py-1 mr-2" type="text"/>
        <button className="btn btn-primary"><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
        </>
    );
};

export default Navbar;