import React from "react";
import Footer from "./Footer";
import Loader from "./Loader";
import Login from "./Login";
import MyNav from "./MyNav";

function LoginPage() {
  return (
    <>
      {" "}
      <Loader TeXTLOADER={"Karriere"} textCount={"1500"} />{" "}
      <div className="d-flex flex-column  bg_primery bg_img_header">
        <MyNav display_none={"d-none"} />
        <div className="d-flex flex-grow-1 flex-column justify-content-center ">
          <Login />
        </div>
      </div>
      <div className=" overflow-hidden">
        <Footer />
      </div>
    </>
  );
}

export default LoginPage;
