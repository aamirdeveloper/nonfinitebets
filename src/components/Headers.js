import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill, BsPlusLg } from 'react-icons/bs';

import { FaFacebook, FaGoogle, FaHeadset, FaRegCopy, FaStar, FaTwitch, FaWallet } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SigninValidation from '../validations/SigninValidation';
import SignupValidation from '../validations/SignupValidation';
import { IoIosArrowDown } from 'react-icons/io';
import { FaArrowRightFromBracket, FaGear } from 'react-icons/fa6';
import { useAllContext } from '../context/AllContext';

const Headers = () => {

  const navigate = useNavigate()
  const userToken = JSON.parse(localStorage.getItem('userToken'))
  const isLoggedin = localStorage.getItem('userToken')

  const { getUserGamesDetails, userGamesDetails } = useAllContext()

  const [showPasswords, setShowPasswords] = useState([false, false]);
  const [signinActive, setSigninActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  // const [signupNextActive, setSignupNextActive] = useState(false);

  const [inputValue, setInputValue] = useState({
      email: "",
      password: ""
  });
  const [errors, setErrors] = useState({});

  const [inputValue2, setInputValue2] = useState({
      name: "",
      email: "",
      password: ""
  });
  const [errors2, setErrors2] = useState({});

  const handleTogglePasswordVisibility = (index) => {
    const newShowPasswords = [...showPasswords];
    newShowPasswords[index] = !newShowPasswords[index];
    setShowPasswords(newShowPasswords);
  };

  const signinBtn = () => {
    setSigninActive(true)
    setSignupActive(false)
    
  }
  const signupBtn = () => {
    setSignupActive(true)
    setSigninActive(false)
  }

  // const signupNext = () => {
  //   setSignupNextActive(true)
  // }

  const inputHandler = (e) => {
    const {name, value} = e.target;

    setInputValue({
      ...inputValue,
      [name] : value
    })
  }

  const formSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
        email: inputValue.email,
        password: inputValue.password
    }

    try {
      const resp = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, loginData)
      const data = await resp.data

      setErrors(SigninValidation(inputValue));

      if (loginData.email && loginData.password) {
        if(data.status == '0'){
          toast.error(data.message)
        }
      }

      if(data.status == 1){
        toast.success(data.message)
        document.getElementById('authModal').querySelector('.btn-close').click();
        localStorage.setItem('userToken', JSON.stringify(data))
        navigate('/dashboard')
      }
      
      
    } catch (error) {
      console.log('Error:', error);
    }

  }

  const inputHandlerSignup = (e) => {
    const {name, value} = e.target;

    setInputValue2({
      ...inputValue2,
      [name] : value
    })
  }
  
  const formSubmitSignup = async (e) => {
    e.preventDefault();

    const signupData = {
        name: inputValue2.name,
        email: inputValue2.email,
        password: inputValue2.password
    }

    try {
      const resp = await axios.post(`${process.env.REACT_APP_API_URL}/register`, signupData)
      const data = await resp.data

      setErrors2(SignupValidation(inputValue2));


      if(data.message == 'Email already exists'){
        toast.error(data.message)
      }

      if(data.status == 1){
        toast.success(data.message)
        document.getElementById('authModal').querySelector('.btn-close').click();
        localStorage.setItem('userToken', JSON.stringify({...data.post, token: data.token}))
        navigate('/dashboard')
      }
      
      
    } catch (error) {
      console.log('Error:', error);
    }

  }

  const Logout = () => {
    localStorage.removeItem('userToken')
    navigate('/')
  }

  useEffect(() => {
    if (isLoggedin) {
      getUserGamesDetails(userToken)
    }
  }, [])
  

  


  return (
    <>
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <NavLink className="navbar-brand brand-logo" to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" /></NavLink>
          <NavLink className="navbar-brand brand-logo-mini" to="/"><img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="logo" /></NavLink>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
          {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="mdi mdi-menu"></span>
          </button> */}
          {/* <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group">
                <div className="input-group-prepend bg-transparent">
                  <i className="input-group-text border-0 mdi mdi-magnify"></i>
                </div>
                <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects">
              </div>
            </form>
          </div> */}
          <ul className="navbar-nav navbar-nav-right">
            {
              isLoggedin ?
              <>
                <li className="nav-item nav-profile dropdown nav-usdt dropdown-01 position-relative">
                  <a href="#" className="nav-link" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="nav-profile-img">
                      <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" />
                    </div>
                    <div className="nav-profile-text me-1">
                      <p className="mb-1 fs-10 text-white-50">SXUSDT</p>
                      {userGamesDetails.data && <p className="mb-0">${userGamesDetails.data.userBalance}</p>}
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
                    {/* <div className="nav-profile-text">
                                    <p className="mb-1 text-black">David Greymaax</p>
                                    </div> */}
                  </a>
                  <div className="dropdown-menu navbar-dropdown dropdown-menu-end" aria-labelledby="profileDropdown">
                    <NavLink className="dropdown-item" to="/wallet"><FaWallet /> Wallet</NavLink>
                    <NavLink className="dropdown-item" to="/referral-program"><FaStar /> Referral program</NavLink>
                    <NavLink className="dropdown-item" to="/settings"><FaGear /> Settings</NavLink>
                    <NavLink className="dropdown-item" to="/online-support"><FaHeadset /> Online support</NavLink>
                    <Link className="dropdown-item" to="/" onClick={Logout}><FaArrowRightFromBracket /> Log out</Link>
                  </div>
                </li>
              </>
              :  
              <>
                <li className="nav-item">
                  <button className="btn btn1" data-bs-toggle="modal" data-bs-target="#authModal" data-bs-tab="login" onClick={signinBtn} style={{ background: 'transparent', minWidth: 'auto', padding: '12px 24px' }}>Sign In</button>
                </li>
                <li className="nav-item ms-2">
                  <button className="btn btn1" data-bs-toggle="modal" data-bs-target="#authModal" data-bs-tab="signup" onClick={signupBtn} style={{ padding: '12px 24px' }}>Register</button>
                </li>
              </>
            }
            

            {/* <li className="nav-item d-none d-lg-block full-screen-link">
              <NavLink className="nav-link">
                <i className="mdi mdi-fullscreen" id="fullscreen-button"></i>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link count-indicator dropdown-toggle" id="messageDropdown" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="mdi mdi-email-outline"></i>
                <span className="count-symbol bg-warning"></span>
              </NavLink>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <h6 className="p-3 mb-0">Messages</h6>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/images/face4.jpg`} alt="image" className="profile-pic">
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
                    <p className="text-gray mb-0"> 1 Minutes ago </p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/images/face2.jpg`} alt="image" className="profile-pic">
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
                    <p className="text-gray mb-0"> 15 Minutes ago </p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/images/face3.jpg`} alt="image" className="profile-pic">
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
                    <p className="text-gray mb-0"> 18 Minutes ago </p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center">4 new messages</h6>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" to="#" data-bs-toggle="dropdown">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </NavLink>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <h6 className="p-3 mb-0">Notifications</h6>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      <i className="mdi mdi-calendar"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Event today</h6>
                    <p className="text-gray ellipsis mb-0"> Just a reminder that you have an event today </p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className="mdi mdi-settings"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Settings</h6>
                    <p className="text-gray ellipsis mb-0"> Update dashboard </p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      <i className="mdi mdi-link-variant"></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="preview-subject font-weight-normal mb-1">Launch Admin</h6>
                    <p className="text-gray ellipsis mb-0"> New admin wow! </p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <h6 className="p-3 mb-0 text-center">See all notifications</h6>
              </div>
            </li>
            <li className="nav-item nav-logout d-none d-lg-block">
              <NavLink className="nav-link" to="#">
                <i className="mdi mdi-power"></i>
              </NavLink>
            </li>
            <li className="nav-item nav-settings d-none d-lg-block">
              <NavLink className="nav-link" to="#">
                <i className="mdi mdi-format-line-spacing"></i>
              </NavLink>
            </li> */}
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="mdi mdi-menu" />
          </button>
        </div>
      </nav>

      {/* Authentication Modal */}
      <div className="modal fade modal-01" id="authModal" tabIndex={-1} aria-labelledby="authModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '864px' }}>
          <div className="modal-content">
            {/* <div className="modal-header">
                  <h5 className="modal-title" id="authModalLabel">Authentication</h5>
                </div> */}
            <button type="button" className="btn-close visually-hidden" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="modal-body px-3 py-0">
              <div className="row gx-4 gy-3">
                <div className="col-md-5 col-12 py-3 d-none d-md-block">
                  <img src={`${process.env.PUBLIC_URL}/images/img2.png`} alt="" className="img-fluid w-100" />
                </div>
                <div className="col-md-7 col-12 pb-3">
                  <ul className="nav nav-tabs tab-login" id="authTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className={`nav-link ${signinActive ? 'active' : ''}`} id="login-tab" data-bs-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected={`${signinActive ? 'true' : 'false'}`}>Login</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className={`nav-link ${signupActive ? 'active' : ''}`} id="signup-tab" data-bs-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected={`${signupActive ? 'true' : 'false'}`}>Signup</a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/* Login Tab */}
                    <div className={`tab-pane fade ${signinActive ? 'show active' : ''}`} id="login" role="tabpanel" aria-labelledby="login-tab">
                      {/* Login Form Content */}
                      <form className="form form1" onSubmit={formSubmit}>
                        <div className="mb-3">
                          <input type="text" className="form-control text-uppercase" placeholder="Email" value={inputValue.email} name="email" onChange={inputHandler}/>
                          {errors.email && <p className="error-text ms-4">{errors.email}</p>}
                        </div>
                        <div className="mb-3">
                          <div className="icon-box">
                            <input type={showPasswords[1] ? 'text' : 'password'} id="password" className="form-control text-uppercase" placeholder="Password" value={inputValue.password} name="password" onChange={inputHandler} />
                            {errors.password && <p className="error-text ms-4">{errors.password}</p>}
                            <NavLink className="icon" id="toggleIcon" onClick={() => handleTogglePasswordVisibility(1)}>
                              {
                                showPasswords[1] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                              }
                            </NavLink>
                          </div>
                        </div>
                        {/* <div className="mb-3">
                          <div className="form-switch">
                            <input className="form-check-input" type="checkbox" id="formSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="formSwitchCheckDefault">Stay signed in</label>
                          </div>
                        </div> */}
                        <button type="submit" className="btn btn1 w-100 mt-4">Log In</button>
                      </form>
                      <div className="or my-4 text-center">
                        <p className="mb-0 fs-12">or</p>
                      </div>
                      <div className="social s-border text-center">
                        <NavLink to="#" style={{ color: '#1877F2' }}><FaFacebook /></NavLink>
                        <NavLink to="#" style={{ color: '#9C40FF' }}><FaTwitch /></NavLink>
                        <NavLink to="#" style={{ color: '#FF3D00' }}><FaGoogle /></NavLink>
                      </div>
                    </div>
                    {/* Signup Tab */}
                    <div className={`tab-pane fade ${signupActive ? 'show active' : ''}`} id="signup" role="tabpanel" aria-labelledby="signup-tab">
                      {/* Signup Form Content */}
                      {/* <nav className="tab-02 mb-3 w-100">
                        <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                          <button className={`nav-link w-100 active`} id="nav-tabSignup-1">
                          </button>
                          <button className={`nav-link w-100 ${signupNextActive ? 'active': ''}`} id="nav-tabSignup-2">
                          </button>
                        </div>
                      </nav> */}
                      <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                        <div className={`tab-pane fade active show`} id="nav-signup-1" role="tabpanel" aria-labelledby="nav-tab-1">
                          <form className="form form1" onSubmit={formSubmitSignup}>
                            <div className="mb-3">
                              <input type="text" className="form-control text-uppercase" placeholder="Nickname" value={inputValue2.name} name="name" onChange={inputHandlerSignup}/>
                              {errors2.name && <p className="error-text ms-4">{errors2.name}</p>}
                              <p className="mb-0 mt-2 fs-12 text-white-50">Username must be 3-14 characters long</p>
                            </div>
                            <div className="mb-3">
                              <input type="text" className="form-control text-uppercase" placeholder="Email" value={inputValue2.email} name="email" onChange={inputHandlerSignup}/>
                              {errors2.email && <p className="error-text ms-4">{errors2.email}</p>}
                            </div>
                            <div className="mb-3">
                              <div className="icon-box">
                                <input type={showPasswords[2] ? 'text' : 'password'} id="password2" className="form-control text-uppercase" placeholder="Password" value={inputValue2.password} name="password" onChange={inputHandlerSignup} />
                                {errors2.password && <p className="error-text ms-4">{errors2.password}</p>}
                                <NavLink className="icon" id="toggleIcon2" onClick={() => handleTogglePasswordVisibility(2)}>
                                  {
                                    showPasswords[2] ? <BsFillEyeSlashFill /> : <BsFillEyeFill />
                                  }
                                </NavLink>
                              </div>
                            </div>
                            {/* <div className="mb-3">
                              <div className="form-switch">
                                <input className="form-check-input" type="checkbox" id="formSwitchCheckDefault2" />
                                <label className="form-check-label" htmlFor="formSwitchCheckDefault2">Stay signed in</label>
                              </div>
                            </div> */}
                            <button type="submit" id="signup-btn-next" className="btn btn1 w-100 mt-4">Continue</button>
                          </form>
                        </div>

                        {/* <div className={`tab-pane fade ${signupNextActive ? 'active show': ''}`} id="nav-signup-2" role="tabpanel" aria-labelledby="nav-tab-2">
                          <form className="form form1">
                            <div className="row g-2">
                              <div className="col-4">
                                <div className="mb-3">
                                  <input type="text" className="form-control text-uppercase" placeholder="DD" />
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="mb-3">
                                  <select className="form-select" aria-label="Default select">
                                    <option selected>Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-4">
                                <div className="mb-3">
                                  <input type="text" className="form-control text-uppercase" placeholder="YYYY" />
                                </div>
                              </div>
                            </div>
                            <button type="submit" className="btn btn1 w-100 mt-4">Continue</button>
                          </form>
                        </div> */}
                      </div>
                      <div className="or my-4 text-center">
                        <p className="mb-0 fs-12">or</p>
                      </div>
                      <div className="social s-border text-center">
                        <NavLink to="#" style={{ color: '#1877F2' }}><FaFacebook /></NavLink>
                        <NavLink to="#" style={{ color: '#9C40FF' }}><FaTwitch /></NavLink>
                        <NavLink to="#" style={{ color: '#FF3D00' }}><FaGoogle /></NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal modal-01 fade" id="depositModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '700px' }}>
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/bitcoin.png`} style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/bnb.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/eth.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/axie.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/hifi.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/pancake.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/ftx.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                            <img src={`${process.env.PUBLIC_URL}/images/icons/polygon.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid ms-1" />
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
                        <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" style={{ width: '25px', height: '25px' }} className="img-fluid" />
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
                      <div className="card-02" style={{ background: 'rgb(255 255 255 / 8%)' }}>
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

export default Headers
