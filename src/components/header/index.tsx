import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '../search-form'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className='nav-link' to='/'>
                <a className="navbar-brand">Navbar</a>
                </NavLink>
                <div className="navbar-nav flex-row">
                    <NavLink className='nav-link px-2' to='/books/favourites'>Favourites</NavLink>
                    <a className='nav-link px-2' href="">lore2</a>
                    <a className='nav-link px-2' href="">lore2</a>
                    <a className='nav-link px-2' href="">lore2</a>
                </div>
                <SearchForm/>
              
            </div>
        </nav>
)}