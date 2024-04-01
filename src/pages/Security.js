import React, { useState } from 'react'

import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'

import { FaGear, FaXmark } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import { FaRegCopy } from 'react-icons/fa'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'


const Security = () => {
    const [showPasswords, setShowPasswords] = useState([false, false]);

    const handleTogglePasswordVisibility = (index) => {
        const newShowPasswords = [...showPasswords];
        newShowPasswords[index] = !newShowPasswords[index];
        setShowPasswords(newShowPasswords);
    };

    
    return (
        <>
            <div className='d-none d-lg-block'>
                <Headers />
            </div>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">

                    <Sidebar />

                    <div className="main-panel">
                        <div className="content-wrapper pb-0">
                            <div className="padding pt-0">
                                <h2 className="mb-3 d-none d-lg-block"><FaGear className="small me-2 text-white-50 align-middle" style={{ fontSize: '18px' }} /> Settings</h2>
                                <div className="setting-header d-flex d-lg-none justify-content-between setting-header">
                                    <div>
                                        <p className="mb-0 fs-14 fw-500"><FaGear className="small me-2 text-white-50 align-middle" style={{ fontSize: '18px' }} /> Settings</p>
                                    </div>
                                    <div>
                                        <p className="mb-0"><Link to="/profile"><FaXmark /></Link></p>
                                    </div>
                                </div>
                                <div className="row g-4">
                                    <div className="col-lg-3 col-12">
                                        <div className="card-02 px-0 d-none d-lg-block">
                                            <nav className="nav flex-column nav-settings">
                                                <NavLink to="/settings" className="nav-link">General</NavLink>
                                                <NavLink to="/security" className="nav-link">Security</NavLink>
                                            </nav>
                                        </div>
                                        <nav className="tab-02 mb-1 d-flex d-lg-none">
                                            <div className="nav nav-tabs flex-nowrap w-100" id="nav-tab" role="tablist">
                                                <NavLink to="/settings" className="nav-link w-50">General</NavLink>
                                                <NavLink to="/security" className="nav-link w-50">Security</NavLink>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="col-lg-9 col-12">
                                        <div className="card-02 p-sm-4">
                                            <h4>Password</h4>
                                            <hr className="hr1" />
                                            <form action className="form form1">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <div className="icon-box">
                                                                <input type={showPasswords[1] ? 'text' : 'password'} id="currentPass" className="form-control text-uppercase" placeholder="Current password" />
                                                                <a className="icon" id="toggleCurrentPass" onClick={() => handleTogglePasswordVisibility(1)}>
                                                                {
                                                                    showPasswords[1] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                                                                }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <div className="icon-box">
                                                            <input type={showPasswords[2] ? 'text' : 'password'} id="currentPass" className="form-control text-uppercase" placeholder="Current password" />
                                                                <a className="icon" id="toggleCurrentPass" onClick={() => handleTogglePasswordVisibility(2)}>
                                                                {
                                                                    showPasswords[2] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                                                                }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <div className="icon-box">
                                                                <input type={showPasswords[3] ? 'text' : 'password'} id="currentPass" className="form-control text-uppercase" placeholder="Current password" />
                                                                <a className="icon" id="toggleCurrentPass" onClick={() => handleTogglePasswordVisibility(3)}>
                                                                {
                                                                    showPasswords[3] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                                                                }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <button className="btn btn1">Change Password</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-02 p-sm-4 mt-4">
                                            <h4>2FA</h4>
                                            <p className="text-white-50">For added security on your account, do not disable two-factor authentication.</p>
                                            <hr className="hr1" />
                                            <form action className="form form1">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <p className="text-white-50 fs-12 mb-2">Copy this code into your authentication app</p>
                                                            <div className="copy-text mb-3">
                                                                <input type="text" defaultValue="bc1cghjnjjkjko0vgvb6689gvhbc1cghjnjjkjko0vgvb6689gvh" className="form-control" disabled />
                                                                <a href="#" className="icon"><FaRegCopy /></a>
                                                            </div>
                                                            <p className="text-white-50 fs-12 mb-0 mt-2">Do not show this code to anyone!</p>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <div className="card-02 d-inline-block" style={{ background: 'rgb(255 255 255 / 8%)' }}>
                                                                <img src={`${process.env.PUBLIC_URL}/images/qr.png`} alt="" className="img-fluid" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <div className="icon-box">
                                                                <input type={showPasswords[4] ? 'text' : 'password'} id="currentPass" className="form-control text-uppercase" placeholder="Current password" />
                                                                <a className="icon" id="toggleCurrentPass" onClick={() => handleTogglePasswordVisibility(4)}>
                                                                {
                                                                    showPasswords[4] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                                                                }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <div className="icon-box">
                                                                <input type={showPasswords[5] ? 'text' : 'password'} id="currentPass" className="form-control text-uppercase" placeholder="Current password" />
                                                                <a className="icon" id="toggleCurrentPass" onClick={() => handleTogglePasswordVisibility(5)}>
                                                                {
                                                                    showPasswords[5] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                                                                }
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <button className="btn btn1">Send</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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

export default Security
