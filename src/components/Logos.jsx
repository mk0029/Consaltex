import React from "react";
import Logo1 from "../assets/img//Png/Hgk.png";
import Logo2 from "../assets/img//Png/WeTrust.png";
import Logo3 from "../assets/img//Png/LabXmarketing.png";
import Logo4 from "../assets/img//Png/Fibeka.png";
import Logo5 from "../assets/img//Png/KattanMedia.png";

function Logos() {
  return (
    <>
      <section className=" bg_primery py-lg-5 py-4 mt-lg-5">
        <div className=" pb-4 pb-md-5 pt-md-0 pt-4">
          <div className=" d-flex justify-content-center pb-3 ">
            <h3 className="  ff_Montserrat fw-normal text-cneter fs_sm text_theme_white  line_before position-relative">
              Das sagen unsere Kunden
            </h3>
          </div>
          <div className=" ms-auto  ">
            <div class="LogoParant Logo_Parant_width ms-auto">
              <div class="slide_logo d-flex gap-5 px-3 align-items-center">
                <img className="img_logo_1" src={Logo1} alt="Logo Partners" />
                <img className="img_logo_2" src={Logo2} alt="Logo Partners" />
                <img
                  className="img_logo_4"
                  src={Logo3}
                  alt="Logo Partners"
                />{" "}
                <img className="img_logo_3" src={Logo4} alt="Logo Partners" />
                <img className="img_logo_5" src={Logo5} alt="Logo Partners" />
              </div>
              <div class="slide_logo d-flex gap-5  align-items-center ms-auto">
                {" "}
                <img className="img_logo_1" src={Logo1} alt="Logo Partners" />
                <img className="img_logo_2" src={Logo2} alt="Logo Partners" />
                <img
                  className="img_logo_4"
                  src={Logo3}
                  alt="Logo Partners"
                />{" "}
                <img className="img_logo_3" src={Logo4} alt="Logo Partners" />
                <img className="img_logo_5" src={Logo5} alt="Logo Partners" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logos;
