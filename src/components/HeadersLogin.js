import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { FaHeadset, FaRegCopy, FaStar, FaWallet } from 'react-icons/fa'
import { FaArrowRightFromBracket, FaGear } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const HeadersLogin = () => {
    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('userToken')
        navigate('/')
    }

    return (
        <>
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <NavLink className="navbar-brand brand-logo" to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></NavLink>
                    <NavLink className="navbar-brand brand-logo-mini" to="/"><img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="logo" /></NavLink>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    {/* <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span class="mdi mdi-menu"></span>
                    </button> */}
                                {/* <div class="search-field d-none d-md-block">
                        <form class="d-flex align-items-center h-100" action="#">
                        <div class="input-group">
                            <div class="input-group-prepend bg-transparent">
                            <i class="input-group-text border-0 mdi mdi-magnify"></i>
                            </div>
                            <input type="text" class="form-control bg-transparent border-0" placeholder="Search projects">
                        </div>
                        </form>
                    </div> */}
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item nav-profile dropdown nav-usdt dropdown-01 position-relative">
                            <a href="#" className="nav-link" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" />
                                </div>
                                <div className="nav-profile-text me-1">
                                    <p className="mb-1 fs-10 text-white-50">SXUSDT</p>
                                    <p className="mb-0">$0</p>
                                </div>
                                <IoIosArrowDown className='ms-2' />
                            </a>
                            <div className="dropdown-menu navbar-dropdown dropdown-menu-end" aria-labelledby="profileDropdown">
                                <div className="brracas-central">
                                    <div className="align-items-center d-flex mb-2">
                                        <div className="me-2">
                                            <div className="d-flex">
                                                <div className="central-images">
                                                    <img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid" />
                                                </div>
                                                <div className="central-images">
                                                    <img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100">
                                            <p className="mb-0 fs-14">Brracas Central</p>
                                            <p className="mb-0 fs-14">Argentinos Juniors</p>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="badge live px-2 py-1" style={{ background: 'rgb(255 199 0 / 20%)', color: '#ffc700' }}>Any teams</span>
                                        <span className="badge live px-2 py-1" style={{ background: 'rgb(235 0 255 / 20%)', color: '#eb00ff' }}>Online Seasons</span>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="me-2 w-50">
                                            <p className="mb-0 text-white-75"><img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '20px' }} /> 120,00</p>
                                        </div>
                                        <div className="w-50 text-end">
                                            <p className="fs-14 mb-0"><span>Time to Play:</span> <span className="badge dark ms-1 px-2 py-1">59:40</span></p>
                                        </div>
                                    </div>
                                    <button className="btn btn1 w-100 mt-3">Accept</button>
                                </div>
                            </div>
                            <Link className="icon-box">
                                <div className="icon" data-bs-toggle="modal" data-bs-target="#depositModal">
                                    <BsPlusLg />
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item nav-profile dropdown d-lg-block d-none">
                            <a className="nav-link" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="nav-profile-img">
                                    <img src={`${process.env.PUBLIC_URL}/images/user.png`} alt="image" />
                                </div>
                                <IoIosArrowDown className='ms-2' />
                                {/* <div class="nav-profile-text">
                                <p class="mb-1 text-black">David Greymaax</p>
                                </div> */}
                            </a>
                            <div className="dropdown-menu navbar-dropdown dropdown-menu-end" aria-labelledby="profileDropdown">
                                <NavLink className="dropdown-item" to="/wallet"><FaWallet /> Wallet</NavLink>
                                <NavLink className="dropdown-item" to="/referral-program"><FaStar /> Referral program</NavLink>
                                <NavLink className="dropdown-item" to="/settings"><FaGear /> Settings</NavLink>
                                <NavLink className="dropdown-item" to="/online-support"><FaHeadset /> Online support</NavLink>
                                <NavLink className="dropdown-item" to="/" onClick={Logout}><FaArrowRightFromBracket /> Log out</NavLink>
                            </div>
                        </li>
                        {/* <li class="nav-item d-none d-lg-block full-screen-link">
                            <a class="nav-link">
                                <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
                            </a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="mdi mdi-email-outline"></i>
                                <span class="count-symbol bg-warning"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <h6 class="p-3 mb-0">Messages</h6>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/`}faces/face4.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                                    <p class="text-gray mb-0"> 1 Minutes ago </p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/`}faces/face2.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                                    <p class="text-gray mb-0"> 15 Minutes ago </p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/`}faces/face3.jpg" alt="image" class="profile-pic">
                                </div>
                                <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                                    <p class="text-gray mb-0"> 18 Minutes ago </p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <h6 class="p-3 mb-0 text-center">4 new messages</h6>
                            </div>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                                <i class="mdi mdi-bell-outline"></i>
                                <span class="count-symbol bg-danger"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <h6 class="p-3 mb-0">Notifications</h6>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-success">
                                    <i class="mdi mdi-calendar"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="preview-subject font-weight-normal mb-1">Event today</h6>
                                    <p class="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-warning">
                                    <i class="mdi mdi-settings"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="preview-subject font-weight-normal mb-1">Settings</h6>
                                    <p class="text-gray ellipsis mb-0"> Update dashboard </p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-info">
                                    <i class="mdi mdi-link-variant"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                    <h6 class="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                                    <p class="text-gray ellipsis mb-0"> New admin wow! </p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <h6 class="p-3 mb-0 text-center">See all notifications</h6>
                            </div>
                            </li>
                            <li class="nav-item nav-logout d-none d-lg-block">
                            <a class="nav-link" href="#">
                                <i class="mdi mdi-power"></i>
                            </a>
                            </li>
                            <li class="nav-item nav-settings d-none d-lg-block">
                            <a class="nav-link" href="#">
                                <i class="mdi mdi-format-line-spacing"></i>
                            </a>
                            </li> */}
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu" />
                    </button>
                </div>
            </nav>

            {/* Modal */}
            <div className="modal modal-01 fade" id="depositModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" style={{maxWidth: '700px'}}>
                <div className="modal-content">
                    <div className="modal-body">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    <div className="row g-4">
                        <div className="col-md-5 col-12 d-none d-md-block">
                        <div className="select-payment mt-5 mt-md-0">
                            <p className="fw-600">Select payment method</p>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="payment1" defaultChecked />
                            <label className="form-check-label" htmlFor="payment1">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by Thether</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault2" />
                            <label className="form-check-label" htmlFor="formRadioDefault2">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by Bitcoin</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/bitcoin.png`} style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault3" />
                            <label className="form-check-label" htmlFor="formRadioDefault3">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by BNB</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/bnb.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault4" />
                            <label className="form-check-label" htmlFor="formRadioDefault4">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by Ethereum</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/eth.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault5" />
                            <label className="form-check-label" htmlFor="formRadioDefault5">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by Axie</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/axie.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault6" />
                            <label className="form-check-label" htmlFor="formRadioDefault6">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by HiFi</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/hifi.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault7" />
                            <label className="form-check-label" htmlFor="formRadioDefault7">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by Pancake</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/pancake.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault8" />
                            <label className="form-check-label" htmlFor="formRadioDefault8">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by FTX</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/ftx.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                            <div className="form-check card-02 mt-0 mb-1">
                            <input className="form-check-input" type="radio" name="radioDefault" id="formRadioDefault9" />
                            <label className="form-check-label" htmlFor="formRadioDefault9">
                                <div className="d-flex align-items-center">
                                <div className="w-100 me-2">
                                    <p className="mb-0 fw-500">Deposit by Polygon</p>
                                </div>
                                <div>
                                    <img src={`${process.env.PUBLIC_URL}/images/icons/polygon.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid ms-1" />
                                </div>
                                </div>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-7 col-12">
                        <h1 className="display-3 fw-bold mt-md-4 mb-3">Deposit <br /> money</h1>
                        <div className="mb-3 form form1">
                            <div className="icon-box-right label-txt">
                            <select className="form-select" aria-label="Default select">
                                <option selected>TRC 20</option>
                                <option selected>TRC 21</option>
                                <option selected>TRC 22</option>
                                <option selected>TRC 23</option>
                                <option selected>TRC 24</option>
                                <option selected>TRC 25</option>
                            </select>
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" style={{width: '25px', height: '25px'}} className="img-fluid" />
                            </div>
                            <span className="lbl-txt text-white-50">Select network</span>
                            </div>
                        </div>
                        <div className="d-flex flex-nowrap g-4 align-items-center mb-3">
                            <div className="me-4">
                            <h5 className="mb-2">Your BTC deposit address </h5>
                            <p className="mb-0 text-white-70">This address accepts only BTC</p>
                            </div>
                            <div className>
                            <div className="card-02" style={{background: 'rgb(255 255 255 / 8%)'}}>
                                <img src={`${process.env.PUBLIC_URL}/images/qr.png`} alt="" className="img-fluid" />
                            </div>
                            </div>
                        </div>
                        <div className="copy-text mb-3">
                            <input type="text" defaultValue="bc1cghjnjjkjko0vgvb6689gvhbc1cghjnjjkjko0vgvb6689gvh" className="form-control" disabled />
                            <a href="#" className="icon"><FaRegCopy /></a>
                        </div>
                        <button className="btn btn1">Deposit</button>
                        <p className="mb-0 text-white-70 mt-3 fs-10">The minimum deposit amount 0.00005BTC, lower amount won’t be credited or refaunded</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default HeadersLogin
