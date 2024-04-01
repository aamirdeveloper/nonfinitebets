import React from 'react'

import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'
import { Link } from 'react-router-dom'
import { FaBars, FaChartLine, FaChevronLeft, FaMicrophone, FaSquare, FaTshirt, FaUsers } from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'


const SingleMatch = () => {
    return (
        <>
            <Headers />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">

                    <Sidebar />

                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="pagination-1">
                                <div className="d-flex mb-3">
                                    <div className="me-2">
                                        <Link to="/live-events" className="back-page"><FaChevronLeft /></Link>
                                    </div>
                                    <nav className="scrollbar tab-01">
                                        <div className="nav nav-tabs flex-nowrap mb-1" id="nav-tab" role="tablist">
                                            <button className="nav-link" type="button"><span className="txt">Football</span></button>
                                            <button className="nav-link" type="button"><span className="txt">Argentina</span></button>
                                            <button className="nav-link" type="button"><span className="txt">Super League Cup</span></button>
                                            <button className="nav-link text-white-50" type="button"><span className="txt">BAR - ARG</span></button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="padding pt-0">
                                <div className="row g-3">
                                    <div className="col-xl-8 col-12 order-1 order-lg-0">
                                        <div className="game-bg mb-3 d-none d-lg-block" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/img3.png)` }}>
                                            <div className="overlay">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>3<span className="text-white-50">'</span></th>
                                                                <th className="text-white-50">1st Half</th>
                                                                <th className="text-center"><FaChartLine /></th>
                                                                <th className="text-center"><FaSquare className='text-yellow' /></th>
                                                                <th className="text-center"><FaSquare className='text-red' /></th>
                                                                <th className="text-white-50">1st</th>
                                                                <th />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td />
                                                                <td>Brracas Central</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td />
                                                                <td>Argentinos Juniors</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="scrollbar mb-3">
                                            <nav className="tab-02 mb-1">
                                                <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-tab-1" data-bs-toggle="tab" data-bs-target="#nav-game-1" type="button" role="tab" aria-controls="nav-game-1" aria-selected="true">Basic</button>
                                                    <button className="nav-link" id="nav-tab-2" data-bs-toggle="tab" data-bs-target="#nav-game-2" type="button" role="tab" aria-controls="nav-game-2" aria-selected="false">Goals</button>
                                                    <button className="nav-link" id="nav-tab-3" data-bs-toggle="tab" data-bs-target="#nav-game-3" type="button" role="tab" aria-controls="nav-game-3" aria-selected="false">Half</button>
                                                    <button className="nav-link" id="nav-tab-4" data-bs-toggle="tab" data-bs-target="#nav-game-4" type="button" role="tab" aria-controls="nav-game-4" aria-selected="false">Asian lines</button>
                                                    <button className="nav-link" id="nav-tab-5" data-bs-toggle="tab" data-bs-target="#nav-game-5" type="button" role="tab" aria-controls="nav-game-5" aria-selected="false">Goal scores</button>
                                                    <button className="nav-link" id="nav-tab-6" data-bs-toggle="tab" data-bs-target="#nav-game-6" type="button" role="tab" aria-controls="nav-game-6" aria-selected="false">Corner</button>
                                                    <button className="nav-link" id="nav-tab-7" data-bs-toggle="tab" data-bs-target="#nav-game-7" type="button" role="tab" aria-controls="nav-game-7" aria-selected="false">Cards</button>
                                                    <button className="nav-link" id="nav-tab-8" data-bs-toggle="tab" data-bs-target="#nav-game-8" type="button" role="tab" aria-controls="nav-game-8" aria-selected="false">Special rate</button>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                            <div className="tab-pane fade active show" id="nav-game-1" role="tabpanel" aria-labelledby="nav-tab-1">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-3">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-3" aria-expanded="true" aria-controls="panelsStayOpen-collapse-3">
                                                                <div className="d-flex flex-wrap justify-content-between w-100 me-3">
                                                                    <div>Total</div>
                                                                    <div>
                                                                        <a href="#" className>Total</a>
                                                                        <a href="#" className="text-white-50 ms-2">All</a>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-3" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-3">
                                                            <div className="accordion-body">
                                                                <div className="row g-2 g-sm-3">
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <p className="fs-12 mb-2 text-center text-uppercase text-white-50">more</p>
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <p className="fs-12 mb-2 text-center text-uppercase text-white-50">less</p>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-4">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-4" aria-expanded="true" aria-controls="panelsStayOpen-collapse-4">
                                                                <div className="d-flex flex-wrap justify-content-between w-100 me-3">
                                                                    <div>Handicap</div>
                                                                    <div>
                                                                        <a href="#" className>Total</a>
                                                                        <a href="#" className="text-white-50 ms-2">All</a>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-4" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-4">
                                                            <div className="accordion-body">
                                                                <div className="row g-2 g-sm-3">
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <p className="fs-12 mb-2 text-center text-uppercase text-white-50">Barracas Central</p>
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">1.25</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.40</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <p className="fs-12 mb-2 text-center text-uppercase text-white-50">Argentinos Juniors</p>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">-0.75</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">-0.75</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">-0.75</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">-0.75</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="payment-box2 mt-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">-0.75</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">1.70</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-5">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-5" aria-expanded="true" aria-controls="panelsStayOpen-collapse-5">
                                                                Double chance
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-5" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-5">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">BAR or A.R.G</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">draw or A.R.G</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">BAR or draw</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-6">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-6" aria-expanded="true" aria-controls="panelsStayOpen-collapse-6">
                                                                1st goal
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-6" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-6">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">BAR</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">No one</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">A.R.G</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-7">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-7" aria-expanded="true" aria-controls="panelsStayOpen-collapse-7">
                                                                <div className="d-flex flex-wrap justify-content-between w-100 me-3">
                                                                    <div>Correct Score</div>
                                                                    <div>
                                                                        <a href="#" className>Slider</a>
                                                                        <a href="#" className="text-white-50 ms-2">All</a>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-7" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-7">
                                                            <div className="accordion-body">
                                                                <div className="row gy-3 gx-4 align-items-center">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <p className="fs-12 mb-2 text-center text-uppercase text-white-50">Barracas Central</p>
                                                                        <div className="range-box">
                                                                            <input type="range" className="form-range" min={0} max={4} step={1} id="customRange1" />
                                                                            <div className="d-flex justify-content-between">
                                                                                <p className="mb-0">0</p>
                                                                                <p className="mb-0">1</p>
                                                                                <p className="mb-0">2</p>
                                                                                <p className="mb-0">3</p>
                                                                                <p className="mb-0">4</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <p className="fs-12 mb-2 text-center text-uppercase text-white-50">Argentinos Juniors</p>
                                                                        <div className="range-box">
                                                                            <input type="range" className="form-range" min={0} max={4} step={1} id="customRange1" />
                                                                            <div className="d-flex justify-content-between">
                                                                                <p className="mb-0">0</p>
                                                                                <p className="mb-0">1</p>
                                                                                <p className="mb-0">2</p>
                                                                                <p className="mb-0">3</p>
                                                                                <p className="mb-0">4</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">0:0</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">4.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-8">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-8" aria-expanded="true" aria-controls="panelsStayOpen-collapse-8">
                                                                Both teams will score
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-8" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-8">
                                                            <div className="accordion-body">
                                                                <div className="row g-2 g-sm-3">
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Yes</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">No</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-9">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-9" aria-expanded="true" aria-controls="panelsStayOpen-collapse-9">
                                                                <div className="d-flex flex-wrap justify-content-between w-100 me-3">
                                                                    <div>After the first half/full time</div>
                                                                    <div>
                                                                        <a href="#" className>Choice</a>
                                                                        <a href="#" className="text-white-50 ms-2">All</a>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-9" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-9">
                                                            <div className="accordion-body">
                                                                <div className="row g-2 g-sm-3">
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <div className="payment-box2 px-0">
                                                                            <select name id className="form-select absolute bg-transparent border-0 form-control shadow-none" aria-label="Default select">
                                                                                <option value>BAR/BAR</option>
                                                                                <option value>BAR/BAR</option>
                                                                                <option value>BAR/BAR</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-6">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">BAR/BAR</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">5.75</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-2" role="tabpanel" aria-labelledby="nav-tab-2">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-2-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-2-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-2-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-2-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-2-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-2-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-2-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-2-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-2-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-2-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-3" role="tabpanel" aria-labelledby="nav-tab-3">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-3-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-3-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-3-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-3-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-3-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-3-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-3-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-3-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-3-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-3-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-4" role="tabpanel" aria-labelledby="nav-tab-4">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-4-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-4-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-4-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-4-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-4-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-4-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-4-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-4-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-4-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-4-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-5" role="tabpanel" aria-labelledby="nav-tab-5">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-5-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-5-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-5-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-5-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-5-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-5-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-5-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-5-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-5-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-5-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-6" role="tabpanel" aria-labelledby="nav-tab-6">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-6-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-6-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-6-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-6-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-6-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-6-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-6-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-6-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-6-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-6-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-7" role="tabpanel" aria-labelledby="nav-tab-7">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-7-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-7-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-7-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-7-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-7-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-7-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-7-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-7-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-7-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-7-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-game-8" role="tabpanel" aria-labelledby="nav-tab-8">
                                                <div className="mb-3 search-01">
                                                    <input type="text" placeholder="Search" className="form-control" />
                                                    <i className="fa-solid fa-magnifying-glass icon" />
                                                </div>
                                                <div className="accordion accordion-1" id="accordionPanelsStayOpenExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-8-1">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-8-1" aria-expanded="true" aria-controls="panelsStayOpen-collapse-8-1">
                                                                1x2
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-8-1" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-8-1">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Drow</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.65</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-4 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item mt-3">
                                                        <h2 className="accordion-header" id="panelsStayOpen-heading-9-2">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse-9-2" aria-expanded="true" aria-controls="panelsStayOpen-collapse-9-2">
                                                                There is no draw bet
                                                            </button>
                                                        </h2>
                                                        <div id="panelsStayOpen-collapse-9-2" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading-9-2">
                                                            <div className="accordion-body">
                                                                <div className="row g-3">
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Barracas Central</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">3.30</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 col-12">
                                                                        <div className="payment-box2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRates" aria-controls="offcanvasRight">
                                                                            <div className="d-flex justify-content-between">
                                                                                <div className="me-2 w-100">
                                                                                    <p className="mb-0 fw-500 ellipsis-1">Argentinos Juniors</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="mb-0 text-blue text-nowrap">2.35</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-12 match-sidebar">
                                        <div className="match-sidebar-box1 match1 align-items-center d-flex justify-content-around mb-3">
                                            <div className="text-center position-relative">
                                                <img src={`${process.env.PUBLIC_URL}/images/central5.png`} alt="" className="img-fluid img1 mb-2" />
                                                <p className="fw-500 mb-0 text-uppercase">BAR</p>
                                            </div>
                                            <div className="mx-2 text-center position-relative">
                                                <p className="fs-14 mb-2"><span className="badge dark ms-1 px-2 py-1">1 st <span className="mx-2">|</span> 03:53</span></p>
                                                <h1 className="mb-0">0 : 0</h1>
                                            </div>
                                            <div className="text-center position-relative">
                                                <img src={`${process.env.PUBLIC_URL}/images/central6.png`} alt="" className="img-fluid img1 mb-2" />
                                                <p className="mb-0 text-uppercase">A.R.G.</p>
                                            </div>
                                            <img src={`${process.env.PUBLIC_URL}/images/central5.png`} alt="" className="img-fluid img2" />
                                            <img src={`${process.env.PUBLIC_URL}/images/central6.png`} alt="" className="img-fluid img2 right" />
                                        </div>
                                        <div className="game-bg mb-3 d-block d-lg-none" style={{ backgroundImage: 'url("./assets/images/img3.png")' }}>
                                            <div className="overlay">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>3<span className="text-white-50">'</span></th>
                                                                <th className="text-white-50">1st Half</th>
                                                                <th className="text-center"><FaChartLine /></th>
                                                                <th className="text-center"><FaSquare className='text-yellow' /></th>
                                                                <th className="text-center"><FaSquare className='text-red' /></th>
                                                                <th className="text-white-50">1st</th>
                                                                <th />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td />
                                                                <td>Brracas Central</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                            </tr>
                                                            <tr>
                                                                <td />
                                                                <td>Argentinos Juniors</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                                <td className="text-center">0</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="match-sidebar-box1 match-diagram p-0 overflow-hidden mb-3 position-relative">
                                            <img src={`${process.env.PUBLIC_URL}/images/match2.png`} alt="" className="img-fluid w-100" />
                                            <p className="fs-14 mb-0 badge1"><span className="badge dark px-2 py-1">1 st <span className="mx-1">|</span> 03:53</span></p>
                                        </div>
                                        <div className="match-sidebar-box1 p-0 overflow-hidden mb-3">
                                            <nav className="tab-02 w-100">
                                                <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-tabCards-1" data-bs-toggle="tab" data-bs-target="#nav-cards-1" type="button" role="tab" aria-controls="nav-cards-1" aria-selected="true">
                                                        <FaChartSimple />
                                                    </button>
                                                    <button className="nav-link" id="nav-tabCards-2" data-bs-toggle="tab" data-bs-target="#nav-cards-2" type="button" role="tab" aria-controls="nav-cards-2" aria-selected="false">
                                                        <FaUsers />
                                                    </button>
                                                    <button className="nav-link" id="nav-tabCards-3" data-bs-toggle="tab" data-bs-target="#nav-cards-3" type="button" role="tab" aria-controls="nav-cards-3" aria-selected="false">
                                                        <FaBars />
                                                    </button>
                                                    <button className="nav-link" id="nav-tabCards-4" data-bs-toggle="tab" data-bs-target="#nav-cards-4" type="button" role="tab" aria-controls="nav-cards-4" aria-selected="false">
                                                        <FaMicrophone />
                                                    </button>
                                                    <button className="nav-link" id="nav-tabCards-5" data-bs-toggle="tab" data-bs-target="#nav-cards-5" type="button" role="tab" aria-controls="nav-cards-5" aria-selected="false">
                                                        <FaTshirt />
                                                    </button>
                                                </div>
                                            </nav>
                                            <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                                <div className="tab-pane fade active show" id="nav-cards-1" role="tabpanel" aria-labelledby="nav-tabCards-1">
                                                    <div className="p-3">
                                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                            <div className="mx-3">
                                                                <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Cards</p>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots on Target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots off target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots blocked</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Corner kicks</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-cards-2" role="tabpanel" aria-labelledby="nav-tabCards-2">
                                                    <div className="p-3">
                                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                            <div className="mx-3">
                                                                <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Cards</p>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots on Target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots off target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots blocked</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Corner kicks</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-cards-3" role="tabpanel" aria-labelledby="nav-tabCards-3">
                                                    <div className="p-3">
                                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                            <div className="mx-3">
                                                                <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Cards</p>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots on Target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots off target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots blocked</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Corner kicks</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-cards-4" role="tabpanel" aria-labelledby="nav-tabCards-4">
                                                    <div className="p-3">
                                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                            <div className="mx-3">
                                                                <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Cards</p>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots on Target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots off target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots blocked</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Corner kicks</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-cards-5" role="tabpanel" aria-labelledby="nav-tabCards-5">
                                                    <div className="p-3">
                                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                            <div className="mx-3">
                                                                <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Cards</p>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0">
                                                                    <span className="align-middle">0</span> <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="" className="img-fluid mx-2 align-middle" style={{ width: '22px', marginTop: '-2px' }} /> <span className="align-middle">0</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots on Target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots off target</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Shots blocked</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                        <div className="mb-2">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                                <div className="mx-3 text-center">
                                                                    <p className="fs-12 mb-0 text-center text-uppercase text-white-50">Corner kicks</p>
                                                                </div>
                                                                <div>
                                                                    <p className="mb-0">0</p>
                                                                </div>
                                                            </div>
                                                            <div className="progress-bar1">
                                                                <div className="left" style={{ width: '50%' }} />
                                                                <div className="right" style={{ width: '50%' }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="offcanvas offcanvas-end offcanvas-01" tabIndex={-1} id="offcanvasRates" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <h5 id="offcanvasRightLabel" className="mb-0">Rates <span className="badge badge-1 ms-1">1</span></h5>
                                    <button type="button" className="btn-close btn-close-white opacity-100" data-bs-dismiss="offcanvas" aria-label="Close" />
                                </div>
                                <div className="offcanvas-body scrollbar">
                                    <div className="scrollbar mb-3">
                                        <nav className="tab-02 mb-1 w-100">
                                            <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                <button className="nav-link w-100 active" id="nav-tabRates-1" data-bs-toggle="tab" data-bs-target="#nav-rates-1" type="button" role="tab" aria-controls="nav-rates-1" aria-selected="true">
                                                    Ordinary
                                                </button>
                                                <button className="nav-link w-100" id="nav-tabRates-2" data-bs-toggle="tab" data-bs-target="#nav-rates-2" type="button" role="tab" aria-controls="nav-rates-2" aria-selected="false">
                                                    Express
                                                </button>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                        <div className="tab-pane fade active show" id="nav-rates-1" role="tabpanel" aria-labelledby="nav-tabRates-1">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="me-2 w-100">
                                                        <p>Changes in odds not accepted</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-nowrap"><a href="#" className="link">Clear all</a></p>
                                                    </div>
                                                </div>
                                                <div className="rates-box mb-3">
                                                    <div className="head">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-100">
                                                                <p className="mb-0 fs-14"><span className="badge live">Live</span> Ahal FC Al Ain FC</p>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-close btn-close-white fs-12 opacity-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="fs-12 fw-light mb-1 text-white-75">1x2</p>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <div className="me-2 w-50">
                                                                <p className="fs-14 mb-0">Ahal FC</p>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-14 mb-0 text-blue text-nowrap">17.00</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-50">
                                                                <div className="price-input">
                                                                    <input type="text" name id defaultValue={0.00} className="w-100" />
                                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="img-fluid img1" />
                                                                </div>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-12 mb-0 text-nowrap">Estimated payment</p>
                                                                <p className="fs-14 mb-0 text-nowrap"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-rates-2" role="tabpanel" aria-labelledby="nav-tabRates-2">
                                            <div>
                                                <div className="d-flex justify-content-between">
                                                    <div className="me-2 w-100">
                                                        <p>Changes in odds not accepted</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-nowrap"><a href="#" className="link">Clear all</a></p>
                                                    </div>
                                                </div>
                                                <div className="rates-box mb-3">
                                                    <div className="head">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-100">
                                                                <p className="mb-0 fs-14"><span className="badge live">Live</span> Ahal FC Al Ain FC</p>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-close btn-close-white fs-12 opacity-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="fs-12 fw-light mb-1 text-white-75">Гандикап</p>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <div className="me-2 w-50">
                                                                <p className="fs-14 mb-0">Фхфл ФК (2.25)</p>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-14 mb-0 text-blue text-nowrap">1.35</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rates-box mb-3">
                                                    <div className="head">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-100">
                                                                <p className="mb-0 fs-14"><span className="badge live">Live</span> Ahal FC Al Ain FC</p>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-close btn-close-white fs-12 opacity-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="fs-12 fw-light mb-1 text-white-75">4th goal</p>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <div className="me-2 w-50">
                                                                <p className="fs-14 mb-0">Фхфл ФК (2.25)</p>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-14 mb-0 text-blue text-nowrap">1.35</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rates-box mb-3">
                                                    <div className="head">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="me-2 w-100">
                                                                <p className="mb-0 fs-14"><span className="badge live">Live</span> Ahal FC Al Ain FC</p>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn-close btn-close-white fs-12 opacity-100" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="body">
                                                        <p className="fs-12 fw-light mb-1 text-white-75">Гандикап</p>
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <div className="me-2 w-50">
                                                                <p className="fs-14 mb-0">1:3</p>
                                                            </div>
                                                            <div className="w-50 text-end">
                                                                <p className="fs-14 mb-0 text-blue text-nowrap">4.05</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="offcanvas-bottom">
                                    <div className="price-input mw-100 mb-3">
                                        <input type="text" name id defaultValue={1000.0} className="w-100" />
                                        <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="img-fluid img1" />
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="me-2 w-50">
                                            <p className="fs-12 mb-0 text-white-75">Total rate</p>
                                        </div>
                                        <div className="w-50 text-end">
                                            <p className="fs-14 mb-0"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                        </div>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between">
                                        <div className="me-2 text-white-75 w-50">
                                            <p className="fs-12 mb-0 text-nowrap">Estimated payment</p>
                                        </div>
                                        <div className="w-50 text-end">
                                            <p className="fs-14 mb-0 text-nowrap"><span>0.00000000</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} /></p>
                                        </div>
                                    </div>
                                    <div className="alert alert-danger align-items-center border-0 d-flex mt-3 mb-0" role="alert" style={{ color: '#e90f3d', background: 'rgb(233 15 61 / 15%)' }}>
                                        <div>
                                            <i className="fa-solid fa-circle-exclamation" />
                                        </div>
                                        <div className="w-100 ms-3">
                                            <p className="fs-14 mb-0" style={{ color: '#f24f73' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis omnis aperiam explicabo facilis.</p>
                                        </div>
                                    </div>
                                    <button className="btn btn1 w-100 mt-3">Accept new odds</button>
                                </div>
                            </div>
                            <div className="padding pt-0">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="scrollbar mb-3">
                                            <nav className="tab-02 mb-1">
                                                <div className="nav nav-tabs flex-nowrap" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-tabBets-1" data-bs-toggle="tab" data-bs-target="#nav-bets-1" type="button" role="tab" aria-controls="nav-bets-1" aria-selected="true">
                                                        All Bets
                                                    </button>
                                                    <button className="nav-link" id="nav-tabBets-2" data-bs-toggle="tab" data-bs-target="#nav-bets-2" type="button" role="tab" aria-controls="nav-bets-2" aria-selected="false">
                                                        Major players
                                                    </button>
                                                    <button className="nav-link" id="nav-tabBets-3" data-bs-toggle="tab" data-bs-target="#nav-bets-3" type="button" role="tab" aria-controls="nav-bets-3" aria-selected="false">
                                                        Tournament table
                                                    </button>
                                                </div>
                                            </nav>
                                        </div>
                                        <div className="tab-content border bg-transparent border-0" id="nav-tabContent">
                                            <div className="tab-pane fade active show" id="nav-bets-1" role="tabpanel" aria-labelledby="nav-tabBets-1">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>Event</th>
                                                                <th className="text-center d-none d-sm-table-cell">User</th>
                                                                <th className="text-center d-none d-sm-table-cell">Time</th>
                                                                <th className="text-center d-none d-sm-table-cell">Odds</th>
                                                                <th className="text-end">Bet amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-bets-2" role="tabpanel" aria-labelledby="nav-tabBets-2">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>Event</th>
                                                                <th className="text-center d-none d-sm-table-cell">User</th>
                                                                <th className="text-center d-none d-sm-table-cell">Time</th>
                                                                <th className="text-center d-none d-sm-table-cell">Odds</th>
                                                                <th className="text-end">Bet amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-bets-3" role="tabpanel" aria-labelledby="nav-tabBets-3">
                                                <div className="table-responsive">
                                                    <table className="table table-01">
                                                        <thead>
                                                            <tr>
                                                                <th>Event</th>
                                                                <th className="text-center d-none d-sm-table-cell">User</th>
                                                                <th className="text-center d-none d-sm-table-cell">Time</th>
                                                                <th className="text-center d-none d-sm-table-cell">Odds</th>
                                                                <th className="text-end">Bet amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Sierra, Sola..</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell">Tfue</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa-basketball fa-solid me-2 small text-white-50" /> <span className="ellipsis-1">Express (3)</span>
                                                                </td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">Hidden</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">00:06</td>
                                                                <td className="text-center d-none d-sm-table-cell text-white-50">1:60</td>
                                                                <td className="text-end">
                                                                    <span className="align-middle">3,000.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/ethereum.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '14px' }} />
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
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

export default SingleMatch
