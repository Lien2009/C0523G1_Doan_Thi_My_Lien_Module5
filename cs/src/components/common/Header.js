import {Routes, Route, Link, NavLink} from "react-router-dom";


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img className="size-logo"
                         src="https://aml.bestwebdesignsg.com/wp-content/uploads/2020/09/furama-hotel-logo-e1601432079391.png"
                         alt="..."></img>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <NavLink to="/" className="style-link">
                                    Facilities
                                </NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <NavLink to="/customers" className="style-link">
                                    Customers
                                </NavLink>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                <NavLink to="/contracts" className="style-link">
                                    Contracts
                                </NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;