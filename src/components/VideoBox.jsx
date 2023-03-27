import React from "react";
import ImgVideobox1 from "../assets/img/Png/Img_secondPage_1.png";
import Pinktube_SecondPage from "../assets/img/Png/TubePinkFaq.png";
import GreyCube_SecondPage from "../assets/img/webp/Cube (grey).webp";
import GreenLeft_SecondPage from "../assets/img/Png/Left_green_shaddow.png";
import GreenRight_SecondPage from "../assets/img/Png/right_green_shaddow.png";
import { VideoboxMap } from "./Myjs";
function VideoBox() {
  return (
    <>
      <section className=" position-relative py-4 py-xl-5 -hidden">
        <img
          src={Pinktube_SecondPage}
          alt="Pinktube_SecondPage"
          className="Pinktube_SecondPage position-absolute z_index0"
        />
        <img
          src={GreyCube_SecondPage}
          alt="GreyCube_SecondPage"
          className="GreyCube_SecondPage position-absolute z_index0"
        />
        <img
          src={GreenLeft_SecondPage}
          alt="GreenLeft_SecondPage"
          className="GreenLeft_SecondPage position-absolute z_index0"
        />
        <img
          src={GreenRight_SecondPage}
          alt="GreenRight_SecondPage"
          className="GreenRight_SecondPage position-absolute z_index0"
        />
        <div className="container">
          <div className="bg_team z_index1 position-relative">
            <div className="Img1_videobox position-relative ">
              <span className="playbtn position-absolute">
                <svg
                  width="96"
                  height="97"
                  viewBox="0 0 96 97"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_515)">
                    <circle
                      cx="48.0007"
                      cy="36.6775"
                      r="20.99"
                      fill="#FCFFFE"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.9413 9.70062C39.0446 10.4087 33.5013 12.9688 28.8984 17.5718C22.4086 24.0615 19.7058 33.1574 21.5587 42.2716C21.8705 43.806 22.6514 46.2433 23.2674 47.6052C28.5879 59.3692 40.9452 65.6885 53.5983 63.1162C63.8956 61.0228 72.3495 52.569 74.4428 42.2716C75.0043 39.5101 75.1777 35.6756 74.8465 33.3472C73.0857 20.9692 64.0568 11.7829 51.8029 9.90203C50.7401 9.73886 46.8654 9.60578 45.9413 9.70062ZM51.4681 31.1821C56.6475 34.1736 60.8851 36.645 60.8851 36.6741C60.8851 36.7182 43.5757 46.7514 41.3294 48.0093L40.6077 48.4134V36.6741V24.9347L41.3294 25.3389C41.7263 25.5611 46.2887 28.1906 51.4681 31.1821Z"
                    fill="url(#paint0_linear_1_515)"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1_515"
                      x="0.0107422"
                      y="0.6875"
                      width="95.98"
                      height="95.98"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="12" />
                      <feGaussianBlur stdDeviation="13.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0509804 0 0 0 0 0.85098 0 0 0 0 0.545098 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_515"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_515"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_1_515"
                      x1="48.0004"
                      y1="9.66895"
                      x2="48.0004"
                      y2="63.6852"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0CD8AE" />
                      <stop offset="1" stop-color="#0CD845" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <img className="w-100" src={ImgVideobox1} alt="video/Img" />
            </div>
            <p className=" text_theme_white py-3 fw-normal fs_sm px-2">
              Sit nec cras varius leo sit consectetur eros. Odio egestas
              malesuada interdum scelerisque sed facilisis tincidunt arcu. Ut
              scelerisque sodales senectus feugiat sem nec consequat. Sed erat
              aliquet euismod sed pellentesque ut ornare integer risus. Nam
              varius et scelerisque amet a suscipit felis. Amet odio aliquam
              orci et et ac. Quam non neque condimentum consequat augue odio
              malesuada. Est sit faucibus egestas pretium ipsum elementum turpis
              ultrices lacus. Leo aliquam, orci, in facilisis venenatis enim.
              Feugiat dictumst eget amet eget. Molestie mollis risus porta a
              magna a. Pellentesque at enim ultricies tortor enim.
            </p>
          </div>
          <div className=" mb-5 pb-xl- pt-sm-5">
            <h2 className=" ff_Poiret fs_xl fw-normal text_theme_white text_strock1_themeWhite">
              Kundenstimmen
            </h2>
            <div className=" pb-sm-5 mb-md-5 ">
              <div className="row justify-content-center pt-3 z_index1 position-relative">
                {VideoboxMap.map((Pastdata) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 "
                      data-aos="flip-left"
                      data-aos-easing="linear"
                      data-aos-duration="1500"
                      key={Pastdata}
                    >
                      <div className=" bg_team mx-1">
                        <img
                          className="width_box_videwo2"
                          src={Pastdata.img1}
                          alt=""
                        />
                        <div className="px-2">
                          <p className=" text_theme_white ff_Montserrat fs_sm fw-normal py-3 fw-normal fs_sm px-1">
                            {Pastdata.data1}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VideoBox;
