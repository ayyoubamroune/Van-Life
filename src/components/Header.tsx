import { Link, NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <Link to="/" className='van'>#VANLIFE</Link>
            <nav className='sec'>
                <NavLink className={({isActive}) => isActive ? 'selected' : undefined} to="/Host">Host</NavLink>
                <NavLink className={({isActive}) => isActive ? 'selected' : undefined} to="/about">About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'selected' : undefined} to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}
