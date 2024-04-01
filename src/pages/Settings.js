import React, { useState } from 'react'

import ReactFlagsSelect from "react-flags-select";

import Headers from '../components/Headers';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import BottomMenu from '../components/BottomMenu'
import { FaGear, FaXmark } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'


const Settings = () => {

    const [selected, setSelected] = useState("");
    // const onSelect = (code) => setSelected(code);
    // const searchable = boolean("Searchable", false);

    // const customLabels = object("Custom Labels", {
    //     GB: "GB",
    //     US: "US",
    //     FR: "FR",
    // });
    // const selectedSize = number("Selected Size", 16);
    // const showOptionLabel = boolean("Show Option Label", true);
    // const showSecondaryOptionLabel = boolean("Show Secondary Option Label", true);
    // const optionsSize = number("Options Size", 16);
    // const placeholder = text("Placeholder", "");
    // const searchable = boolean("Searchable", false);
    // const searchPlaceholder = text("Search Placeholder", "");
    // const alignOptionsToRight = boolean("Align Options to Right", false);
    // const fullWidth = boolean("Full Width", true);
    // const disabled = boolean("Disabled", false);

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
                                            <h4>Email Address</h4>
                                            <hr className="hr1" />
                                            <form action className="form form1">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <input type="text" className="form-control text-uppercase" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <button className="btn btn1">Save Changes</button>
                                                        <button className="btn btn1 bg-transparent"><span className="link">Send email again</span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-02 p-sm-4 mt-4 overflow-visible">
                                            <h4>Phone number</h4>
                                            <hr className="hr1" />
                                            <form action className="form form1">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3 position-relative">
                                                            <label htmlFor="countrySelector" className="country-lbl">Country</label>
                                                            {/* <input id="country_selector" type="text" className="form-control" /> */}

                                                            <ReactFlagsSelect
                                                                className="form-control"
                                                                selected={selected}
                                                                onSelect={(code) => setSelected(code)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="clearfix" />
                                                    <div className="col-xl-6 col-lg-9 col-12">
                                                        <div className="mb-3">
                                                            <input type="text" className="form-control text-uppercase" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-1">
                                                        <button className="btn btn1">Send Code</button>
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

export default Settings
