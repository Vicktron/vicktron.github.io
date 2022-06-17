/* eslint-disable no-unused-vars */
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import DashboardLottery from './DashboardLottery'
import Deposit from './Deposit'
import DashboardAffiliate from './dashboardAffiliate'
import Dashboard from './dashboard'

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/welcome' element={<Home/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="/dashboardAffiliate" element={<DashboardAffiliate/>} />
            <Route path="/dashboardLottery" element={<DashboardLottery/>} />
            <Route path="/deposit" element={<Deposit/>} />
        </Routes>
     </Router>  
    </div>
  )
}
