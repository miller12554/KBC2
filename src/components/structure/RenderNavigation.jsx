import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
export const RenderRoutes = () => {
	const { user } = AuthData();

	return (
		<Routes>
			{nav.map((r, i) => {
				if (r.isPrivate && user.isAuthenticated) {
					return <Route key={i} path={r.path} element={r.element} />;
				} else if (!r.isPrivate) {
					return <Route key={i} path={r.path} element={r.element} />;
				} else return false;
			})}
		</Routes>
	);
};

export const RenderMenu = () => {
	const { user, logout } = AuthData();
const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
	const MenuItem = ({ r }) => {
		return (
			<div className="nav-links">
				<Link to={r.path}>{r.name}</Link>
			</div>
		);
	};
	return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <GiRocketThruster className="navbar-icon" />
              Skye
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-menu">
			{nav.map((r, i) => {
				if (!r.isPrivate && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else if (user.isAuthenticated && r.isMenu) {
					return <MenuItem key={i} r={r} />;
				} else return false;
			})}

			{user.isAuthenticated ? (
				<div className="text-yellow-500 text-sm">
					<Link to={"#"} onClick={logout}>
						Log out
					</Link>
				</div>
			) : (
				<div className="text-yellow-500 text-sm">
					<Link to={"login"}>Log in</Link>
				</div>
			)}
		</li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
 