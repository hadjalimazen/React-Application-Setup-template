import React from 'react'
import Aside from './aside';
import Nav from './nav';
import { Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <React.Fragment>
            <div className="min-h-screen bg-gray-50/50">
                <Aside />
                <div className="p-4 xl:ml-80">
                    <Nav />
                    <div className="mt-12">
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Dashboard;