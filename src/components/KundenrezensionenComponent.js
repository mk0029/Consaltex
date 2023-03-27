import React from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import MyNav from "./MyNav";
import VideoBox from "./VideoBox";

const KundenrezensionenComponent = () => {
  return (
    <>
      <Loader TeXTLOADER={"Kundenrezensionen"} textCount={"2000"} />
      <div className=" overflow-hidden ">
        <MyNav display_none={"d-none"} bg_promery={"bg-white"} />
        <VideoBox />
        <Footer />
      </div>
    </>
  );
};

export default KundenrezensionenComponent;
