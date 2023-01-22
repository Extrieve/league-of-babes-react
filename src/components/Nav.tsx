import React, { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

type NavProps = {
}

const Nav : FC<NavProps> = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">League of Babes</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/champions">Champions</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/match">Match</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/create">Create</NavLink>
            </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav