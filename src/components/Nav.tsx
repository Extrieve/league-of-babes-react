import React, { FC, ReactElement } from 'react';

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
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/champions">Champions</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/match">Match</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/create">Create</a>
            </li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav