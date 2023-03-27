import React from "react";
import logo_img from "../assets/img/webp/Logo.webp";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section className=" bg_team pt-3 pt-md-4 pt-xl-5 position-relative z_index1 ">
        <div className=" container">
          <div className="row flex-column-reverse flex-md-row">
            <div
              className="col-md-4 my-md-0 my-3"
              // data-aos="zoom-in"
              // data-aos-easing="ease-in-out"
              // data-aos-duration="1000"
            >
              <div className=" d-flex justify-content-between justify-content-md-center flex-md-column justify-content-center gap-2 h-100">
                <Link to="/">
                  <span className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links">
                    Home
                  </span>
                </Link>
                <Link to="/Kundenrezensionen">
                  <span className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links">
                    Kundenrezensionen
                  </span>
                </Link>
                <Link to="/Login">
                  <span className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links">
                    Karriere
                  </span>
                </Link>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="zoom-in-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
            >
              <div className=" d-flex flex-column justify-content-center align-items-center gap-3">
                <a className=" text_theme_white" href="#">
                  <img className="logo_footer" src={logo_img} alt="//error" />
                </a>
                <p className="text-center text_theme_white ff_Montserrat fs_sm fw-normal mb-lg-5">
                  Der Sparringspartner für die Skalierung deines Unternehmens.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center  gap-3 border_footer_bottom py-3">
          <a
            className=" text_theme_white ff_Montserrat fw-normal fs_sm hover_nav_links"
            href="#"
          >
            Impressum&nbsp;|
          </a>
          <a
            className=" text_theme_white ff_Montserrat fw-normal fs_sm hover_nav_links"
            href="#"
          >
            Datenschutz &nbsp;|
          </a>
          <a
            className=" text_theme_white ff_Montserrat fw-normal fs_sm hover_nav_links"
            href="#"
          >
            AGBS
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
