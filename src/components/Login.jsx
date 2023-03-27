import React from "react";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import Left_green from "../assets/img//Png/Left_green_shaddow.png";
import Right_green from "../assets/img//Png/right_green_shaddow.png";
import mail from "../assets/img/Png/fluent_mail-20-filled.png";
import location from "../assets/img/Png/carbon_location-filled.png";

function Login() {
  return (
    <>
      <section className="py-xl-5 py-4 my-md-4 Login position-relative ">
        <img
          className="Login_Greenimg_left position-absolute"
          src={Left_green}
          alt="Green Shaddow"
        />
        <img
          className="Logit_Greenimg_right position-absolute"
          src={Right_green}
          alt="Green Shaddow"
        />
        <div className="container">
          <div
            className="d-flex flex-column align-items-center  "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <h6 className=" text_theme_white position-relative line_before ff_Montserrat fs_sm fw-normal mb-0">
              Initiativbewerbung | Consaltex
            </h6>
            <h2 className=" ff_Poiret fs_xl fw-normal text_theme_white text_strock1_themeWhite text-center ">
              Werde ein Teil unserer
              <span className=" d-block">Erfolgsgeschichte</span>
            </h2>
          </div>
          <div className="my-lg-5 my-2">
            <div className="row justify-content-around">
              <div
                className="col-lg-4 my-lg-0 my-4"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <div className="h-100 d-flex flex-column justify-content-around">
                  <h3 className=" text_theme_white ff_Montserrat fs_sm fw-normal">
                    Wir suchen nach Menschen, die wissen, was sie wollen, wohin
                    sie wollen und die ein klares Warum haben.
                  </h3>
                  <div className="d-flex flex-column justify-content-center gap-4">
                    <span className=" d-flex gap-2 align-items-center ">
                      <img src={location} alt="LOCATION" />
                      <span className=" ff_Montserrat fs_sm fw-normal span_hover_calander text_theme_white">
                        22143 Hamburg, Rahlstedter Bahnhofstraße 27-29
                      </span>
                    </span>
                    <span className=" ff_Montserrat fs_sm fw-normal d-flex gap-2 align-items-center text_theme_white ">
                      <img src={mail} alt="EMAIL" />
                      <span className=" ff_Montserrat fs_sm fw-normal span_hover_calander ">
                        info@consaltex.de
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 "
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <div className="bg_team mx-lg-3 py-3 z_index1 position-relative">
                  <div className="py-3 px-md-3">
                    <div className="px-sm-4 px-2  ">
                      <span className=" text_theme_white ff_Montserrat fs_sm fw-semibold ">
                        Vor- und Nachname
                      </span>
                      <label htmlFor="Name" className=" w-100">
                        <input
                          className="w-100 bg_dark_green border-0 px-3 ff_Montserrat fs_sm fw-normal"
                          type="text"
                        />
                      </label>
                    </div>
                    <div className="px-sm-4 px-2  mt-3">
                      <span className=" text_theme_white  ff_Montserrat fs_sm fw-semibold   ">
                        Email
                      </span>
                      <label htmlFor="Name" className=" w-100">
                        <input
                          className="w-100 bg_dark_green border-0 px-3 ff_Montserrat fs_sm fw-normal"
                          type="text"
                          placeholder="example@mail.com "
                        />
                      </label>
                    </div>
                    <div className="px-sm-4 px-2  mt-3">
                      <span className=" text_theme_white  ff_Montserrat fs_sm fw-semibold   ">
                        Erzähl uns von dir
                      </span>
                      <label htmlFor="Name" className=" w-100">
                        <textarea
                          className="w-100 bg_dark_green border-0 p-3  ff_Montserrat fs_sm fw-normal"
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                        {/* <input type="text" placeholder="example@mail.com " /> */}
                      </label>
                    </div>
                  </div>
                  <span className="d-flex justify-content-center mt-2 ">
                    <a
                      className="btn_common d-inline-block fw-normal "
                      href="#"
                    >
                      Absenden
                      <img
                        className="imgLine_btn_common"
                        src={Arrow_btn_nav}
                        alt="ARROW"
                      />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
