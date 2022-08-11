import React from 'react'
import Navigationbar from './Navigationbar'
import './dashboardstyles.css';

function Dashboard() {
    return (
        <div className="dashboardbody">
            <Navigationbar/>
            <h3>Dashboard</h3>
        </div>
    )
}

export default Dashboard
