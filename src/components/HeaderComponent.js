import React from "react";
import Header from "./Header";
import MyNav from "./MyNav";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Logos from "./Logos";
import Team from "./Team";
import Ergebnisse from "./Ergebnisse";
import Weiter from "./Weiter";
import MyCalander from "./MyCalander";
import Umsatzmaschine from "./Umsatzmaschine";
import Aktuelle from "./Aktuelle";
import Footer from "./Footer";
import Loader from "./Loader";

const HeaderComponent = () => {
  return (
    <>
      <Loader TeXTLOADER={"Consaltex"} textCount={"4000"} />
      <div className=" overflow-hidden">
        <div className="d-flex flex-column min_vh_100 bg_primery bg_img_header">
          <MyNav />
          <div className="d-flex flex-grow-1 flex-column justify-content-center ">
            <Header />
          </div>
        </div>
        <Logos /> <Umsatzmaschine /> <Testimonials /> <Team /> <Ergebnisse />
        <Weiter /> <Aktuelle />
        <Faq />
        <MyCalander />
        <Footer />
      </div>
    </>
  );
};

export default HeaderComponent;
