import React from "react";
import Image2 from "../assets/img//webp/Image2.webp";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import Left_green from "../assets/img//Png/Left_green_shaddow.png";
import PinkCube from "../assets/img//webp/Cube(pink).webp";

function Ergebnisse() {
  return (
    <>
      <section className="py-5 mt-xl-5 position-relative">
        <img
          className="Ergebnisse_Greenimg_right position-absolute "
          src={Left_green}
          alt="Green Shaddow"
        />
        <img
          className="Ergebnisse_PinkCube_left position-absolute Pinkcube_animation "
          src={PinkCube}
          alt="Green Shaddow"
        />
        <div className=" container">
          <div className="py-xl-5 py-xl-3 mb-xl-5">
            <div className="row justify-content-center justify-content-md-start">
              <div
                className="col-xl-7 col-lg-8 "
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
              >
                <div className="px-sm-4 h-100 d-flex flex-column align-items-center align-items-md-start  justify-content-center">
                  <h2 className=" text_theme_white text_strock1_themeWhite text-center text-md-start ff_Poiret fw-normal fs_xl mb-3 position-relative z_index1">
                    Wir liefern Ergebnisse
                  </h2>
                  <p className=" text_theme_white ff_Montserrat fw-normal fs_sm pe-xl-5 me-xl-5 position-relative z_index1">
                    Wir sind vielleicht nicht der größte Player in der Branche,
                    aber auf dem Weg dorthin. Aber vor allem sind wir hungrig
                    darauf, gemeinsam mit Unternehmern wie dir
                    Erfolgsgeschichten zu schreiben.
                  </p>
                  <p className=" text_theme_white ff_Montserrat fw-normal fs_sm pe-xl-5 me-xl-5 position-relative z_index1">
                    Wenn andere aufgeben, werden wir erst richtig warm. Wir sind
                    der Ansprechpartner für umkämpfte Märkte, komplizierte
                    Kunden, erklärungsbedürftige Services und scheinbar
                    aussichtslose Fälle. Wir sind das Spezialeinsatzkommando für
                    Agenturen.
                  </p>
                  <p className=" text_theme_white ff_Montserrat fw-normal fs_sm pe-xl-5 me-xl-5 position-relative z_index1">
                    Unser Herz schlägt für den Underdog: David gegen Goliath -
                    Marketing, Vertrieb, interne Prozesse: Unser Team gibt für
                    dich 110 Prozent - weil dein Erfolg unsere Motivation ist.
                  </p>
                  <span className=" position-relative z_index2 d-inline-block pt-4 z_index1 position-relative z_index1">
                    <a
                      className="btn_common d-inline-block fw-normal "
                      href="#"
                    >
                      Sprich jetzt mit unserem Team
                      <img
                        className="imgLine_btn_common"
                        src={Arrow_btn_nav}
                        alt="ARROW"
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div
                className="col-lg-4  col-md-6 col-sm-8 col-10 h-100"
                data-aos="zoom-in-left"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
              >
                <div className="d-flex flex-column justify-content-center justify-content-md-start">
                  <img
                    className="Width_img_EREGEBNISSE"
                    src={Image2}
                    alt="IMG_WHITE"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ergebnisse;
