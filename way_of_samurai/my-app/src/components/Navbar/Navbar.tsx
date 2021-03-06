import s from './Navbar.module.css'

export const Navbar = () => {
    return (
<nav className={s.nav}>
    <div className={`${s.item} ${s.active}`}>
        <a href="/profile">Profile</a>
    </div>
    <div className={s.item}>
        <a href="/dialogs">Messages</a>
    </div>
    <div className={s.item}>
        <a href="/News">News</a>
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