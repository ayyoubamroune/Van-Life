import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <nav className="host-nav">
                <NavLink className={({isActive})=>isActive ? "selected" : undefined} to="/host" end>Dashboard</NavLink>
                <NavLink className={({isActive})=>isActive ? "selected" : undefined} to="/host/income">Income</NavLink>
                <NavLink className={({isActive})=>isActive ? "selected" : undefined} to="/host/vans">Vans</NavLink>
                <NavLink className={({isActive})=>isActive ? "selected" : undefined} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}