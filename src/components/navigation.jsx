import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div
          className="navbar-header"
          style={{
            display: "flex"
          }}
        >
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div className="navbar-brand page-scroll">
            <a href="#home">
                <img style={{marginRight: '10px'}} width={100} src={process.env.PUBLIC_URL + "/img/logos/logo_full.jpg"} alt="logo"></img>
            </a>
            {/* <a
              href="https://www.uaic.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img style={{marginRight: '10px'}} width={30} src={process.env.PUBLIC_URL + "/img/logos/uaic_logo.png"} alt="logo"></img>
            </a>
            <a
              href="https://www.info.uaic.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img width={30} src={process.env.PUBLIC_URL + "/img/logos/fii_logo.png"} alt="logo"></img>
            </a> */}
        </div>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#home" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#vision" className="page-scroll">
                Vision
              </a>
            </li>
            <li>
              <a href="#speakers" className="page-scroll">
                Speakers
              </a>
            </li>
            <li>
              <a href="#program" className="page-scroll">
                Program
              </a>
            </li>
            <li>
              <a href="#participants" className="page-scroll">
                Participants
              </a>
            </li>
            <li>
              <a href="#sponsorship" className="page-scroll">
                Sponsorship
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#editions" className="page-scroll">
                Editions
              </a>
            </li>
            {/* <li> */}
            {/*  <a href="#gallery" className="page-scroll">*/}
            {/*    Gallery*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};