import React, { useState } from "react";
import Pagelogo from "../assets/img/webp/Logo.webp";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import PinkBox_nav from "../assets/img/webp/Cube(pink).webp";
import { Link } from "react-router-dom";

const MyNav = (props) => {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className=" position-relative">
        <div className=" bg_dark_green position-fxed w-100  ">
          <div className=" container">
            <div className="d-flex justify-content-between py-2">
              <div className=" text-center text-sm-start">
                <a
                  className=" pe-3 fw-normal ff_Montserrat fs_xsm text_theme_white After_Line_navTop position-relative Link_hover_green"
                  href="#"
                >
                  22143 Hamburg, Rahlstedter Bahnhofstraße 27-29
                </a>
                <a
                  className=" ps-3 fw-normal ff_Montserrat fs_xsm text_theme_white Link_hover_green"
                  href="#"
                >
                  info@consaltex.de
                </a>
              </div>
              <div className="d-md-flex gap-2 d-none ">
                <span className=" facebook pe-1 z_index1">
                  <svg
                    className={props.display_none}
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_433)">
                      <rect
                        className="clippath"
                        x="0.288574"
                        y="0.0297852"
                        width="26.9401"
                        height="26.9401"
                        rx="13.47"
                        fill="#FCFFFE"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.0545654 13.3433C0.0545654 20.1561 5.0026 25.8213 11.474 26.9701V17.0729H8.04815V13.2668H11.474V10.2212C11.474 6.79539 13.6813 4.89291 16.8034 4.89291C17.7923 4.89291 18.8589 5.04479 19.8478 5.19667V8.699H18.0972C16.422 8.699 16.0417 9.53605 16.0417 10.6026V13.2668H19.696L19.0873 17.0729H16.0417V26.9701C22.5131 25.8213 27.4611 20.1572 27.4611 13.3433C27.4611 5.76422 21.2947 -0.436523 13.7579 -0.436523C6.22105 -0.436523 0.0545654 5.76422 0.0545654 13.3433Z"
                        fill="url(#paint0_linear_1_433)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_433"
                        x1="13.7579"
                        y1="-0.436523"
                        x2="13.7579"
                        y2="26.9701"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0CD8AE" />
                        <stop offset="1" stop-color="#0CD845" />
                      </linearGradient>
                      <clipPath id="clip0_1_433">
                        <rect
                          x="0.288574"
                          y="0.0297852"
                          width="26.9401"
                          height="26.9401"
                          rx="13.47"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="Tiktok pe-1 z_index1">
                  <svg
                    className={props.display_none}
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.589355"
                      y="0.0297852"
                      width="26.9401"
                      height="26.9401"
                      rx="13.47"
                      fill="url(#paint0_linear_1_435)"
                    />
                    <path
                      className="path"
                      d="M19.7278 8.72795C19.6139 8.66907 19.5031 8.60453 19.3957 8.53457C19.0837 8.32823 18.7975 8.08513 18.5435 7.8105C17.9071 7.08268 17.6695 6.34437 17.5825 5.82792H17.5855C17.5128 5.39843 17.5428 5.12109 17.5481 5.12109H14.651V16.3217C14.651 16.4716 14.651 16.6208 14.645 16.7677C14.645 16.7857 14.6428 16.8022 14.642 16.8224C14.642 16.8299 14.642 16.8389 14.6398 16.8471V16.8539C14.6094 17.2557 14.4807 17.6438 14.265 17.9841C14.0493 18.3245 13.7533 18.6066 13.403 18.8057C13.0376 19.0136 12.6242 19.1227 12.2037 19.122C10.8545 19.122 9.76019 18.0217 9.76019 16.6627C9.76019 15.303 10.8545 14.2027 12.2037 14.2027C12.4593 14.2027 12.7134 14.2432 12.9563 14.3226L12.96 11.3724C12.2225 11.2772 11.4732 11.336 10.7595 11.545C10.0458 11.754 9.38322 12.1087 8.8135 12.5867C8.31419 13.0203 7.89439 13.5378 7.57299 14.1158C7.45081 14.3264 6.98909 15.1741 6.93362 16.5488C6.89839 17.3283 7.133 18.1379 7.24469 18.4714V18.4789C7.31439 18.6753 7.58723 19.3469 8.03097 19.9128C8.3888 20.367 8.81159 20.7661 9.28572 21.0971V21.0896L9.29247 21.0971C10.6941 22.049 12.2495 21.9868 12.2495 21.9868C12.5186 21.9756 13.4203 21.9868 14.4442 21.5019C15.5797 20.9637 16.2259 20.1624 16.2259 20.1624C16.6389 19.6835 16.9674 19.1378 17.1973 18.5486C17.4596 17.859 17.5466 17.033 17.5466 16.7032V10.76C17.5818 10.781 18.0503 11.0905 18.0503 11.0905C18.0503 11.0905 18.7249 11.523 19.7765 11.8041C20.5305 12.0043 21.5477 12.047 21.5477 12.047V9.17094C21.1917 9.20991 20.4683 9.09748 19.727 8.7287L19.7278 8.72795Z"
                      fill="#FCFFFE"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_435"
                        x1="14.0594"
                        y1="0.0297852"
                        x2="14.0594"
                        y2="26.9699"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0CD8AE" />
                        <stop offset="1" stop-color="#0CD845" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className=" z_index1 LinkedIn pe-1">
                  <svg
                    className={props.display_none}
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.890137"
                      y="0.0297852"
                      width="26.9401"
                      height="26.9401"
                      rx="13.47"
                      fill="url(#paint0_linear_1_437)"
                    />
                    <path
                      className="path"
                      d="M15.9964 10.2744H13.2183V20.1037H16.2099V15.342C16.2099 13.7464 16.7974 12.7308 18.2101 12.7308C19.2284 12.7308 19.6298 13.6727 19.6298 15.342V20.1037H22.6204V14.6743C22.6204 11.7433 21.9197 10.1458 18.9645 10.1458C17.423 10.1458 16.3972 10.8676 15.9964 11.6696V10.2744Z"
                      fill="#FCFFFE"
                    />
                    <path
                      className="path"
                      d="M11.0808 19.9759H8.08908V10.1458H11.0808V19.9759Z"
                      fill="#FCFFFE"
                    />
                    <path
                      className="path"
                      d="M11.3748 7.68876C11.4687 7.45048 11.5143 7.19576 11.5089 6.93964C11.4976 6.43684 11.29 5.95836 10.9305 5.6067C10.5711 5.25501 10.0882 5.05811 9.58545 5.05811C9.08219 5.05811 8.59932 5.25501 8.23985 5.6067C7.88037 5.95836 7.67327 6.43684 7.66201 6.93964C7.6561 7.19576 7.70171 7.45048 7.79614 7.68876C7.89003 7.92705 8.03114 8.14414 8.21034 8.32729C8.32354 8.44328 8.45124 8.54422 8.58912 8.62785C8.66907 8.67627 8.75276 8.71892 8.83915 8.75534C9.07575 8.85467 9.32899 8.90584 9.58545 8.90584C9.84138 8.90584 10.0952 8.85467 10.3312 8.75534C10.5673 8.65598 10.7814 8.51045 10.9606 8.32729C11.0749 8.21053 11.1736 8.07999 11.2541 7.93895C11.3002 7.85874 11.3404 7.77514 11.3748 7.68876Z"
                      fill="#FCFFFE"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_437"
                        x1="14.3602"
                        y1="0.0297852"
                        x2="14.3602"
                        y2="26.9699"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0CD8AE" />
                        <stop offset="1" stop-color="#0CD845" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className=" z_index1 InstaGram pe-1">
                  <svg
                    className={props.display_none}
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.190796"
                      y="0.0297852"
                      width="26.9401"
                      height="26.9401"
                      rx="13.47"
                      fill="url(#paint0_linear_1_439)"
                    />
                    <path
                      className="path"
                      d="M13.6605 5.72705C15.7233 5.72705 15.9807 5.73464 16.79 5.7726C17.5985 5.81056 18.149 5.93735 18.6333 6.12563C19.1344 6.31847 19.5565 6.57964 19.9786 7.001C20.3647 7.38052 20.6634 7.83961 20.854 8.34631C21.0415 8.82992 21.1691 9.3811 21.207 10.1897C21.2427 10.999 21.2526 11.2563 21.2526 13.3191C21.2526 15.3819 21.245 15.6392 21.207 16.4485C21.1691 17.2571 21.0415 17.8075 20.854 18.2919C20.664 18.7989 20.3652 19.2581 19.9786 19.6372C19.599 20.0231 19.1399 20.3218 18.6333 20.5126C18.1497 20.7001 17.5985 20.8276 16.79 20.8656C15.9807 20.9013 15.7233 20.9111 13.6605 20.9111C11.5978 20.9111 11.3404 20.9036 10.5311 20.8656C9.72253 20.8276 9.17211 20.7001 8.68774 20.5126C8.18084 20.3224 7.72167 20.0236 7.34243 19.6372C6.9563 19.2577 6.65757 18.7986 6.46706 18.2919C6.27878 17.8083 6.15199 17.2571 6.11403 16.4485C6.07835 15.6392 6.06848 15.3819 6.06848 13.3191C6.06848 11.2563 6.07607 10.999 6.11403 10.1897C6.15199 9.38035 6.27878 8.83068 6.46706 8.34631C6.65704 7.8393 6.95584 7.38008 7.34243 7.001C7.72178 6.61474 8.18091 6.31599 8.68774 6.12563C9.17211 5.93735 9.72178 5.81056 10.5311 5.7726C11.3404 5.73692 11.5978 5.72705 13.6605 5.72705ZM13.6605 9.52308C12.6538 9.52308 11.6882 9.92301 10.9763 10.6349C10.2644 11.3468 9.86451 12.3123 9.86451 13.3191C9.86451 14.3259 10.2644 15.2914 10.9763 16.0033C11.6882 16.7152 12.6538 17.1151 13.6605 17.1151C14.6673 17.1151 15.6328 16.7152 16.3447 16.0033C17.0566 15.2914 17.4566 14.3259 17.4566 13.3191C17.4566 12.3123 17.0566 11.3468 16.3447 10.6349C15.6328 9.92301 14.6673 9.52308 13.6605 9.52308ZM18.5954 9.33327C18.5954 9.08158 18.4954 8.8402 18.3174 8.66223C18.1394 8.48425 17.898 8.38427 17.6464 8.38427C17.3947 8.38427 17.1533 8.48425 16.9753 8.66223C16.7973 8.8402 16.6974 9.08158 16.6974 9.33327C16.6974 9.58497 16.7973 9.82635 16.9753 10.0043C17.1533 10.1823 17.3947 10.2823 17.6464 10.2823C17.898 10.2823 18.1394 10.1823 18.3174 10.0043C18.4954 9.82635 18.5954 9.58497 18.5954 9.33327ZM13.6605 11.0415C14.2646 11.0415 14.8439 11.2814 15.271 11.7086C15.6982 12.1357 15.9381 12.715 15.9381 13.3191C15.9381 13.9232 15.6982 14.5025 15.271 14.9296C14.8439 15.3568 14.2646 15.5967 13.6605 15.5967C13.0565 15.5967 12.4771 15.3568 12.05 14.9296C11.6229 14.5025 11.3829 13.9232 11.3829 13.3191C11.3829 12.715 11.6229 12.1357 12.05 11.7086C12.4771 11.2814 13.0565 11.0415 13.6605 11.0415Z"
                      fill="#FCFFFE"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_439"
                        x1="13.6608"
                        y1="0.0297852"
                        x2="13.6608"
                        y2="26.9699"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0CD8AE" />
                        <stop offset="1" stop-color="#0CD845" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className=" z_index1 YouTube pe-1">
                  <svg
                    className={props.display_none}
                    width="28"
                    height="27"
                    viewBox="0 0 28 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.491577"
                      y="0.0297852"
                      width="26.9401"
                      height="26.9401"
                      rx="13.47"
                      fill="url(#paint0_linear_1_441)"
                    />
                    <path
                      className="path"
                      d="M13.9606 6.896C5.53155 6.896 5.38403 7.64559 5.38403 13.4999C5.38403 19.3543 5.53155 20.1039 13.9606 20.1039C22.3896 20.1039 22.5372 19.3543 22.5372 13.4999C22.5372 7.64559 22.3896 6.896 13.9606 6.896ZM16.7094 13.7864L12.8585 15.5841C12.5215 15.7401 12.2453 15.5652 12.2453 15.193V11.8069C12.2453 11.4356 12.5215 11.2598 12.8585 11.4158L16.7094 13.2135C17.0464 13.3713 17.0464 13.6286 16.7094 13.7864Z"
                      fill="#FCFFFE"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_441"
                        x1="13.9616"
                        y1="0.0297852"
                        x2="13.9616"
                        y2="26.9699"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0CD8AE" />
                        <stop offset="1" stop-color="#0CD845" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className={props.display_none}>
          <img
            className="PinkCube_Nav position-absolute"
            src={PinkBox_nav}
            alt="ERROR TRO LOAD"
          />
        </span>
        <div className="container">
          {" "}
          <nav className=" d-flex justify-content-between align-items-center  py-3 position-relative ">
            <a className="page_logo d-inline-block" href="#">
              <img className="w-100" src={Pagelogo} alt="ERROR TO LOAD" />
            </a>
            <ul className="d-none d-xl-flex  gap-4 mb-0 align-items-center">
              <li className=" z_index1">
                <Link to="/">
                  <a
                    className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className=" z_index1">
                {" "}
                <Link to="/Kundenrezensionen">
                  <a
                    className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links"
                    href="#"
                  >
                    Kundenrezensionen
                  </a>
                </Link>
              </li>

              <li className=" z_index1">
                <Link to="/Login">
                  {" "}
                  <a
                    className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links"
                    href="#"
                  >
                    Karriere
                  </a>
                </Link>
              </li>
            </ul>
            <span className="d-none d-md-inline-block z_index1">
              <a className="btn_common d-inline-block fw-normal " href="#">
                Jetzt Erstgespräch vereinbaren{" "}
                <img
                  className="imgLine_btn_common"
                  src={Arrow_btn_nav}
                  alt="ARROW"
                />
              </a>
            </span>{" "}
            <label
              className="menu_formatting d-flex  justify-content-end d-xl-none"
              for="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black "
                type="checkbox"
                id="check"
              />
              <span className="d-flex justify-content-between "></span>
              <span className="d-flex justify-content-between "></span>
              <span className="d-flex justify-content-between "></span>
            </label>
          </nav>
          <div className="d-xl-none d-flex  ">
            <div
              className={` ${
                navShow
                  ? "Show_Nav d-flex align-items-center align-items-md-start justify-content-center   "
                  : "Hide_Nav"
              }`}
            >
              <ul className="d-flex flex-column flex-xl-row justify-content-center gap-4 mb-0 align-items-center ps-0 mt-md-5 pt-md-5">
                <div className="d-flex gap-2 d-md-none ">
                  <span className="  pe-1 z_index1 ">
                    <svg
                      className={props.display_none}
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_433)">
                        <rect
                          x="0.288574"
                          y="0.0297852"
                          width="26.9401"
                          height="26.9401"
                          rx="13.47"
                          fill="#FCFFFE"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.0545654 13.3433C0.0545654 20.1561 5.0026 25.8213 11.474 26.9701V17.0729H8.04815V13.2668H11.474V10.2212C11.474 6.79539 13.6813 4.89291 16.8034 4.89291C17.7923 4.89291 18.8589 5.04479 19.8478 5.19667V8.699H18.0972C16.422 8.699 16.0417 9.53605 16.0417 10.6026V13.2668H19.696L19.0873 17.0729H16.0417V26.9701C22.5131 25.8213 27.4611 20.1572 27.4611 13.3433C27.4611 5.76422 21.2947 -0.436523 13.7579 -0.436523C6.22105 -0.436523 0.0545654 5.76422 0.0545654 13.3433Z"
                          fill="url(#paint0_linear_1_433)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_433"
                          x1="13.7579"
                          y1="-0.436523"
                          x2="13.7579"
                          y2="26.9701"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0CD8AE" />
                          <stop offset="1" stop-color="#0CD845" />
                        </linearGradient>
                        <clipPath id="clip0_1_433">
                          <rect
                            x="0.288574"
                            y="0.0297852"
                            width="26.9401"
                            height="26.9401"
                            rx="13.47"
                            fill="white"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className=" pe-1">
                    <svg
                      className={props.display_none}
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.589355"
                        y="0.0297852"
                        width="26.9401"
                        height="26.9401"
                        rx="13.47"
                        fill="url(#paint0_linear_1_435)"
                      />
                      <path
                        d="M19.7278 8.72795C19.6139 8.66907 19.5031 8.60453 19.3957 8.53457C19.0837 8.32823 18.7975 8.08513 18.5435 7.8105C17.9071 7.08268 17.6695 6.34437 17.5825 5.82792H17.5855C17.5128 5.39843 17.5428 5.12109 17.5481 5.12109H14.651V16.3217C14.651 16.4716 14.651 16.6208 14.645 16.7677C14.645 16.7857 14.6428 16.8022 14.642 16.8224C14.642 16.8299 14.642 16.8389 14.6398 16.8471V16.8539C14.6094 17.2557 14.4807 17.6438 14.265 17.9841C14.0493 18.3245 13.7533 18.6066 13.403 18.8057C13.0376 19.0136 12.6242 19.1227 12.2037 19.122C10.8545 19.122 9.76019 18.0217 9.76019 16.6627C9.76019 15.303 10.8545 14.2027 12.2037 14.2027C12.4593 14.2027 12.7134 14.2432 12.9563 14.3226L12.96 11.3724C12.2225 11.2772 11.4732 11.336 10.7595 11.545C10.0458 11.754 9.38322 12.1087 8.8135 12.5867C8.31419 13.0203 7.89439 13.5378 7.57299 14.1158C7.45081 14.3264 6.98909 15.1741 6.93362 16.5488C6.89839 17.3283 7.133 18.1379 7.24469 18.4714V18.4789C7.31439 18.6753 7.58723 19.3469 8.03097 19.9128C8.3888 20.367 8.81159 20.7661 9.28572 21.0971V21.0896L9.29247 21.0971C10.6941 22.049 12.2495 21.9868 12.2495 21.9868C12.5186 21.9756 13.4203 21.9868 14.4442 21.5019C15.5797 20.9637 16.2259 20.1624 16.2259 20.1624C16.6389 19.6835 16.9674 19.1378 17.1973 18.5486C17.4596 17.859 17.5466 17.033 17.5466 16.7032V10.76C17.5818 10.781 18.0503 11.0905 18.0503 11.0905C18.0503 11.0905 18.7249 11.523 19.7765 11.8041C20.5305 12.0043 21.5477 12.047 21.5477 12.047V9.17094C21.1917 9.20991 20.4683 9.09748 19.727 8.7287L19.7278 8.72795Z"
                        fill="#FCFFFE"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_435"
                          x1="14.0594"
                          y1="0.0297852"
                          x2="14.0594"
                          y2="26.9699"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0CD8AE" />
                          <stop offset="1" stop-color="#0CD845" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className=" pe-1">
                    <svg
                      className={props.display_none}
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.890137"
                        y="0.0297852"
                        width="26.9401"
                        height="26.9401"
                        rx="13.47"
                        fill="url(#paint0_linear_1_437)"
                      />
                      <path
                        d="M15.9964 10.2744H13.2183V20.1037H16.2099V15.342C16.2099 13.7464 16.7974 12.7308 18.2101 12.7308C19.2284 12.7308 19.6298 13.6727 19.6298 15.342V20.1037H22.6204V14.6743C22.6204 11.7433 21.9197 10.1458 18.9645 10.1458C17.423 10.1458 16.3972 10.8676 15.9964 11.6696V10.2744Z"
                        fill="#FCFFFE"
                      />
                      <path
                        d="M11.0808 19.9759H8.08908V10.1458H11.0808V19.9759Z"
                        fill="#FCFFFE"
                      />
                      <path
                        d="M11.3748 7.68876C11.4687 7.45048 11.5143 7.19576 11.5089 6.93964C11.4976 6.43684 11.29 5.95836 10.9305 5.6067C10.5711 5.25501 10.0882 5.05811 9.58545 5.05811C9.08219 5.05811 8.59932 5.25501 8.23985 5.6067C7.88037 5.95836 7.67327 6.43684 7.66201 6.93964C7.6561 7.19576 7.70171 7.45048 7.79614 7.68876C7.89003 7.92705 8.03114 8.14414 8.21034 8.32729C8.32354 8.44328 8.45124 8.54422 8.58912 8.62785C8.66907 8.67627 8.75276 8.71892 8.83915 8.75534C9.07575 8.85467 9.32899 8.90584 9.58545 8.90584C9.84138 8.90584 10.0952 8.85467 10.3312 8.75534C10.5673 8.65598 10.7814 8.51045 10.9606 8.32729C11.0749 8.21053 11.1736 8.07999 11.2541 7.93895C11.3002 7.85874 11.3404 7.77514 11.3748 7.68876Z"
                        fill="#FCFFFE"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_437"
                          x1="14.3602"
                          y1="0.0297852"
                          x2="14.3602"
                          y2="26.9699"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0CD8AE" />
                          <stop offset="1" stop-color="#0CD845" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className=" pe-1">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.190796"
                        y="0.0297852"
                        width="26.9401"
                        height="26.9401"
                        rx="13.47"
                        fill="url(#paint0_linear_1_439)"
                      />
                      <path
                        d="M13.6605 5.72705C15.7233 5.72705 15.9807 5.73464 16.79 5.7726C17.5985 5.81056 18.149 5.93735 18.6333 6.12563C19.1344 6.31847 19.5565 6.57964 19.9786 7.001C20.3647 7.38052 20.6634 7.83961 20.854 8.34631C21.0415 8.82992 21.1691 9.3811 21.207 10.1897C21.2427 10.999 21.2526 11.2563 21.2526 13.3191C21.2526 15.3819 21.245 15.6392 21.207 16.4485C21.1691 17.2571 21.0415 17.8075 20.854 18.2919C20.664 18.7989 20.3652 19.2581 19.9786 19.6372C19.599 20.0231 19.1399 20.3218 18.6333 20.5126C18.1497 20.7001 17.5985 20.8276 16.79 20.8656C15.9807 20.9013 15.7233 20.9111 13.6605 20.9111C11.5978 20.9111 11.3404 20.9036 10.5311 20.8656C9.72253 20.8276 9.17211 20.7001 8.68774 20.5126C8.18084 20.3224 7.72167 20.0236 7.34243 19.6372C6.9563 19.2577 6.65757 18.7986 6.46706 18.2919C6.27878 17.8083 6.15199 17.2571 6.11403 16.4485C6.07835 15.6392 6.06848 15.3819 6.06848 13.3191C6.06848 11.2563 6.07607 10.999 6.11403 10.1897C6.15199 9.38035 6.27878 8.83068 6.46706 8.34631C6.65704 7.8393 6.95584 7.38008 7.34243 7.001C7.72178 6.61474 8.18091 6.31599 8.68774 6.12563C9.17211 5.93735 9.72178 5.81056 10.5311 5.7726C11.3404 5.73692 11.5978 5.72705 13.6605 5.72705ZM13.6605 9.52308C12.6538 9.52308 11.6882 9.92301 10.9763 10.6349C10.2644 11.3468 9.86451 12.3123 9.86451 13.3191C9.86451 14.3259 10.2644 15.2914 10.9763 16.0033C11.6882 16.7152 12.6538 17.1151 13.6605 17.1151C14.6673 17.1151 15.6328 16.7152 16.3447 16.0033C17.0566 15.2914 17.4566 14.3259 17.4566 13.3191C17.4566 12.3123 17.0566 11.3468 16.3447 10.6349C15.6328 9.92301 14.6673 9.52308 13.6605 9.52308ZM18.5954 9.33327C18.5954 9.08158 18.4954 8.8402 18.3174 8.66223C18.1394 8.48425 17.898 8.38427 17.6464 8.38427C17.3947 8.38427 17.1533 8.48425 16.9753 8.66223C16.7973 8.8402 16.6974 9.08158 16.6974 9.33327C16.6974 9.58497 16.7973 9.82635 16.9753 10.0043C17.1533 10.1823 17.3947 10.2823 17.6464 10.2823C17.898 10.2823 18.1394 10.1823 18.3174 10.0043C18.4954 9.82635 18.5954 9.58497 18.5954 9.33327ZM13.6605 11.0415C14.2646 11.0415 14.8439 11.2814 15.271 11.7086C15.6982 12.1357 15.9381 12.715 15.9381 13.3191C15.9381 13.9232 15.6982 14.5025 15.271 14.9296C14.8439 15.3568 14.2646 15.5967 13.6605 15.5967C13.0565 15.5967 12.4771 15.3568 12.05 14.9296C11.6229 14.5025 11.3829 13.9232 11.3829 13.3191C11.3829 12.715 11.6229 12.1357 12.05 11.7086C12.4771 11.2814 13.0565 11.0415 13.6605 11.0415Z"
                        fill="#FCFFFE"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_439"
                          x1="13.6608"
                          y1="0.0297852"
                          x2="13.6608"
                          y2="26.9699"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0CD8AE" />
                          <stop offset="1" stop-color="#0CD845" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className=" pe-1">
                    <svg
                      className={props.display_none}
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.491577"
                        y="0.0297852"
                        width="26.9401"
                        height="26.9401"
                        rx="13.47"
                        fill="url(#paint0_linear_1_441)"
                      />
                      <path
                        d="M13.9606 6.896C5.53155 6.896 5.38403 7.64559 5.38403 13.4999C5.38403 19.3543 5.53155 20.1039 13.9606 20.1039C22.3896 20.1039 22.5372 19.3543 22.5372 13.4999C22.5372 7.64559 22.3896 6.896 13.9606 6.896ZM16.7094 13.7864L12.8585 15.5841C12.5215 15.7401 12.2453 15.5652 12.2453 15.193V11.8069C12.2453 11.4356 12.5215 11.2598 12.8585 11.4158L16.7094 13.2135C17.0464 13.3713 17.0464 13.6286 16.7094 13.7864Z"
                        fill="#FCFFFE"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_441"
                          x1="13.9616"
                          y1="0.0297852"
                          x2="13.9616"
                          y2="26.9699"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0CD8AE" />
                          <stop offset="1" stop-color="#0CD845" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
                <li className="mt-md-5 pt-md-5">
                  {" "}
                  <Link to="/">
                    <a
                      className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links"
                      href="#"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/Kundenrezensionen">
                    <a
                      className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links"
                      href="#"
                    >
                      Kundenrezensionen
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/Login">
                    {" "}
                    <a
                      className=" ff_Poiret fs_sm fw-medium text_theme_white hover_nav_links"
                      href="#"
                    >
                      Karriere
                    </a>
                  </Link>
                </li>
                <span className="d-md-none ">
                  <a className="btn_common d-inline-block fw-normal " href="#">
                    Jetzt Erstgespräch vereinbaren{" "}
                    <img
                      className="imgLine_btn_common"
                      src={Arrow_btn_nav}
                      alt="ARROW"
                    />
                  </a>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyNav;
