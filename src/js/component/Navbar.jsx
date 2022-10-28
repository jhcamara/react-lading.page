import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar container-fluid bg-dark mb-5">
      {/* <!-- LOGO --> */}
      <div className="logo text-white">Start Bootstrap</div>
      {/* <!-- NAVIGATION MENU --> */}
      <ul className="nav-links list-group d-flex list-group-horizontal">
        {/* <!-- NAVIGATIONS MENUS --> */}
        <div className="menu">
          <li>
            <a className="text-decoration-none text-white" href="/">Home</a>
          </li>
          <li>
            <a className="text-decoration-none text-white"  href="/">About</a>
          </li>
          <li>
            <a className="text-decoration-none text-white"  href="/">Services</a>
          </li>
          <li>
            <a className="text-decoration-none text-white"  href="/">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
