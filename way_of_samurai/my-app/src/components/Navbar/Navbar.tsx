import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return (
<nav className={s.nav}>
    <div className={s.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? s.activeLink : undefined}>Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : undefined}>Messages</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : undefined}>News</NavLink>
    </div>
    <div className={s.item}>
        <a href="/Music">Music</a>
    </div>
    <div className={s.item}>
        <a href="/Settings">Settings</a>
    </div>

</nav>
    )
}