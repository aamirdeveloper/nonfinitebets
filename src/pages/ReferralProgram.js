import React from 'react'

import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'
import { FaRegCopy, FaStar } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const ReferralProgram = () => {
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
                                <h2 className="mb-3 d-none d-lg-block"><FaStar className='small me-2 text-white-50 align-middle' style={{ fontSize: '18px' }}/> Affiliate Program</h2>
                                <div className="setting-header d-flex d-lg-none justify-content-between setting-header">
                                    <div>
                                        <p className="mb-0 fs-14 fw-500"><FaStar className='small me-2 text-white-50 align-middle' style={{ fontSize: '18px' }}/> Affiliate Program</p>
                                    </div>
                                    <div>
                                        <p className="mb-0"><Link to="/profile"><FaXmark /></Link></p>
                                    </div>
                                </div>
                                <h4 className="mb-3">Campaigns</h4>
                                <div className="row g-2 g-sm-3">
                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="card-02">
                                            <p className="mb-2 fs-12 text-white-70">Transactions</p>
                                            <h5 className="mb-0">324</h5>
                                        </div>
                                    </div>
                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="card-02">
                                            <p className="mb-2 fs-12 text-white-70">Total deposits</p>
                                            <h5 className="mb-0">3234</h5>
                                        </div>
                                    </div>
                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="card-02">
                                            <p className="mb-2 fs-12 text-white-70">Unique deposits</p>
                                            <h5 className="mb-0">3234</h5>
                                        </div>
                                    </div>
                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                        <div className="card-02">
                                            <p className="mb-2 fs-12 text-white-70">Referrals</p>
                                            <h5 className="mb-0">92</h5>
                                        </div>
                                    </div>
                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-12">
                                        <div className="card-02">
                                            <p className="mb-2 fs-12 text-white-70">Available</p>
                                            <h5 className="mb-0"><img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion accordion-1 mt-4" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="campaigns-heading-1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#campaigns-collapse-1" aria-expanded="false" aria-controls="campaigns-collapse-1">
                                                <div className="d-flex justify-content-between align-items-center w-100 me-3">
                                                    <div>Valeriahutsu</div>
                                                    <div className="d-flex flex-wrap justify-content-end ms-3">
                                                        <span className="fs-14 text-white-50 fw-normal align-middle me-2">Commission:</span>
                                                        <div>
                                                            <span className="fs-14 fw-normal align-middle">6,567.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '18px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="campaigns-collapse-1" className="accordion-collapse collapse" aria-labelledby="campaigns-heading-1">
                                            <div className="accordion-body">
                                                <div className="row g-2 g-sm-3">
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Transactions</p>
                                                            <h5 className="mb-0">324</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Referrals</p>
                                                            <h5 className="mb-0">92</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Total</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Total deposits</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Unique deposits</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Commission Rate</p>
                                                            <h5 className="mb-0">6,567.00</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="copy-text mt-3" style={{ maxWidth: '436px' }}>
                                                    <input type="text" defaultValue="sportbet.com/?c=763534ffd" className="form-control" disabled />
                                                    <a href="#" className="icon"><FaRegCopy /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3">
                                        <h2 className="accordion-header" id="campaigns-heading-2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#campaigns-collapse-2" aria-expanded="false" aria-controls="campaigns-collapse-2">
                                                <div className="d-flex justify-content-between align-items-center w-100 me-3">
                                                    <div>Valeriahutsu</div>
                                                    <div className="d-flex flex-wrap justify-content-end ms-3">
                                                        <span className="fs-14 text-white-50 fw-normal align-middle me-2">Commission:</span>
                                                        <div>
                                                            <span className="fs-14 fw-normal align-middle">6,567.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '18px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="campaigns-collapse-2" className="accordion-collapse collapse" aria-labelledby="campaigns-heading-2">
                                            <div className="accordion-body">
                                                <div className="row g-2 g-sm-3">
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Transactions</p>
                                                            <h5 className="mb-0">324</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Referrals</p>
                                                            <h5 className="mb-0">92</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Total</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Total deposits</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Unique deposits</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Commission Rate</p>
                                                            <h5 className="mb-0">6,567.00</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="copy-text mt-3" style={{ maxWidth: '436px' }}>
                                                    <input type="text" defaultValue="sportbet.com/?c=763534ffd" className="form-control" disabled />
                                                    <a href="#" className="icon"><FaRegCopy /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3">
                                        <h2 className="accordion-header" id="campaigns-heading-3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#campaigns-collapse-3" aria-expanded="false" aria-controls="campaigns-collapse-3">
                                                <div className="d-flex justify-content-between align-items-center w-100 me-3">
                                                    <div>Valeriahutsu</div>
                                                    <div className="d-flex flex-wrap justify-content-end ms-3">
                                                        <span className="fs-14 text-white-50 fw-normal align-middle me-2">Commission:</span>
                                                        <div>
                                                            <span className="fs-14 fw-normal align-middle">6,567.00</span> <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid ms-1" style={{ width: '18px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div id="campaigns-collapse-3" className="accordion-collapse collapse" aria-labelledby="campaigns-heading-3">
                                            <div className="accordion-body">
                                                <div className="row g-2 g-sm-3">
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Transactions</p>
                                                            <h5 className="mb-0">324</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Referrals</p>
                                                            <h5 className="mb-0">92</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Total</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Total deposits</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Unique deposits</p>
                                                            <h5 className="mb-0">3234</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl col-lg-3 col-md-3 col-sm-4 col-6">
                                                        <div className="card-02">
                                                            <p className="mb-2 fs-12 text-white-70">Commission Rate</p>
                                                            <h5 className="mb-0">6,567.00</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="copy-text mt-3" style={{ maxWidth: '436px' }}>
                                                    <input type="text" defaultValue="sportbet.com/?c=763534ffd" className="form-control" disabled />
                                                    <a href="#" className="icon"><FaRegCopy /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="btn btn1">Create  a New Campaign</button>
                                </div>
                            </div>
                            <div className="padding pt-0">
                                <h4 className="mb-3">Referrals</h4>
                                <div className="table-responsive">
                                    <table className="table table-01" style={{ minWidth: '650px' }}>
                                        <thead>
                                            <tr>
                                                <th>username</th>
                                                <th>registered</th>
                                                <th>total deposits</th>
                                                <th>last deposit</th>
                                                <th>turnover</th>
                                                <th>Commission</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Valeriiahutsu</td>
                                                <td>12/11/2023</td>
                                                <td>6</td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">65.67</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Valeriiahutsu</td>
                                                <td>12/11/2023</td>
                                                <td>6</td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">65.67</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Valeriiahutsu</td>
                                                <td>12/11/2023</td>
                                                <td>6</td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">65.67</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Valeriiahutsu</td>
                                                <td>12/11/2023</td>
                                                <td>6</td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">65.67</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Valeriiahutsu</td>
                                                <td>12/11/2023</td>
                                                <td>6</td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">6,567.00</span>
                                                </td>
                                                <td>
                                                    <img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" className="align-middle h-auto img-fluid me-1" style={{ width: '18px' }} /> <span className="align-middle">65.67</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="padding pt-0">
                                <h4 className="mb-3">Commission</h4>
                                <div className="row">
                                    <div className="col-xl-6 col-md-9 col-12">
                                        <p className="text-white-70">For all sports bets, the bookmaker's theoretical advantage is 3%. You can calculate your commission using the following formula:</p>
                                        <form action className="form form1">
                                            <div className="mb-3">
                                                <input type="text" placeholder="(0.03 * wagered / 2) * commission rate" className="form-control fs-6" style={{ borderRadius: '14px' }} />
                                            </div>
                                        </form>
                                        <div className="bg-transparent card-02" style={{ border: '1px dashed rgb(255 255 255 / 30%)' }}>
                                            <p className="text-white-70 mb-0">For all sports bets, the bookmaker's theoretical advantage is 3%. You can calculate your commission using the following formula:</p>
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

export default ReferralProgram
