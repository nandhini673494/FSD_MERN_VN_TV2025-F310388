import { NavLink } from "react-router-dom";
function Header() {
return (
<header className="site-header">
<div className="brand">
<h1>College Info Portal</h1>
<p className="tagline">Shaping future leaders</p>
</div>
<nav>
<NavLink to="/" end className={({ isActive }) => (isActive ? "nav-active" : "")}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>About</NavLink>
<NavLink to="/departments" className={({ isActive }) => (isActive ? "nav-active" : "")}>Departments</NavLink>
<NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-active" : "")}>Contact</NavLink>
</nav>
</header>
);
}
export default Header;