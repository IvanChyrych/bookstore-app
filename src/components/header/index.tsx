import React from 'react'
import { NavLink } from 'react-router-dom'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <div className="navbar-nav flex-row">
                    <NavLink className='nav-link px-2' to='/books/favourites'>Favourites</NavLink>
                    <a className='nav-link px-2' href="">lore2</a>
                    <a className='nav-link px-2' href="">lore2</a>
                    <a className='nav-link px-2' href="">lore2</a>
                </div>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
)}