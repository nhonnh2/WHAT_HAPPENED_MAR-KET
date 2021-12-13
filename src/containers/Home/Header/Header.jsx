import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2 px-md-5">
          <a className="navbar-brand" href="#">
            <img
              src={require("../../../assets/images/logo.png").default}
              alt="loading image"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link Text-Style-11" href="#">
                  introduction
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link Text-Style-11" href="#">
                  solution
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link Text-Style-11" href="#">
                  rate plan
                </a>
              </li>
              <li className="nav-item Rectangle-662 d-lg-block"></li>
              <li className="nav-item">
                <a className="nav-link Text-Style-11" href="#">
                  login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link Text-Style-11" href="#">
                  apply for free use
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
