import React from "react";
import { TeamMap } from "./Myjs";
import Grey_Pantagun_Header from "../assets/img/webp/box(-0-0-).webp";

function Team() {
  return (
    <>
      <section className="py-5 position-relative">
        <img
          className="Grey_Pantagun_Team Grey_Pantagun_animation position-absolute z_index0 d-none d-md-block"
          src={Grey_Pantagun_Header}
          alt="Grey Pantagun "
        />
        <div className=" container">
          <div className="d-flex justify-content-center">
            <h3 className=" line_before position-relative ff_Montserrat fw-normal fs_sm text_theme_white">
              Consaltex
            </h3>
          </div>
          <h2 className=" text-center ff_Poiret fw-normal fs_xl text_strock1_themeWhite pt-1">
            Unser Team
          </h2>
          <div className="pt-lg-5 pt-3">
            <div className="row justify-content-center">
              {TeamMap.map((pastData) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 my-lg-0 my-sm-4 my-2  z_index1 "
                    data-aos="flip-down"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="1000"
                  >
                    <div className="bg_team h-100 box_hover_common">
                      <img className="w-100" src={pastData.img_2} alt="" />
                      <div className="d-flex justify-content-between align-items-center pt-md-4 py-2 px-2  px-sm-3">
                        <div>
                          <h2 className=" ff_Montserrat fs_lg fw-semibold text_theme_white">
                            {pastData.data1}
                          </h2>
                          <p className=" text_theme_white fw-semibold fs_sm">
                            {pastData.data2}
                          </p>
                        </div>
                        <img
                          className="img_Socile_Team"
                          src={pastData.img}
                          alt="fdgf"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
