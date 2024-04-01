import React from 'react'

import { BsGridFill, BsSearch } from "react-icons/bs";
import { FaListAlt, FaTrophy, FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const BottomMenu = () => {
    return (
        <>
            <div className="mobile-bottom-menu d-block d-lg-none">
                <ul className="nav flex-nowrap">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">
                            <BsGridFill />
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search">
                            <BsSearch />
                            Browse
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/live-events">
                            <FaListAlt />
                            Bets
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/live-events">
                            <FaTrophy />
                            Sports
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/profile">
                            <FaUser />
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default BottomMenu
