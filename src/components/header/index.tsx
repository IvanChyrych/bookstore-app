import React from 'react'
import { NavLink } from 'react-router-dom'
import { SearchForm } from '../search-form'
import { ShoppingCartCounter } from '../shopping-cart-counter'

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid w-75">
                <NavLink className='nav-link' to='/'>
                <div className="navbar-brand">Bookstore</div>
                </NavLink>
                <div className="navbar-nav flex-row">
                    <NavLink className='nav-link px-2' to='/books/favourites'>Favourites</NavLink>
                </div>
                <SearchForm/>
                <ShoppingCartCounter/>
              
            </div>
        </nav>
)}