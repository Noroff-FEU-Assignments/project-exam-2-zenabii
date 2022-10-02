import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

export const StandAloneNav = ({ user, logout }) => {
    <Nav className="me-auto float-right d-none d-lg-block" user={user}>
        <NavLink
            className={({ isActive }) =>
                "uppercase" + (isActive ? " active" : "")
            }
            href="/about"
            to="/findyourstay"
        >
            Find your stay
        </NavLink>
        <NavLink
            className={({ isActive }) =>
                "uppercase" + (isActive ? " active" : "")
            }
            to="/seeanddo"
        >
            See & Do
        </NavLink>
        <NavLink
            className={({ isActive }) =>
                "uppercase" + (isActive ? " active" : "")
            }
            to="/about"
        >
            About
        </NavLink>
        <NavLink
            className={({ isActive }) =>
                "uppercase" + (isActive ? " active" : "")
            }
            to="/contactus"
        >
            Contact Us
        </NavLink>
        {user && (
            <NavLink
                className={({ isActive }) =>
                    "uppercase" + (isActive ? " active" : "")
                }
                to="/admin"
            >
                Admin panel
            </NavLink>
        )}
        <NavLink
            className={({ isActive }) =>
                "uppercase" + (isActive && !user ? " active" : "")
            }
            onClick={() => user && logout()}
            to={user ? "/" : "/login"}
        >
            {user ? "sign out" : "sign in"}
        </NavLink>
    </Nav>;
};
