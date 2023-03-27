import React from "react";
import Arrow_btn_nav from "../assets/img/webp/line_nav_img.webp";
import location from "../assets/img/Png/carbon_location-filled.png";
import mail from "../assets/img/Png/fluent_mail-20-filled.png";
import arrow from "../assets/img/Png/Arrow_october_right.png";
import arrow1 from "../assets/img/Png/Arrow_october_left.png";
import PINKtubeCalander from "../assets/img/Png/TubePinkCalander.png";
import GreenRightCalander from "../assets/img/Png/right_green_shaddow.png";
function MyCalander() {
  return (
    <>
      <section className=" py-xl-5 py-md-4 py-3 position-relative">
        <img
          src={PINKtubeCalander}
          alt="PINKtubeCalander"
          className="PINKtubeCalander position-absolute z_index0"
        />
        <img
          src={GreenRightCalander}
          alt="GreenRightCalander"
          className="GreenRightCalander position-absolute z_index0"
        />
        <div className=" container">
          <div className="">
            <div className="row">
              <div className="col-md-7">
                <div className=" text_theme_white">
                  <h3 className=" ff_Montserrat fw-normal fs_sm position-relative line_before text_theme_white">
                    Noch Fragen?
                  </h3>
                  <h2 className=" ff_Poiret fs_xl fw-normal text_theme_white position-relative z_index1">
                    Jetzt Erstgespräch vereinbaren
                  </h2>
                  <p className="ff_Montserrat fw-normal fs_sm text_theme_white">
                    Fülle das Formular aus und ein Experte auss{" "}
                    <span className="d-md-block">
                      {" "}
                      unserem Team wird sich zum ausgewählten
                    </span>{" "}
                    Zeitfenster bei dir melden.
                  </p>
                  <div className="calander_Sprator_line my-5"></div>
                  <div className="d-flex flex-column justify-content-center gap-2">
                    <span className=" d-flex gap-2 align-items-center ">
                      <img src={location} alt="" />
                      <span className=" ff_Montserrat fs_sm fw-normal span_hover_calander">
                        22143 Hamburg, Rahlstedter Bahnhofstraße 27-29{" "}
                      </span>
                    </span>
                    <span className=" ff_Montserrat fs_sm fw-normal d-flex gap-2 align-items-center ">
                      <img src={mail} alt="" />
                      <span className=" ff_Montserrat fs_sm fw-normal span_hover_calander ">
                        info@consaltex.de{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-5 mt-5 mt-md-0   ">
                <div className="py-3 px-sm-4  px-3 z_index1 position-relative  bg_calander">
                  <div className="d-flex align-items-center  justify-content-between px-md-2">
                    <a href="#">
                      <img src={arrow1} alt="arrow1" />
                    </a>
                    <a
                      className=" fs_xsm fw-normal ff_Montserrat text_theme_white mb-0"
                      href="#"
                    >
                      October
                    </a>
                    <a href="#">
                      {" "}
                      <img src={arrow} alt="arrow" />
                    </a>{" "}
                  </div>
                  <table className="mt-4 d-flex justify-content-between w-100 text-center px-md-2">
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm fw-normal ff_Montserrat text_theme_white">
                        Sun
                      </th>
                      <td className="table_text_hover fs_xsm mt-3 fw-normal ff_Montserrat table_text_color">
                        25
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        02
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        09
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        16
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        23
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        30
                      </td>
                    </tr>
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm  fw-normal ff_Montserrat text_theme_white">
                        Mon
                      </th>
                      <td className="fs_xsm table_text_hover mt-3 fw-normal ff_Montserrat table_text_color">
                        26
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        03
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        10
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        17
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        24
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        31
                      </td>
                    </tr>
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm  fw-normal ff_Montserrat text_theme_white">
                        Tue
                      </th>
                      <td className="fs_xsm table_text_hover mt-3 fw-normal ff_Montserrat table_text_color">
                        27
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        04
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        11
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        18
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        25
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat table_text_color">
                        01
                      </td>
                    </tr>
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm  fw-normal ff_Montserrat text_theme_white">
                        Wed
                      </th>
                      <td className="fs_xsm table_text_hover mt-3 fw-normal ff_Montserrat table_text_color">
                        28
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        05
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        12
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        19
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        26
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat table_text_color">
                        02
                      </td>
                    </tr>
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm  fw-normal ff_Montserrat text_theme_white">
                        Thu
                      </th>
                      <td className="fs_xsm table_text_hover mt-3 fw-normal ff_Montserrat table_text_color">
                        29
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        06
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        13
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        20
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        27
                      </td>
                      <td className="fs_xsm table_text_hover mt-2 fw-normal ff_Montserrat table_text_color">
                        03
                      </td>
                    </tr>
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm  fw-normal ff_Montserrat text_theme_white">
                        Fri
                      </th>
                      <td className="fs_xsm px-1 table_text_hover mt-3 fw-normal ff_Montserrat table_text_color">
                        30
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        07
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        14
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        21
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        28
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat table_text_color">
                        04
                      </td>
                    </tr>
                    <tr className=" z_index1 d-flex flex-column">
                      <th className="fs_xsm  fw-normal ff_Montserrat text_theme_white">
                        Sat
                      </th>
                      <td className="fs_xsm px-1 table_text_hover mt-3 fw-normal ff_Montserrat text_theme_white">
                        01
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        08
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        15
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        22
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat text_theme_white">
                        29
                      </td>
                      <td className="fs_xsm px-1 table_text_hover mt-2 fw-normal ff_Montserrat table_text_color">
                        05
                      </td>
                    </tr>
                  </table>
                  <h2 className="fs_xsm fw_semibold mt-4 pt-2 mb-3 ff_Montserrat text-center text-white z_index1 px-md-2">
                    Timings
                  </h2>
                  <div className="row px-md-2">
                    <div className="col-6 p-1">
                      <button className="w-100 fs_xsm fw-normal text_theme_white btn_tabel z_index1">
                        1.00 PM-2.00 PM
                      </button>
                    </div>
                    <div className="col-6 p-1">
                      <button className="w-100 fs_xsm fw-normal text_theme_white btn_tabel z_index1">
                        3.00 PM-4.00 PM
                      </button>
                    </div>{" "}
                    <div className="col-6 p-1">
                      <button className="w-100 fs_xsm fw-normal text_theme_white btn_tabel z_index1">
                        6.00 PM-8.00 PM
                      </button>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-3">
                    {" "}
                    <div className="col-6">
                      <div className="d-flex justify-content-between common_button px-0 py-0 align-items-center z_index1">
                        <span className=" position-relative z_index2">
                          <a
                            className="btn_submit_calander d-flex justify-content-between align-items-center d-inline-block fw-normal "
                            href="#"
                          >
                            Submit
                            <img
                              className="imgLine_btn_common_calander"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyCalander;
