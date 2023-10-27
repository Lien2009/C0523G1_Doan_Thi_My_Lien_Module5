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
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link">*/}
                        {/*        Home*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Facility
                            </a>
                            <ul className="dropdown-menu on" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink to="/villas" className="dropdown-item">
                                        Villa
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/houses" className="dropdown-item">
                                        House
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/rooms" className="dropdown-item">
                                        Room
                                    </NavLink>
                                </li>

                            </ul>
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