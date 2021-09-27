import React, { useState, useContext, useEffect } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";
import { ContactUs } from "..";
import { PageContext } from "../../context/afenContext";
import classNames from "classnames";
import { link } from "fs";
import CustomImageLoader from "../customImageLoader";

const HeaderComponent = (props: any) => {
  // const { contextState, updateContext } = useContext(PageContext);
  const [activeLink, setLink] = useState("home");
  const [show, setShow] = useState(false);
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    setLink(location.pathname);
  }, [location.pathname]);
  return location.pathname.toLowerCase().includes("dashboardlogin") ||
    location.pathname.toLowerCase().includes("dashboard") ? (
    <p></p>
  ) : (
    <>
      <header className="main_header service" id="header">
        <div className="container-fluid">
          <div className="row align-items-center">
            {activeLink.match(/white-paper/g) && (
              <div className="col-sm-3">
                <div className="sidebar_icon">
                  <CustomImageLoader src="assets/images/bars.png" />
                  <span>items</span>
                </div>
              </div>
            )}
            <div
              className={classNames({
                "col-sm-9": activeLink.match(/white-paper/g),
                "col-md-12": !activeLink.match(/white-paper/g),
              })}>
              <div className="main_header_menu">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" to="">
                    <div className="main_logo">
                      <CustomImageLoader src="assets/images/afen_logo.png" />
                    </div>
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                      <i className="fas fa-bars" />
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/" || activeLink === "/home",
                        })}>
                        <Link className="nav-link" to="/home">
                          Home
                        </Link>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/marketplace",
                        })}>
                        <a
                          className="nav-link"
                          href="https://afenmarketplace.com"
                          target="_blank"
                          rel="noreferrer">
                          Marketplace
                        </a>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/blogs",
                        })}>
                        <Link className="nav-link" to="/blogs">
                          Blog
                        </Link>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/services",
                        })}>
                        <Link className="nav-link" to="/services">
                          Services
                        </Link>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/tokenomics",
                        })}>
                        <Link className="nav-link" to="tokenomics">
                          Tokenomics
                        </Link>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/teams",
                        })}>
                        <Link className="nav-link" to="/teams">
                          Team
                        </Link>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/our-partner",
                        })}>
                        <Link to="/our-partner" className="nav-link">
                          Partners
                        </Link>
                      </li>
                      <li
                        className={classNames("nav-item", {
                          active: activeLink === "/white-paper",
                        })}>
                        <Link className="nav-link" to="white-paper">
                          Whitepaper
                        </Link>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="button"
                        onClick={() => {
                          setShow(true);
                        }}>
                        Contact Us
                      </button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ContactUs
        show={show}
        setShow={(value: boolean) => {
          setShow(value);
        }}
      />
    </>
  );
};
const Header = withRouter(HeaderComponent);
export { Header };
