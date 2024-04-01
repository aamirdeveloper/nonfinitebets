
import React from 'react'

import { Routes, Route } from "react-router-dom";

import './css/style.css';
import './css/custom.css';
import './css/responsive.css';

import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import 'react-toastify/dist/ReactToastify.css';



import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LiveEvents from './pages/LiveEvents';
import Profile from './pages/Profile';
import SingleMatch from './pages/SingleMatch';
import Settings from './pages/Settings';
import Security from './pages/Security';
import ReferralProgram from './pages/ReferralProgram';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Routes>

        <Route element={<PrivateRoute />} >
          <Route exect path="/dashboard" element={<Dashboard />} />
          <Route exect path="/live-events" element={<LiveEvents />} />
          <Route exect path="/single-match" element={<SingleMatch />} />
          <Route exect path="/referral-program" element={<ReferralProgram />} />
          <Route exect path="/settings" element={<Settings />} />
          <Route exect path="/security" element={<Security />} />
          <Route exect path="/profile" element={<Profile />} />
          <Route path='*' element={<Dashboard />}/>
        </Route>

        <Route element={<PublicRoute />} >
          <Route exect path="/" element={<Home />} />
          <Route path='*' element={<Home />}/>
        </Route>



      </Routes>
      <ToastContainer position="bottom-center" />
    </>
  )
}

export default App

