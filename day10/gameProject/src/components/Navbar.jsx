import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam Logo" height="30" className="me-2" />
          STEAM
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#">STORE</a></li>
            <li className="nav-item"><a className="nav-link" href="#">COMMUNITY</a></li>
            <li className="nav-item"><a className="nav-link" href="#">DEADSHOT_1707</a></li>
            <li className="nav-item"><a className="nav-link" href="#">CHAT</a></li>
            <li className="nav-item"><a className="nav-link" href="#">SUPPORT</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
