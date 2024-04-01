import React, { useEffect } from 'react'
import Headers from '../components/Headers'
import BottomMenu from '../components/BottomMenu'
import Sidebar from '../components/Sidebar'
import { FaCircleInfo } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { useAllContext } from '../context/AllContext'

const Dashboard = () => {

    const userToken = JSON.parse(localStorage.getItem('userToken'))

    const { getTransactionHistory, transactions, getBets, bets, userGamesDetails } = useAllContext()
    useEffect(() => {
        getTransactionHistory(userToken)
        getBets(userToken)
    }, [])

    return (
        <>
            <Headers />
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper">

                    <Sidebar />

                    <div className="main-panel">
                        <div className="content-wrapper pt-0">
                            <div className="match-marquee">
                                <marquee behavior="scroll" direction="left" scrollamount={10}>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                    <span className="me-3 text-white"><img src={`${process.env.PUBLIC_URL}/images/central1.png`} alt="" className="img-fluid img1" /> FCB <span className="mx-1 text-white-50">499.96</span> <span className="badge live red">1.25% </span></span>
                                    <span className="text-white"><img src={`${process.env.PUBLIC_URL}/images/central2.png`} alt="" className="img-fluid img1" /> Manchester <span className="mx-1 text-white-50">667.84</span> <span className="badge live green">5.40% </span></span>
                                </marquee>
                            </div>
                            <div className="padding pt-0">
                                <div className="row g-4">
                                    <div className="col-xl-4 col-md-6 col-12 order-1 order-md-0">
                                        <h4 className="mb-3">Insights</h4>
                                        <div className="card-02 mb-3">
                                            <p className="mb-1 text-white-70">Total bet <FaCircleInfo className='ms-1 text-white-50 small' data-bs-toggle="tooltip" data-bs-placement="top" title="Description" /></p>
                                            <h4 className="mb-0">{userGamesDetails.totalBets}</h4>
                                            <p className="mb-0 fw-500 text-green">+ 0</p>
                                        </div>
                                        <div className="card-02 mb-3">
                                            <p className="mb-1 text-white-70">Total Profits <FaCircleInfo className='ms-1 text-white-50 small' data-bs-toggle="tooltip" data-bs-placement="top" title="Description" /></p>
                                            <h4 className="mb-0">0 BUSD</h4>
                                            <p className="mb-0 fw-500 text-green">+ 0 BUSD</p>
                                        </div>
                                        <div className="card-02 d-flex">
                                            <div className="me-3 w-75">
                                                <h4 className="mb-0">Referral Program </h4>
                                                <p className="mb-0 text-white-70">Refer a friend an earn.</p>
                                                <p className="mb-0 text-white-70">See the invite code bellow</p>
                                                <p className="mb-0 mt-4 fw-500 text-blue"><Link to="/referral-program">Learn More</Link></p>
                                            </div>
                                            <div className="align-self-center w-25">
                                                <img src={`${process.env.PUBLIC_URL}/images/promo2.png`} alt="" className="img-fluid img1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 order-2 order-md-1">
                                        <div className="card-01 h-100">
                                            <img src={`${process.env.PUBLIC_URL}/images/football_emblem_14.png`} alt="" className="img-fluid d-block mx-auto" />
                                            <h2 className="mb-3 fw-bold">Elevate Your Experience!</h2>
                                            <p className="mb-0">Boost your sports betting adventure with our Special Sport Bet Offers!</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-6 col-12 order-0 order-md-2">
                                        <div className="card-01 p-0">
                                            <img src={`${process.env.PUBLIC_URL}/images/img2.png`} alt="" className="img-fluid w-100" style={{ maxHeight: '440px', objectFit: 'cover', objectPosition: 'top left' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="padding pt-0">
                                <div className="row g-4">
                                    <div className="col-xl-5 col-md-12 col-12">
                                        <h4 className="mb-3">Transaction History</h4>
                                        {
                                            transactions.length ?
                                            <div className="table-responsive scrollbar" style={{ maxHeight: '360px' }}>
                                                <table className="table table-01">
                                                    <thead className="d-none d-xl-table-group">
                                                        <tr>
                                                            <th>&nbsp;</th>
                                                            <th className=""></th>
                                                            <th className="text-end"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            transactions.map((curItems, ind) => {
                                                                const date = new Date(curItems.createdAt).toLocaleDateString()
                                                                return <tr key={ind}>
                                                                    <td style={{ width: '25px' }} className="pe-0">
                                                                        <div className="icon-arrow text-green"><FaArrowUp /></div>
                                                                    </td>
                                                                    <td className="w-100">
                                                                        <h6 className="fs-10 fw-light mb-1 text-uppercase text-white-50">Deposit</h6>
                                                                        <p className="fs-18 fw-500 mb-0">{curItems.amount} <span className="text-white-50">{curItems.coinType}</span></p>
                                                                    </td>
                                                                    <td className="text-end">{date}</td>
                                                                </tr>
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            : <p className='text-center mt-5'>No Records</p>
                                        }
                                    </div>
                                    <div className="col-xl-7 col-md-12 col-12">
                                        <h4 className="mb-3">My Bets</h4>
                                        {
                                            bets.length ?
                                            <div className="table-responsive scrollbar" style={{ maxHeight: '360px' }}>
                                                <table className="table table-01">
                                                    <thead>
                                                        <tr>
                                                            <th />
                                                            <th className>Game</th>
                                                            <th className="text-center d-none d-sm-table-cell">Result</th>
                                                            <th className="text-end text-sm-center">Commitment</th>
                                                            <th className="text-center d-none d-sm-table-cell">Profit</th>
                                                            <th className="text-end d-none d-sm-table-cell">Date</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            bets.map((curItems, ind) => {
                                                                const date = new Date(curItems.createdAt).toLocaleDateString()
                                                                return <tr>
                                                                    <td className="pe-0" style={{ width: '90px' }}>
                                                                        <div className="d-flex">
                                                                            <div className="central-images">
                                                                                <img src={`${process.env.PUBLIC_URL}/images/central3.png`} alt="" className="img-fluid" />
                                                                            </div>
                                                                            <div className="central-images">
                                                                                <img src={`${process.env.PUBLIC_URL}/images/central4.png`} alt="" className="img-fluid" />
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className>
                                                                        <p className="mb-0">{curItems.team1}</p>
                                                                        <p className="mb-0">vs {curItems.team2}</p>
                                                                    </td>
                                                                <td className="text-center d-none d-sm-table-cell"><span className={`badge dark fs-14 px-2 py-2 ${curItems.result == "win" || curItems.result == "Win" ? 'win' : 'loss'}`}>{curItems.result}</span></td>
                                                                    <td className="text-end text-sm-center fw-500 last-mob"><img src={`${process.env.PUBLIC_URL}/images/icons/usdt.png`} alt="image" style={{ width: '18px', height: '18px' }} className="img-fluid me-1 align-middle" /> <span className="align-middle">{curItems.amount}</span></td>
                                                                    <td className="text-center fw-500 d-none d-sm-table-cell">110.10</td>
                                                                    <td className="text-end d-none d-sm-table-cell">{date}</td>
                                                                </tr>

                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            : <p className='text-center mt-5'>No Records</p>
                                        }
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <footer />

                    </div>

                </div>
            </div>
            <BottomMenu />
        </>
    )
}

export default Dashboard
