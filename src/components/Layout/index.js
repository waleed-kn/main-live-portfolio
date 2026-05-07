import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <Outlet />
            </div>
            <Analytics />
        </div>
    )
}

export default Layout