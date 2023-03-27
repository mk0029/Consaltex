import React from "react";
import img_with from "../assets/img//webp/Sclputer_1.webp";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import GreyCube_head from "../assets/img/webp/Cube (grey).webp";
import Pink_tube from "../assets/img/webp/Tubr(pink).webp";
import Grey_Pantagun_Header from "../assets/img/webp/box(-0-0-).webp";
import Left_green from "../assets/img//Png/Left_green_shaddow.png";
import Right_green from "../assets/img//Png/right_green_shaddow.png";
function Header() {
  return (
    <>
      <section className="pt-4 pt-xl-5 pb-md-0 pb-4 position-relative">
        <img
          className="hrader_Greenimg_left position-absolute"
          src={Left_green}
          alt="Green Shaddow"
        />
        <img
          className="hrader_Greenimg_right position-absolute"
          src={Right_green}
          alt="Green Shaddow"
        />
        <img
          className="Grey_Pantagun_Header Grey_Pantagun_animation position-absolute z_index0 Grey_Pantagun_animation"
          src={Grey_Pantagun_Header}
          alt="Grey Pantagun "
        />
        <div className=" container">
          {" "}
          <div className="Translate_Y_Taxt">
            <h5 className=" ff_Montserrat fs_sm fw-normal text_theme_white After_line_header position-relative">
              Wie Testosteron für deine Agentur
            </h5>
            <h1 className=" text_strock1_themeWhite text-center ff_Poiret fs_2xl fw-normal text_theme_white">
              Wir verhelfen{" "}
              <span className="after_bgPink position-relative ms-2">
                <span className="after_bgPink_2">Agenturen</span>
              </span>
              <span className="d-block">zu Rekordumsätzen</span>
            </h1>
          </div>
          <div className="row justify-content-">
            <div className="col-xl-8 col-lg-6 col-sm-6 position-relative">
              <img
                className="GreyCube_head Grey_Pantagun_animation position-absolute"
                src={GreyCube_head}
                alt="ERROR TO LOAD"
              />
              <div className=" d-flex justify-content-center">
                <img
                  className="Img_sculpture z_index3 position-relative Translate_Y_sculpture"
                  src={img_with}
                  alt="ERROR TO LOAD"
                />
              </div>
            </div>
            <div className="col-xl-3 col-md-5 ">
              <div className="h-100 justify-content-center d-flex flex-column align-items-center align-items-md-start margin_topNagetiv position-relative z_index1">
                <img
                  className="Pink_Tube_Header Pink_Tube_Animation position-absolute z_index0"
                  src={Pink_tube}
                  alt="Tube pink"
                />

                <h2 className=" text_theme_white fs_sm fw-normal ff_Montserrat lh_2xl z_index2 position-relative text-md-start text-center">
                  Zünde die Wachstumsrakete und katapultiere deinen Umsatz in
                  eine neue Dimension!
                </h2>
                <span className=" position-relative z_index2">
                  <a className="btn_common d-inline-block fw-normal " href="#">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
