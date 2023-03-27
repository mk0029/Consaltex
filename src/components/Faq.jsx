import React from "react";
// import after_line from "../assets/image/png/after_line.png";
import Accordion from "react-bootstrap/Accordion";
import Sketch_img from "../assets/img/Png/Sketchimg.png";
import IMGGREENCUBE from "../assets/img/Png/Cube(green)Faq.png";
import IMGPINKTUBE from "../assets/img/Png/TubePinkFaq.png";
import GreenLeftFaq from "../assets/img/Png/Left_green_shaddow.png";
import GreyHexagunFaq from "../assets/img/Png/HexagunCalander.png";

function Faq() {
  return (
    <>
      <section className=" bg_primery  py-lg-5 py-4 position-relative z_index0 my-xl-0  ">
        <img
          src={IMGGREENCUBE}
          alt="GreenCube"
          className="CubeGreenFaq position-absolute Grey_Pantagun_animation"
        />
        <img
          src={IMGPINKTUBE}
          alt="GreenCube"
          className="TubePinkFaq position-absolute Pinkcube_animation"
        />
        <img
          src={GreenLeftFaq}
          alt="GreenCube"
          className="GreenLeftFaq position-absolute"
        />
        <img
          src={GreyHexagunFaq}
          alt="GreyHexagunFaq"
          className="GreyHexagunFaq position-absolute d-none d-sm-block"
        />
        <div className="container z_index-1">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="d-flex justify-content-center align-items-center ">
                <p className="fs_sm fw-normal mb-0 ps-2 ff_Montserrat  text_theme_white line_before position-relative">
                  Du hast noch Fragen?
                </p>
              </div>
              <h3 className="fs_xl fw-normal text_strock1_themeWhite ff_Poiret text-center">
                Häufig gestellte<br></br> Fragen
              </h3>
              <div>
                {" "}
                <Accordion
                  className="mt-5 z_index6 position-relative"
                  defaultActiveKey="0"
                >
                  <Accordion.Item
                    className="common_accordion_width mx-auto"
                    eventKey="0"
                  >
                    <Accordion.Header className=" fs_md fw-semibold ff_Montserrat  mt-4 text_strock1_themeWhite text_strok">
                      Was unterscheidet euch von anderen Agenturen?
                    </Accordion.Header>
                    <Accordion.Body className="fs_xsm px-0 fw-normal ff_Montserrat text_theme_white mb-0 pb-0 mt-2">
                      Consaltex ist keine Agentur, sondern eine ganzheitliche
                      Unternehmensberatung. Wir helfen dir nicht nur im
                      Marketing, im Vertrieb oder in der Kundenbetreuung,
                      sondern betrachten die Geschäftsprozesse in ihrem
                      Zusammenhang und optimieren sie von Grund auf. Dasy
                      bedeutet: Wir verstehen uns als Partner, nicht als
                      Dienstleister und laufen nicht nur die extra Meile,
                      sondern wenn nötig einen ganzen Marathon, damit dein
                      Unternehmen zu einer echten Umsatzmaschine wird!
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="common_accordion_width mx-auto"
                    eventKey="1"
                  >
                    <div className="border_solid mt-4"></div>
                    <Accordion.Header className=" fs_md fw-semibold ff_Montserrat  mt-4 text_strock1_themeWhite text_strok">
                      Brauche ich eure Hilfe?
                    </Accordion.Header>
                    <Accordion.Body className="fs_xsm px-0 fw-normal ff_Montserrat text_theme_white mb-0 pb-0 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item
                    className="common_accordion_width mx-auto"
                    eventKey="2"
                  >
                    <div className="border_solid mt-4"></div>
                    <Accordion.Header className=" fs_md fw-semibold ff_Montserrat  mt-4 text_strock1_themeWhite text_strok">
                      Wie könnt ihr mir helfen?
                    </Accordion.Header>
                    <Accordion.Body className="fs_xsm px-0 fw-normal ff_Montserrat text_theme_white mb-0 pb-0 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="common_accordion_width mx-auto"
                    eventKey="3"
                  >
                    <div className="border_solid mt-4"></div>
                    <Accordion.Header className=" fs_md fw-semibold ff_Montserrat  mt-4 text_strock1_themeWhite text_strok">
                      Kann man im Internet noch neue Kunden gewinnen?
                    </Accordion.Header>
                    <Accordion.Body className="fs_xsm px-0 fw-normal ff_Montserrat text_theme_white mb-0 pb-0 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    className="common_accordion_width mx-auto"
                    eventKey="4"
                  >
                    <div className="border_solid mt-4 border_bottom_solid"></div>
                    <Accordion.Header className=" fs_md fw-semibold ff_Montserrat  mt-4 text_strock1_themeWhite text_strok">
                      Gibt es eine eins-zu-eins Betreuung?
                    </Accordion.Header>
                    <Accordion.Body className="fs_xsm px-0 fw-normal ff_Montserrat text_theme_white mb-0 pb-0 mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <img className="w-50" src={Sketch_img} alt="sketch" />
        </div>
      </section>
    </>
  );
}

export default Faq;
