import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';



export const Navbar = () => {

    return (
<nav className={s.nav}>
    <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.activeLink : undefined} to="/profile">Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.activeLink : undefined} to="dialogs">Messages</NavLink>
    </div>
    <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.activeLink : undefined} to="/profile1">News</NavLink>
    </div>
    <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.activeLink : undefined} to="dialogs2">Music</NavLink>
    </div>
    <div className={s.item}>
        <NavLink className={({ isActive }) => isActive ? s.activeLink : undefined} to="/profile3">Settings</NavLink>
    </div>
</nav>
    )
}