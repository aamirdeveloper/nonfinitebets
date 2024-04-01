import React from 'react'

import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'
import { Link, useNavigate } from 'react-router-dom'


const Profile = () => {

    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('userToken')
        navigate('/')
    }

    return (
        <>
            <Headers />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">

                    <Sidebar />

                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="padding pt-0">
                                <nav className="nav flex-column nav-settings-mob">
                                    <Link className="nav-link" to="#"><i className="fa-solid fa-wallet" /> Wallet <i className="fa-solid fa-chevron-right" /></Link>
                                    <Link className="nav-link" to="/referral-program"><i className="fa-solid fa-star" /> Referral program <i className="fa-solid fa-chevron-right" /></Link>
                                    <Link className="nav-link" to="/settings"><i className="fa-solid fa-gear" /> Settings <i className="fa-solid fa-chevron-right" /></Link>
                                    <Link className="nav-link" to="#"><i className="fa-solid fa-headset" /> Online support <i className="fa-solid fa-chevron-right" /></Link>
                                    <Link className="nav-link" to="/" onClick={Logout}><i className="fa-solid fa-arrow-right-from-bracket" /> Log out <i className="fa-solid fa-chevron-right" /></Link>
                                </nav>
                            </div>
                        </div>

                        <Footer />

                    </div>
                </div>
            </div>

            <BottomMenu />
        </>
    )
}

export default Profile
