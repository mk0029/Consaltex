import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GIrl_using_ipod from "../assets/img/webp/Girl_Using_Ipod.webp";
import Btn_slider__left from "../assets/img/Png/Btn_slider.png";
import Btn_slider__right from "../assets/img/Png/Btn_slider_2.png";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import Pink_tube from "../assets/img/Png//PinkTube.png";
import Left_green from "../assets/img//Png/Left_green_shaddow.png";
import Right_green from "../assets/img//Png/right_green_shaddow.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const btnslider = useRef();

  return (
    <section className="Testimonials py-xl-5 py-md-4 py-3 bg_primery mt-md-5 position-relative">
      <img
        className="Pink_Tube_Testimonials position-absolute z_index0"
        src={Pink_tube}
        alt="Tube pink"
      />{" "}
      <img
        className="Testimonials_Greenimg_right position-absolute"
        src={Right_green}
        alt="Green Shaddow"
      />{" "}
      <div className=" container">
        <div className=" pb-xl-5">
          <div className="row pb-xl-5">
            <div
              className="col-lg-8"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="1500"
            >
              <div className="row my-lg-0 my-4 ">
                <Slider ref={btnslider} {...settings}>
                  <div
                    className="col-6 "
                    data-aos="fade-left"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="3000"
                  >
                    <div className="bg_dark_green mx-3 ">
                      <img
                        className="w-100"
                        src={GIrl_using_ipod}
                        alt="ERROR TO LOAD"
                      />
                      <div className="px-2 py-3">
                        <p className="ff_Montserrat fw-normal fs_sm text_theme_white">
                          Die Metarec GmbH unterstützt unter der Leitung des
                          Geschäftsführers Christian Schmitt kleine- und
                          Mittelständische Unternehmen beim Gewinnen von
                          qualifizierten Fachkräfte zur beseitigung des
                          Fachkräftemangels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 "
                    data-aos="fade-down"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="3000"
                  >
                    <div className="bg_dark_green mx-3 ">
                      <img
                        className="w-100"
                        src={GIrl_using_ipod}
                        alt="ERROR TO LOAD"
                      />
                      <div className="px-2 py-3">
                        <p className="ff_Montserrat fw-normal fs_sm text_theme_white">
                          Die Metarec GmbH unterstützt unter der Leitung des
                          Geschäftsführers Christian Schmitt kleine- und
                          Mittelständische Unternehmen beim Gewinnen von
                          qualifizierten Fachkräfte zur beseitigung des
                          Fachkräftemangels
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="bg_dark_green mx-3">
                      <img
                        className="w-100"
                        src={GIrl_using_ipod}
                        alt="ERROR TO LOAD"
                      />
                      <div className="px-2 py-3">
                        <p className="ff_Montserrat fw-normal fs_sm text_theme_white">
                          Die Metarec GmbH unterstützt unter der Leitung des
                          Geschäftsführers Christian Schmitt kleine- und
                          Mittelständische Unternehmen beim Gewinnen von
                          qualifizierten Fachkräfte zur beseitigung des
                          Fachkräftemangels
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-lg-4 z_index1 ">
              <div className="d-flex flex-column-reverse flex-md-column h-100 justify-content-between">
                <div className=" d-flex flex-column align-items-center align-items-md-start">
                  <h3 className=" ff_Montserrat fw-normal fs_sm text_theme_white  line_before position-relative">
                    Das sagen unsere Kunden
                  </h3>
                  <h2 className=" ff_Poiret fw-normal fs_xl text_strock1_themeWhite text-md-start text-center">
                    Testimonials
                  </h2>
                  <p className="ff_Montserrat fw-normal fs_sm text_theme_white">
                    Unsere Kunden berichten über die Zusammenarbeit
                  </p>
                  <span>
                    <a
                      className="btn_common d-inline-block fw-normal "
                      href="#"
                    >
                      Mehr ansehen
                      <img
                        className="imgLine_btn_common cursor_pointer"
                        src={Arrow_btn_nav}
                        alt="ERROR TO LOAD"
                      />
                    </a>
                  </span>
                </div>
                <div className="d-flex justify-content-between justify-content-md-start gap-3 my-lg-0 my-3">
                  <span>
                    <img
                      className="Btn_slider cursor_pointer"
                      onClick={() => btnslider.current.slickPrev()}
                      src={Btn_slider__left}
                      alt="ERROR TO LOAD"
                    />
                  </span>
                  <span>
                    <img
                      onClick={() => btnslider.current.slickNext()}
                      className="Btn_slider"
                      src={Btn_slider__right}
                      alt="ERROR TO LOAD"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default Testimonials;
// export default Testimonials;import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
