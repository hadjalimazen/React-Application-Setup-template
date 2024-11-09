import React, { useState } from 'react'
import Aside from './aside';
import Nav from './nav';
import { Outlet } from 'react-router-dom';
import { MenuSquareIcon } from 'hugeicons-react';

function Dashboard() {

    // use state to toggle the aside open and close with a true or false value
    const [asideState, setAsideState] = useState(false);

    return (
        <React.Fragment>
            <div className="min-h-screen bg-gray-50/50">
                <Aside asideState={asideState} setAsideState={setAsideState} />
                <div className="p-4 xl:ml-80">
                    <Nav />
                    <div className="mt-12">
                        <Outlet />
                    </div>
                </div>

            </div>

            {
                !asideState &&
                <button
                    className="xl:hidden border-2 border-blue-400 sticky bottom-5 left-5 z-40 bg-white hover:bg-blue-500 text-blue-700 hover:text-white p-2 rounded-full shadow-lg"
                    onClick={() => setAsideState(prev => !prev)}
                >
                    <MenuSquareIcon className='size-7 m-3' />
                </button>
            }
        </React.Fragment>

    )
}


export default Dashboard;