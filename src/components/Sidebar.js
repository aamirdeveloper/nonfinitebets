import React from 'react'
import { BsGridFill } from 'react-icons/bs'
import { FaArrowRight, FaPlayCircle, FaRegFutbol, FaTableTennis, FaTrophy } from 'react-icons/fa'
import { TbAirBalloon } from "react-icons/tb";
import { FaBaseball, FaBasketball } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    
    return (
        <>
            <nav className="sidebar sidebar-offcanvas scrollbar" id="sidebar">
                <ul className="nav">
                    {/* <li class="nav-item nav-profile">
                    <NavLink to="/" class="nav-link">
                        <div class="nav-profile-image">
                        <img src={`${process.env.PUBLIC_URL}/images/face1.jpg`} alt="profile">
                        <span class="login-status online"></span>
                        </div>
                        <div class="nav-profile-text d-flex flex-column">
                        <span class="font-weight-bold mb-2">David Grey. H</span>
                        <span class="text-secondary text-small">Project Manager</span>
                        </div>
                        <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                    </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">
                            <BsGridFill className="menu-icon" />
                            <span className="menu-title">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/live-events">
                            <FaPlayCircle className="menu-icon" />
                            <span className="menu-title">Live Events</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <hr className="hr1 m-0" />
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <FaTrophy className="menu-icon" />
                            <span className="menu-title">Sports</span>
                            <MdKeyboardArrowUp className="menu-arrow up" />
                            <MdKeyboardArrowDown className="menu-arrow down" />
                        </Link>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link" to="/single-match"><FaArrowRight className="sports-arrow" /> Sports 1</NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to="/single-match"><FaArrowRight className="sports-arrow" /> Sports 2</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Soccer">
                            <FaRegFutbol className="menu-icon" />
                            <span className="menu-title">Soccer</span>
                            <span className="lbl">21</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Tennis">
                            <FaTableTennis className="menu-icon" />
                            <span className="menu-title">Tennis</span>
                            <span className="lbl">19</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Cricket">
                            <FaBaseball className="menu-icon" />
                            <span className="menu-title">Cricket</span>
                            <span className="lbl">123</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Basketball">
                            <FaBasketball className="menu-icon" />
                            <span className="menu-title">Basketball</span>
                            <span className="lbl">8</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Baseball">
                            <FaBaseball className="menu-icon" />
                            <span className="menu-title">Baseball</span>
                            <span className="lbl">34</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Badminton">
                            <TbAirBalloon className="menu-icon airballoon" />
                            <span className="menu-title">Badminton</span>
                            <span className="lbl">8</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar
