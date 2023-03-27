import React from "react";
import { Map2 } from "./Myjs";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import Right_green from "../assets/img//Png/right_green_shaddow.png";
function Aktuelle() {
  return (
    <>
      <section className="py-5 position-relative">
        <img
          className="Aktyelle_Greenimg_right position-absolute z_index1"
          src={Right_green}
          alt="Green Shaddow"
        />{" "}
        <div className=" container ">
          <div className="py-xl-5 py-xl-5">
            <div className=" d-flex flex-column align-items-center ">
              <h3 className=" ff_Montserrat fs_sm fw-normal text_theme_white position-absolute line_before mb-3">
                Videos
              </h3>
              <h2 className=" ff_Poiret fs_xl pt-4 fw-normal text_theme_white text-center text_strock1_themeWhite">
                Aktuelle Themen
              </h2>
              <div className="">
                <div className="row justify-content-center">
                  {Map2.map((past) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 my-lg-0 my-sm-4 my-2  p-sm-2 p-md-3 z_index1  "
                        data-aos="fade-up"
                        data-aos-easing="ease-in-out"
                        data-aos-duration="1000"
                        key={past}
                      >
                        <div className="box_hover_common bg_team h-100">
                          <span className="">
                            <img className="w-100" src={past.img1} alt="" />
                          </span>
                          <div className="d-flex flex-column justify-content-between px-1 py-2  py-sm-3 px-sm-2 ">
                            <div className=" d-flex flex-column gap-3">
                              <i className=" ff_Montserrat fw-normal fs_sm text_theme_white">
                                {past.data1}
                              </i>
                              <h2 className=" ff_Montserrat fw-medium fs_md text_theme_white">
                                {past.data2}
                              </h2>{" "}
                            </div>
                            <a
                              className=" ff_Montserrat fw-semibold fs_md text_dark_green"
                              href="#"
                            >
                              {past.data3}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-center pt-xl-5 pt-lg-4 pt-3">
                  <span className=" position-relative z_index2">
                    <a
                      className="btn_common d-inline-block fw-normal "
                      href="#"
                    >
                      Mehr ansehen
                      <img
                        className="imgLine_btn_common"
                        src={Arrow_btn_nav}
                        alt=""
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

export default Aktuelle;
